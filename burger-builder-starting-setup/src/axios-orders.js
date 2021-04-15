import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-9e5c7-default-rtdb.europe-west1.firebasedatabase.app'
});

export default instance;