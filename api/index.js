const express = require('express')
const app = require('express')()
const cors = require('cors');
const http = require('http').createServer(app)
const io = require('socket.io')(http)
app.use(express.static('public'))
app.use(cors())

const port = 3001

// app.get('/', (req, res) => {
//     res.end().status(200)
// })

http.on('error', () => {console.error('błond')}).listen(port, () => {
    console.log(`Listening at: http://localhost:${port}`)
})

let players = []


io.on('connection', (socket) => {
    console.log(socket.id)
    this.players.push(socket.id)
    console.log(`players: ${this.players}`)
    if(this.players.length == 1){
        socket.emit('playerNr', 1)
    }
    if(this.players.length == 2){
        socket.emit('playerNr', 2)
    }
    if(this.players.length > 2){
        socket.emit('playerNr', this.players.length + 1)
    }
    socket.on('select1', (tileNum) => {
        let data = {tileNum: tileNum, player: 1}
        io.emit('selectedTile', (data))
        console.log(data)
    
    })
    socket.on('select2', (tileNum) => {
        let data = {tileNum: tileNum, player: 2}
        io.emit('selectedTile', (data))
    })

})    
module.exports = {
	path: '/api',
	handler: app,
}
