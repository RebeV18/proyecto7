import axios from 'axios';
import { envLoader } from '../../config/envLoader';

const { backendUrl } = envLoader;

export const apiClient = axios.create({
    baseURL: backendUrl,
    timeout: 20000,
});

apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    token ? config.headers.authorization = `Bearer ${token}` : config;
}, (error) => Promise.reject(error));