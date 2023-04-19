import { Server } from "socket.io";

const io = new Server({
  cors: {
    origin: "http://localhost:3000",
  },
});

// let onlineUsers = [];

// const addNewUser = (username, socketId) => {
// !onlineUsers.some((user) => user.username === username) &&
//     onlineUsers.push({ username, socketId });
// };

// const removeUser = (socketId) => {
//   onlineUsers = onlineUsers.filter((user) => user.socketId !== socketId);
// };

// const getUser = (username) => {
//   console.log("onlineusers", onlineUsers);
//   return onlineUsers.find((user) => user.username === username);
// };

io.on("connection", (socket) => {
  // socket.on("newUser", (username) => {
  //   console.log(username);
  //   addNewUser(username, socket.id);
  // });

  // socket.on("sendNotification", ({ senderName, receiverName, type }) => {
  //   console.log("sendNotification", senderName, receiverName);
  //   const receiver = getUser(receiverName);
  //   io.to(receiver.socketId).emit("getNotification", {
  //     senderName,
  //     type,
  //   });
  // });

  io.emit("sample", { abc: "some test data from localhost:5000123kkkkm" });

  // socket.on("sendText", ({ senderName, receiverName, text }) => {
  //   const receiver = getUser(receiverName);
  //   io.to(receiver.socketId).emit("getText", {
  //     senderName,
  //     text,
  //   });
  // });

  // socket.on("disconnect", () => {
  //   removeUser(socket.id);
  // });
});

io.listen("https://nodeappsservice.onrender.com");
