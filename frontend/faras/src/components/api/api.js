/*
=========================================
API.JS
=========================================

Purpose:
- Creates a reusable Axios instance.
- Sets the base URL for all API requests.
- Automatically attaches the JWT access token
  to every request using an Axios interceptor.

Why use this file?
- Avoids repeating the base URL.
- Avoids manually adding Authorization headers.
- Keeps API configuration centralized.
*/


import axios from "axios";

const api = axios.create({
    baseURL: "http://127.0.0.1:8000/api/v1/",
});

// Add access token to every request
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("access_token");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;