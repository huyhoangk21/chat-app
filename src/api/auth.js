import axios from 'axios';

export default axios.create({
  baseURL: 'https://chat-app-hoang.herokuapp.com/api/auth',
});
