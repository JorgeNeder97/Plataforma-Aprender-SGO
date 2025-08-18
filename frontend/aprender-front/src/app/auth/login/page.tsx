"use client";
import Link from "next/link";
import { useForm, SubmitHandler } from 'react-hook-form';
import { UserLogin } from '@/models/users';
import { useRouter } from "next/navigation";
import { useAuth } from '@/hooks/useAuth';
import { useState } from 'react';


const LoginPage = () => {

    // Maneja la validación del backend
    const [backendErrors, setBackendErrors] = useState<string | null>(null);

    // Maneja el loader
    const [loadingRequest, setLoadingRequest] = useState<boolean>(false);

    // Maneja el formulario y sus validaciones
    const { register, handleSubmit, formState: {errors}, setValue } = useForm<UserLogin>({
        mode: "onChange"
    });
    
    // Maneja las redirecciones
    const router = useRouter();

    // Funcion que registra al usuario
    const { signIn } = useAuth();

    // Maneja el envío del formulario
    const onSubmit:SubmitHandler<UserLogin> = async (data:UserLogin) => {
        setLoadingRequest(true);
        const res = await signIn(data.username, data.password);
        if(res.status == 200 ) {
            setLoadingRequest(false);
            router.push("/dashboard");
        } 
        else {
            setLoadingRequest(false);
            console.log("Se produjo un error al iniciar sesión.");
        }
    }

    return (
        <main className="form__page">
            <Link href="/" className="absolute top-[15px] right-[20px] lg:right-[40px] font-medium text-slate-300 hover:cursor-pointer hover:text-primary transition-all duration-[.3s] ease-in-out">
                Volver
            </Link>
            <div className="form__container">
                <h2 className="form__title">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="form pb-[40px]">
                    <div className="form__label-input-span">
                        <label className="form__label" htmlFor="username">Nombre de usuario</label>
                        <input 
                            {...register("username", {
                                required: {
                                    value: true,
                                    message: "Debes ingresar tu nombre de usuario",
                                }
                            })}
                            type="text" 
                            className="form__input"
                            onChange={() => setBackendErrors(null)}
                        />
                        <span className={errors.username ? "form__error-span" : "opacity-0 h-[10px]"}>{errors.username?.message?.toString() || ""}</span>
                    </div>
                    <div className="form__label-input-span">
                        <label className="form__label" htmlFor="password">Contraseña</label>
                        <input 
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "Debes ingresar tu contraseña"
                                }
                            })}
                            type="password" 
                            className="form__input"
                            onChange={(e) => {
                                setValue("password", e.target.value, { shouldValidate: true });
                                setBackendErrors(null);
                            }}
                        />
                        <span className={errors.password ? "form__error-span" : "opacity-0 h-[10px]"}>{errors.password?.message?.toString() || ""}</span>
                    </div>
                    <div className="flex flex-col w-full place-items-center gap-[20px]">
                        <div className="absolute bottom-[5px] right-[10px] flex gap-[7px] text-[0.675rem]">
                            <span>¿No tienes una cuenta aún?</span>
                            <Link href="/auth/register" className="text-emerald-600 hover:text-emerald-400 transition-all duration-[.3s] ease-in-out">Registrate aquí</Link>
                        </div>
                        <span className={backendErrors != null ? "form__error-span" : "opacity-0 h-[10px]"}>{backendErrors ?? ""}</span>
                        <button className="form__send px-[0] w-[146px] h-[38px]">
                            {
                                loadingRequest ? 
                                    <span className="d-loading d-loading-spinner d-loading-sm lg:d-loading-md text-neutral-200 lg:translate-y-[-3px]"></span> 
                                    :
                                "Iniciar Sesión"
                            }
                            
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default LoginPage;
