import axios from 'axios';

const api = axios.create({
    baseURL: 'https://vipdistribuidora.herokuapp.com/',
})

export default api;