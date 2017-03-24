$(function () {
  var socket = io();
  $('form').submit(() => {
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
  });
});
