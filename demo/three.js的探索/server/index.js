const Koa = require("koa");
const app = new Koa();
const server = require("http").createServer(app.callback());

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("chat", (val) => {
    socket.emit("chat", 'emit from server');
    socket.broadcast.emit("chat", val);
  });
});

server.listen(3001, () => {
  console.log("listening on *:3001");
});
