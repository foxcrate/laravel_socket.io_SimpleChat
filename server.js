const express = require("express");

const app = express();

const server = require('http').createServer(app);

const io = require('socket.io')(server , {
    cors: { origin: "*" }
});

server.listen( 3000 , ()=>{
    console.log('Server Is Running ..');
} );

io.on( 'connection' , (socket)=>{

    console.log("Connection Started ..");

    socket.on('message', (message)=>{
        //console.log("ON");
        console.log('New Message: ',message);
        //io.sockets.emit('get_message',message);
        socket.broadcast.emit('get_message',message);
    } );

    socket.on( 'disconnect' , (socket)=>{
        console.log("Connection Ended ..");
    } );

} );
