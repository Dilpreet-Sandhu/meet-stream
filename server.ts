//@ts-nocheck

// import { createServer } from 'http';
// import { parse } from 'url';
// import next from 'next';
// import { Server } from 'socket.io';
const {createServer} = require("http");
const {parse} = require("url");
const {Server} = require("socket.io");
const next = require("next");


const dev = process.env.NODE_ENV !== "production";

const app = next({dev});

const handle = app.getRequestHandler();


app.prepare().then(() => {
    const server = createServer((req,res) => {
        const parsedUrl = parse(req.url!,true);
        handle(req,res,parsedUrl);
    });

    const io = new Server(server);

    io.on("connection",(socket ) => {
        console.log("user connected");

        socket.on("offer",(data) => {
            socket.broadcast.emit("offer",data)
        });

        socket.on("answer",(data) => {
            socket.broadcast.emit("answer",data)
        })

        socket.on("candidate",(data) => {
            socket.broadcast.emit("candidate",data)
        })


        socket.on("disconnect",() => {
            console.log("user disconnected");
        })
    });

    const port = process.env.PORT || 3000;
    server.listen(3000,() => {
        console.log("serve set on port 3000")
    })
})