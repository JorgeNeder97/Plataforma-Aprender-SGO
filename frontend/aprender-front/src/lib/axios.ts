"use client";
import axios from "axios";
import { store } from "@/redux/store";
import { setAccessToken, logout } from "@/redux/features/authSlice";
import { RefreshResponse } from "@/models/users";
import { setUserData, logoutUserData } from "@/redux/features/userSlice";

// Instancia de axios para utilizar en la web (utiliza interceptors para mantener la sesion)

const getCookie = (name: string): string | null => {
    const match = document.cookie.match(
        new RegExp("(^| )" + name + "=([^;]+)")
    );
    return match ? decodeURIComponent(match[2]) : null;
};

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true, // importante para las cookies HttpOnly
});

api.interceptors.request.use((config) => {
    const csrfToken = getCookie('csrftoken');
    const token = store.getState().auth.accessToken;

    if (csrfToken && config.method !== 'get' && config.headers !== undefined) {
        config.headers['X-CSRFToken'] = csrfToken;
    }

    if (token && config.headers !== undefined) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

api.interceptors.response.use(
    (res) => res,
    async (error) => {
        const originalRequest = error.config;
        const refreshURL = "/users/refresh/";

        if (
            error.response?.status === 401 &&
            !originalRequest._retry &&
            !originalRequest.url.includes(refreshURL)
        ) {
            originalRequest._retry = true;

            try {
                const { data } = await api.post<RefreshResponse>(refreshURL);
                store.dispatch(setAccessToken(data.access));
                
                const user = {
                    username: data.username,
                    gender: data.gender,
                    first_name: data.first_name,
                    last_name: data.last_name,
                    email: data.email,
                };
                
                store.dispatch(setUserData(user));

                originalRequest.headers.Authorization = `Bearer ${data.access}`;
                return api(originalRequest);
            } catch (err) {
                store.dispatch(logoutUserData());
                store.dispatch(logout());
                if (typeof window !== "undefined") {
                    window.location.href = "/auth/login";
                }
                return Promise.reject(err);
            }
        }

        return Promise.reject(error);
    }
);

export default api;
