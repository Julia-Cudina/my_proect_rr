import axios from "axios";

const baseInstance = axios.create({ 
    baseURL: 'https://0df6c884deaa53e2.mokky.dev',
    timeout: 3000,
});

export const get = baseInstance.get;

export const post = baseInstance.post;

