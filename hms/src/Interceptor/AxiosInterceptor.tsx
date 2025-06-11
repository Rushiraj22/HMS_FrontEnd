import axios, { InternalAxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:9000',
});

axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        // You can modify the request config here if needed
        console.log('Request made with ', config);
        return config;
    },
    (error) => {
        // Handle request error
        return Promise.reject(error);
    }
);
export default axiosInstance;