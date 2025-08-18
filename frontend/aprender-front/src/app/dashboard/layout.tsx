'use client';
import { useEffect, useState } from 'react';
import { ensureAccessToken } from '@/utils/ensureAccessToken';

// Protege las rutas
export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await ensureAccessToken();
        setAuthChecked(true);
      } catch {
        // Redirección a login la maneja ensureAccessToken
      }
    };

    checkAuth();
  }, []);

  if (!authChecked) return null;

  return <>{children}</>;
}
