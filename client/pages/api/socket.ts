import { Server } from "socket.io";

const SocetHandler = (req: any, res: any) => {
    if (!res.socket.server.io) {
        console.log("Initializing Socket.io");

        const io = new Server(res.socket.server);

        io.on("connection", (socket) => {
            console.log("New client connected");
            socket.on("disconnect", () => {
                console.log("Client disconnected");
            });
        });

        res.socket.server.io = io;
    } else {
        console.log("Using pre-initialized Socket.io");
    }
    res.end();
}

export default SocetHandler;