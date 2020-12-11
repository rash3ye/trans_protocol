let ws = new WebSocket("ws://localhost:8083");

ws.onmessage = message = console.log(
  `we received a message from the server: ${message}`
);

ws.send("Hello, its me client baby");
