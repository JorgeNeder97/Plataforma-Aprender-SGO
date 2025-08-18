"use client";
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

// Esta funcion evita usar redux directamente en el layout.tsx, ya que al ser un server component
// devuelve un error porque redux utiliza "use client";
export function Providers({ children } : { children: React.ReactNode }) {
    return <Provider store={store}>{ children }</Provider>;
};