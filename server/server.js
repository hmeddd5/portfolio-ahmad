const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    console.log("Utilisateur connecté :", socket.id);

    socket.on("join_room", (room) => {
        socket.join(room);
        console.log("Utilisateur a rejoint la room :", room);
    });

    socket.on("send_message", (data) => {
        socket.to(data.room).emit("receive_message", data);
    });

    socket.on("typing", ({ username, room }) => {
        socket.to(room).emit("typing", { username });
    });

    socket.on("disconnect", () => {
        console.log("Utilisateur déconnecté :", socket.id);
    });
});

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
    console.log(`Serveur Socket.IO démarré sur le port ${PORT}`);
});