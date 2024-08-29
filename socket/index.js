import {createServer} from 'http';
import express from 'express';
import cors from 'cors';
import {Server} from 'socket.io';


const app = express();
const server = createServer(app);
const io = new Server(server,{
    cors : {
        origin : "http://localhost:3000",
        credentials : true
    }
});
app.use(cors({
    origin : "http://localhost:3000",
    credentials : true
}))

io.on("connection",(socket) => {
    
    socket.on("offer",(data) => {
        socket.broadcast.emit("offer",data);
        


    });

    socket.on("answer",(data) => {
        socket.broadcast.emit("answer",data)
    })

    socket.on("candidate",(data) => {
        socket.broadcast.emit("candidate",data);
    })



    socket.on("disconnect",() => {
        console.log("user dissconnected")
    })
})



server.listen(4000,() => {
    console.log("app started on port 4000")
})