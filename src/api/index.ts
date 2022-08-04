import axios from 'axios';
//https://api.b7web.com.br/
const api = axios.create({
  baseURL:'https://api.b7web.com.br/',
});

export default api;