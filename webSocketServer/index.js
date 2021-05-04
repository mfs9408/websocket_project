const webSocketsServerPort = 8000;
const webSocketServer = require("websocket").server;
const http = require("http");

const server = http.createServer();
server.listen(webSocketsServerPort);

const wsServer = new webSocketServer({
  httpServer: server,
});

const clients = {};

const getUniqueID = () => {
  const s4 = () =>
    Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  return s4() + s4() + "-" + s4();
};

wsServer.on("request", function (request) {
  let userID = getUniqueID();

  const connection = request.accept(null, request.origin);
  clients[userID] = connection;

  connection.on("message", function (message) {
    if (message.type === "utf8") {
      for (key in clients) {
        clients[key].sendUTF(message.utf8Data);
      }
    }
  });
});
