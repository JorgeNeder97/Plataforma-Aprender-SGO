import Image from "next/image";

const Nav = () => {
    return (
        <header className="hidden bg-accent max-w-screen h-[60px] lg:flex place-content-between place-items-center font-default">
            <figure className="flex gap-[15px] pl-[40px] place-items-center">
                <Image src={"/Logo.png"} width={50} height={50} className="max-w-[50px]" alt="Equipo Aprender - Logo" />
                <h1 className="text-bg font-extrabold text-[24px]">PLATAFORMA APRENDER</h1>
            </figure>
            <nav className="w-[50%]">
                <ul className="w-full flex gap-[25px] pr-[40px] place-content-end">
                    <li><a className="nav-link" href="#operativos">Operativos 2025</a></li>
                    <li><a className="nav-link" href="#sobreNosotros">Sobre Nosotros</a></li>
                    <li><a className="nav-link" href="#contactanos">Contactanos</a></li>
                    <li><a className="nav-link" href="#ingresa">Ingresá</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Nav;