import axios from 'axios';

export default axios.create({
    // baseURL: 'https://api.chucknorris.io/jokes/',
  	baseURL: 'http://localhost:8080/api',
});
