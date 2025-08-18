"use client";
import { login, register, logout as logoutService} from '@/services/authService';
import { useDispatch } from 'react-redux';
import { setAccessToken, logout } from '@/redux/features/authSlice';
import { useRouter } from 'next/navigation';
import { setUserData, logoutUserData } from '@/redux/features/userSlice';
import { User } from '@/models/users';

// Hook que permite hacer Login, Register y Logout (Maneja la lógica)
export const useAuth = () => {

    const router = useRouter();
    const dispatch = useDispatch();

    // Login
    const signIn = async (username: string, password: string) => {
        try {
            const res = await login({ username, password });
            const access = res.data.access;
            const user = {
                username: res.data.username,
                gender: res.data.gender,
                first_name: res.data.first_name,
                last_name: res.data.last_name,
                email: res.data.email,
            }
            dispatch(setAccessToken(access));
            dispatch(setUserData(user));
            return res;
        } catch(error) {
            // Devuelve los errores del backend para las validaciones
            return error;
        }
    }

    // Register
    const signUp = async (data: User) => {
        try {
            const res = await register(data);
            return res;
        } catch(error) {
            // Devuelve los errores del backend para las validaciones
            return error;
        }
    }

    // Logout
    const logoutUser = async () => {
        try {
            await logoutService();
            dispatch(logoutUserData());
            dispatch(logout());
            router.push('/auth/login');
        } catch(error) {
            console.log(error)
            return 'Error, no se pudo cerrar la sesión del usuario.'
        }
    }


    return {signIn, signUp, logoutUser}
}