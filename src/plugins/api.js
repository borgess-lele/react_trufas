import axios from 'axios';

const { MY_IP } = process.env;

const api = axios.create({
  // baseURL: 'http://127.0.0.1:8000/api/',
  // baseURL: 'http://0.0.0.0:19003/api/',
  baseURL: 'https://trufas-dev-xqzt.3.us-1.fl0.io/api/',
});

export default api;
