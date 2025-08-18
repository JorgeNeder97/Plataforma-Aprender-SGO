"use client";
import { useEffect, useState } from "react";
import { redirectIfAuthenticated } from "@/utils/redirectIfAuthenticated";

// Protege las rutas si el usuario ya está logueado
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const verify = async () => {
      await redirectIfAuthenticated();
      setChecking(false);
    };
    verify();
  }, []);

  if (checking) return null; // Aquí puede ir una pantalla de carga o spinner

  return <>{children}</>;
}
