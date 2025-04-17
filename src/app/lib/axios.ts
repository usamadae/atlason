// src/lib/axios.ts
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

let isAuthenticating = false;

axiosInstance.interceptors.request.use(
  async (config) => {
    if (typeof window === "undefined") return config;

    let token = localStorage.getItem("token");

    if (!token && !isAuthenticating) {
      isAuthenticating = true;

      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/Auth/login`,
          {
            username: process.env.API_USERNAME,
            password: process.env.API_PASSWORD,
          }
        );

        token = response?.data?.data?.token;

        if (token) {
          localStorage.setItem("token", token);
        }
      } catch (error) {
        console.error("Login failed:", error);
      } finally {
        isAuthenticating = false;
      }
    }

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
