import axios from "axios";
import { userDataSlice } from "store/userData";
import { STORAGE_KEYS, getStorageItem } from "utils/storage";

const baseInstance = axios.create({ 
    baseURL: 'https://0df6c884deaa53e2.mokky.dev',
    timeout: 3000,
});


baseInstance.interceptors.request.use((config) => {
    const userData = getStorageItem(STORAGE_KEYS.USER_DATA)
    const token = userData?.token;

    console.log(token);

    if(token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export const get = baseInstance.get;

export const post = baseInstance.post;

