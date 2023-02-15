import axios from 'axios';

export const ApiClient = axios.create({
    baseURL: 'https://resttest.bench.co',
    headers: {
        "Content-type": "application/json"
    }
})