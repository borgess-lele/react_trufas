import axios from 'axios';

const { MY_IP } = process.env;

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
});

export default api;
