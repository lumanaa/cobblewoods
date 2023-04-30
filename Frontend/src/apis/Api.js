import axios from 'axios';

const Api = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

// creating route
export const testApi = () => Api.get('/');


// export const testApi = () => Api.get("/api/user/test");
