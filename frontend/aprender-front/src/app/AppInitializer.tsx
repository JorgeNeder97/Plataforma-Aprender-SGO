'use client';
import { useEffect } from 'react';
import axios from 'axios';

// Sirve para traer el CSRF Token (Protección CSRF)
const AppInitializer = () => {
  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/csrf/`, {
      withCredentials: true,
    }).catch(() => {
      console.warn("No se pudo obtener CSRF token");
    });
  }, []);

  return null;
};

export default AppInitializer;
