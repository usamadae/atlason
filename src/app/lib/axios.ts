// src/lib/axios.ts
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

// No token handling or auth logic
axiosInstance.interceptors.request.use(
  (config) => {
    // No token setting
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
