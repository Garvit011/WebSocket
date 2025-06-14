// console.log("Hello World")
import express from "express";
import { WebSocketServer } from "ws";

const app = express();
const port = 8080;

const server = app.listen(port, () => {
    console.log("Server is listening");
});

const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
    ws.on("message", (data) => {
        console.log("Data from Client: %s ", data);
        ws.send("Thanks for reaching G.K.");
    });
});