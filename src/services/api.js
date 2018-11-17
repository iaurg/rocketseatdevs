import axios from 'axios';

const apiToken = process.env.REACT_APP_GIT_TOKEN;

const api = axios.create({ 
    baseURL: "https://api.github.com/users",
    auth: {
        username: 'italox',
        password: apiToken
      }
});

export default api;