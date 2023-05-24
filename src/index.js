const express = require('express');
const { createServer } = require('http');
const realtimeServer = require('./realtime.server.js');
const path = require('path');
const cookieParser = require('cookie-parser');
const routes = require('./routes/');

const app = express();
const httpServer = createServer(app);

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.use(cookieParser())

// Routes
app.use(routes);

// Public
app.use(express.static(path.join(__dirname, 'public')));

// Levantar el servidor
httpServer.listen(app.get('port'), () => {
  console.log('El servidor esta corriendo en el puerto ' + app.get('port'));
});

// Llamo al servidor de socket.io
realtimeServer(httpServer);

