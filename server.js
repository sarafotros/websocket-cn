const express = require('express')
const path = require('path')
const http = require('http')
const socketio = require('socket.io')

const publicDir = path.join(__dirname, './public')

const app = express()
app.use(express.static(publicDir))

const server = http.createServer(app)
const io = socketio(server)

io.on('connection', (socket)=>{
    console.log('User has connected to the server');

    socket.emit('message', 'Welcome to the server')

    socket.on('sendMessage', (param)=>{
        io.emit('message', param)
    })
})



server.listen(4000, ()=>{
    console.log('Server is now running on port 4000');
})

