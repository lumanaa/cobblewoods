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

// register route
export const registerApi = (data) => Api.post('/api/user/register', data);

// Login route
export const loginApi = (data) => Api.post('/api/user/login', data);


// export const testApi = () => Api.get("/api/user/test");
