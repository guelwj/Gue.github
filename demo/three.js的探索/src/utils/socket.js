// 负责处理消息
import io from "socket.io-client";

export let socket;
export function initSocket() {
  socket = io("http://localhost:3001", {
    withCredentials: true,
  });

  // 连接成功
  socket.on("connect", () => {
    console.log("connected");
  });

  socket.on("connect_error", (err) => {
    console.log(err);
  });

  socket.on("chat", (msg) => {
    console.log(msg)
  });
}

export function clearSocket() {
  socket.off();
}
