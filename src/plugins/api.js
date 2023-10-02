import axios from 'axios';

const api = axios.create({
  baseURL: 'http://191.52.55.22:19003/api',
});

export default api;
