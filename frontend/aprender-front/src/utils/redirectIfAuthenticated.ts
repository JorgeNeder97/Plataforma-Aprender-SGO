"use client";
import axios from "axios";
import { store } from "@/redux/store";
import { setAccessToken } from "@/redux/features/authSlice";
import { RefreshResponse } from "@/models/users";
import { setUserData } from "@/redux/features/userSlice";

// Sirve para evitar el ingreso al login si el usuario ya esta logueado.
// Intenta obtener un accessToken desde Redux o renovarlo desde el refreshToken.
// Si consigue uno, redirige al dashboard.
// Si no, deja que se renderice la página actual (login/register).
export const redirectIfAuthenticated = async () => {
    const token = store.getState().auth.accessToken;
    if(token) {
        window.location.href = "/dashboard";    
        return;
    }
    
    try {
        const res = await axios.post<RefreshResponse>(
            `${process.env.NEXT_PUBLIC_API_URL}/users/refresh/`,
            {},
            { withCredentials: true }
        );
        store.dispatch(setAccessToken(res.data.access));
        const user = {
            username: res.data.username,
            gender: res.data.gender,
            first_name: res.data.first_name,
            last_name: res.data.last_name,
            email: res.data.email,
        };
        store.dispatch(setUserData(user));
    } catch (error) {
        // No redirige. Deja que el layout continúe sin token.
    }
};
