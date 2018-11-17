import axios from 'axios';

const api = axios.create({ 
    baseURL: "https://api.github.com/users",
    auth: {
        client_id: process.env.GIT_API_ID,
        client_secret: process.env.GIT_API_SECRET
    },
});

export default api;