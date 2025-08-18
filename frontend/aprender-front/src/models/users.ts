export interface User {
    username: string,
    email: string,
    password: string,
    password2: string
}

export interface AuthState {
  accessToken: string | null;
  isAuthenticated: boolean;
}

export interface UserState {
    username: string | null;
    gender: string | null;
    first_name: string | null;
    last_name: string | null;
    email: string | null;
}

export interface UserLogin {
    username: string;
    password: string;
}

export interface RefreshResponse {
    // Para las respuestas de los post a refresh Token
    username: string;
    email: string;
    access: string;
    gender: string | null;
    first_name: string | null;
    last_name: string | null;
}


// Dashboard (borrar luego si no se usa)
export interface UserData {
    username: string,
    email: string,
    message: string,
}