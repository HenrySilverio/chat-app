const express = require('express')
const app = express()

const rooms = ['general', 'tech', 'projetos', 'devs']
const cors = require('cors')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

require('./connection')

const server = require('http').createServer(app);
const PORT = 5000
const io = require('socket.io')(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
})

server.listen(PORT, () =>{
    console.log('SERVER RUINNING IN PORT', PORT)
})
