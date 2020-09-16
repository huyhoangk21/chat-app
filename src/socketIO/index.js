import io from 'socket.io-client';
let socket;
const ENDPOINT = 'https://chat-app-hoang.herokuapp.com/';

export const createSocket = (room, user) => {
  socket = io(ENDPOINT);
  if (socket && room) socket.emit('join room', { room, user });
};

export const disconnectSocket = (user, room) => {
  if (socket) socket.disconnect({ user, room });
};

export const sendMessage = (room, user, message) => {
  if (socket) socket.emit('chat message', { room, user, message });
};

export const receiveMessage = cb => {
  if (socket) {
    socket.on('chat message', ({ msg, sender }) => {
      return cb(null, msg, sender);
    });
  }
};
