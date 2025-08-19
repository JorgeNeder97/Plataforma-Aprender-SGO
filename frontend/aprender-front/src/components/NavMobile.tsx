"use client";
import { useRef } from 'react';
import Image from 'next/image';

const NavMobile = () => {

    

    const asideRef = useRef<HTMLDivElement | null>(null);

    const handleButtonChange = () => {
        const asideElement = asideRef.current;
        asideElement ? asideElement.classList.toggle("translate-x-0") : "";
    }

    return (
        <header className="sticky top-[0px] z-50 lg:hidden bg-accent w-screen h-[80px] flex place-content-between place-items-center font-default">
            <figure className="flex gap-[15px] pl-[15px] place-items-center">
                <Image src={"/Logo.png"} width={50} height={50} className="max-w-[50px]" alt="Equipo Aprender - Logo" />
                <h1 className="text-bg font-extrabold"><p className="text-[16px]">PLATAFORMA</p><p className="text-[16px]">APRENDER</p></h1>
            </figure>
            <label className="absolute top-[17px] right-5 z-50 swap swap-rotate lg:hidden outline-none">
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" onChange={handleButtonChange} />

                {/* hamburger icon */}
                <svg
                    className="swap-off fill-white duration-[.2s] outline-none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    viewBox="0 0 512 512"
                >
                    <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>

                {/* close icon */}
                <svg
                    className="swap-on fill-white duration-[.2s] outline-none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    viewBox="0 0 512 512"
                >
                    <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
            </label>
            <nav className="mobile-menu" ref={asideRef}>
                <ul className="flex flex-col h-[50%] w-full place-content-evenly place-items-center">
                    <li><a className="nav-link" href="#operativos">Operativos 2025</a></li>
                    <li><a className="nav-link" href="#sobreNosotrosMobile">Sobre Nosotros</a></li>
                    <li><a className="nav-link" href="#contactanos">Contactanos</a></li>
                    <li><a className="nav-link" href="#ingresa">Ingresá</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default NavMobile;