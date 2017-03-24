const path = require('path');
const express = require('express');
const app = express(); // returns JS Function not something to pass to sockets
const socketio = require('socket.io');

// app.listen returns an http.Server object
const server = app.listen(3000, function() {
  console.log('listening on port 3000');
});

const io = socketio(server);

app.use(express.static(path.join(__dirname, 'browser')));

app.get('/', function(req, res, next) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', socket => {
  console.log('a user connected');

  socket.on('chat message', message => {
    console.log('message: ', message);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

