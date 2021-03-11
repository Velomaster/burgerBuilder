import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-f8975-default-rtdb.firebaseio.com/'
});

export default instance;