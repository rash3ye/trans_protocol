const http = require("http");
const { connect } = require("http2");
const WebSocketServer = require("websocket").server;
let connection = null;

const httpserver = http.createServer((req, res) => {
  console.log("we received a request");
});

const websocket = new WebSocketServer({
  httpServer: httpserver,
});

websocket.on("request", (request) => {
  connection = request.accept(null, request.origin);
  connection.on("open", () => console.log("Opened!!!"));
  connection.on("close", () => console.log("Closed!!!"));
  connection.on("message", (message) =>
    console.log(`Received message ${message.utf8Data}`)
  );
});

sendevery5seconds();

httpserver.listen(8083, () => console.log("Server is listening on 8083"));

function sendevery5seconds() {
  connection.send(`Message ${Math.random()}`);

  setTimeout(sendevery5seconds, 5000);
}
