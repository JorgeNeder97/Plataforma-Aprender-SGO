"use client";
import api from '@/lib/axios'
import { UserLogin, User } from '@/models/users';
import { UserData } from '@/models/users';

// Petición POST al backend para hacer login
export const login = async (data: UserLogin): Promise<any> => {
    return await api.post('/users/login/', data);
};

// Petición POST al backend para hacer register (En este proyecto hacemos los register desde /admin)
export const register = async (data: User): Promise<any> => {
   const response = await api.post('/users/register/', data);
   return response.data;
};

// Petición POST al backend para hacer logout
export const logout = async (): Promise<void> => {
    const response = await api.post<void>('/users/logout/');
    return response.data;
}

// Ejemplo dashboard (poner en otro archivo de services, ej: dashboardService.ts)
export const getDashboardInfo = async (): Promise<UserData> => {
    const response = await api.get<UserData>('/users/dashboard/');
    return response.data;
}
