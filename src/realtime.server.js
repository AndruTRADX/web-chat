const { Server } = require('socket.io') 

module.exports = function realtimeServer(httpServer) {
  const io = new Server(httpServer)

  io.on('connection', (socket) => {
    const cookie = socket.handshake.headers.cookie
    const user = cookie.split('=').pop()
    
    socket.on('message', (message) => {
      io.emit('message', {
        user,
        message
      })
    })
  })
}
