import axios from 'axios';

const api = axios.create({
    baseURL: 'https://vip-back-end.herokuapp.com',
})

export default api;