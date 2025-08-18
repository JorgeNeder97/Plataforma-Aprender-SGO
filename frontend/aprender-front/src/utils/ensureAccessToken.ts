"use client";
import axios from "axios";
import { store } from "@/redux/store";
import { setAccessToken, logout } from "@/redux/features/authSlice";
import { RefreshResponse } from "@/models/users";
import { logoutUserData, setUserData } from "@/redux/features/userSlice";

// Sirve para proteger las rutas
// Verifica si existe el accessToken, si no existe intenta renovarlo, si no puede hace logout.
export const ensureAccessToken = async () => {
  const token = store.getState().auth.accessToken;
  if (token) return;

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
    store.dispatch(logoutUserData());
    store.dispatch(logout());
    if (typeof window !== "undefined") {
      window.location.href = "/auth/login";
    }
    throw error;
  }
};
