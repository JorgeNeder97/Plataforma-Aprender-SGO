"use client";
import { useForm } from 'react-hook-form';
import { User } from '@/models/users';
import { useRouter } from "next/navigation";
import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';
import { useState } from 'react';

const RegisterPage = () => {

    // Maneja la validación del backend (solo se usa en email en este caso)
    const [backendErrors, setBackendErrors] = useState<string | null>(null);

    // Maneja el loader
    const [loadingRequest, setLoadingRequest] = useState<boolean>(false);

    // Maneja el formulario y sus validaciones
    const { register, handleSubmit, formState: {errors}, watch } = useForm();
    
    // Maneja las redirecciones
    const router = useRouter();

    // Funcion que registra al usuario
    const { signUp } = useAuth();

    // Guarda lo que ingresa el usuario en el campo password
    const pass = watch("password");

    // Maneja el envío del formulario
    const onSubmit = handleSubmit(async (data:User) => {
        setLoadingRequest(true);
        const res = await signUp(data);
        if(res.status == 201 || res.status == 200) {
            setLoadingRequest(false);
            router.push("/auth/login");
        } 
        else if(res.status == 400) {
            // Cambiar esto si necesitas validar mas campos
            setLoadingRequest(false);
            setBackendErrors(res.response.data.email[0]);
        }
        else {
            setLoadingRequest(false);
            console.log("Se produjo un error al registrar el usuario.");
        }
    })

    return (
        <main className="form__page">
            <div className="form__container">
                <h2 className="form__title">Register</h2>
                <form onSubmit={onSubmit} className="form">
                    <div className="form__label-input-span">
                        <label className="form__label" htmlFor="">Nombre de usuario</label>
                        <input 
                            className="form__input"
                            type="text"
                            {...register("username", {
                                required: {
                                    value: true,
                                    message: "Debes ingresar un nombre de usuario",
                                },
                                minLength: {
                                    value: 3,
                                    message: "El mínimo permitido de caracteres es 3"
                                },
                                maxLength: {
                                    value: 15,
                                    message: "El máximo permitido de caracteres es 15",
                                },
                            })}
                        />
                        <span className={errors.username ? "form__error-span" : "opacity-0 h-[10px]"}>{errors.username?.message?.toString() || ""}</span>
                    </div>
                    <div className="form__label-input-span">
                        <label className="form__label" htmlFor="">Email</label>
                        <input 
                            className="form__input"
                            type="email"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "Debes ingresar un email",
                                }
                            })}
                            onChange={() => setBackendErrors(null)}
                        />
                        <span className={errors.email || backendErrors ? "form__error-span" : "opacity-0 h-[10px]"}>{errors.email?.message?.toString() ?? backendErrors ?? ""}</span>
                    </div>
                    <div className="form__label-input-span">
                        <label className="form__label" htmlFor="">Contraseña</label>
                        <input 
                            className="form__input"
                            type="password"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "Debes ingresar una contraseña"
                                },
                                minLength: {
                                    value: 8,
                                    message: "El mínimo permitido de caracteres es 8",
                                },
                            })}
                        />
                        <span className={errors.password ? "form__error-span" : "opacity-0 h-[10px]"}>{errors.password?.message?.toString() || ""}</span>
                    </div>
                    <div className="form__label-input-span">
                        <label className="form__label" htmlFor="">Confirmar contraseña</label>
                        <input 
                            className="form__input"
                            type="password"
                            {...register("password2", {
                                required: {
                                    value: true,
                                    message: "Debes confirmar la contraseña"
                                },
                                validate: (value:string) => {
                                    if(pass === value) return true;
                                    else return "Las contraseñas no coinciden"
                                }
                            })}
                        />
                        <span className={errors.password2 ? "form__error-span": "opacity-0 h-[10px]"}>{errors.password2?.message?.toString() || ""}</span>
                    </div>
                    <div className="flex flex-col w-full place-items-center gap-[20px]">
                        <div className="absolute bottom-[5px] right-[10px] flex gap-[7px] text-[0.675rem]">
                            <span>¿Ya tienes una cuenta?</span>
                            <Link href="/auth/login" className="text-emerald-600 hover:text-emerald-400 transition-all duration-[.3s] ease-in-out">Inicia sesión aquí</Link>
                        </div>
                        <button className="form__send px-[0] w-[146px] h-[38px]">
                            {
                                loadingRequest ? 
                                    <span className="d-loading d-loading-spinner d-loading-sm lg:d-loading-md text-neutral-200 lg:translate-y-[-3px]"></span> 
                                    :
                                "Registrarme"
                            }
                            
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default RegisterPage;
