import express from "express";
import { WebSocketServer } from "ws";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 8080;

// Serve static files from the client folder
app.use(express.static(path.join(__dirname, "../Client")));

const server = app.listen(port, () => {
    console.log("Server is listening on http://localhost:8080");
});

const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
    console.log("Client connected");
    ws.on("message", (data) => {
        console.log("Data from Client:", data.toString());
        ws.send("Thanks for reaching G.K.");
    });
});
