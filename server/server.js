import express from "express"
const app = express()
import http from "http"
import { Server } from "socket.io"

import { dirname } from "path"; 
import { fileURLToPath } from "url";

const port = 3000
const server = http.createServer(app);
const io = new Server(server)

const __filename = fileURLToPath(import.meta.url);
app.use(express.static(dirname(__filename)));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });

  server.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });

  io.on("connection", (socket) => {
      console.log(`[SOCKET CONNECTED] ${socket.id}`)

      
})