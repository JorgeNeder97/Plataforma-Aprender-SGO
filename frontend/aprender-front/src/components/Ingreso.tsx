import Link from 'next/link';
import Image from 'next/image';

const Ingreso = () => {


    return (
        <section id="ingresa" className="bg-bg-alter font-default max-w-screen py-[60px] pb-[80px] lg:py-[100px] flex flex-col gap-[40px] lg:gap-[100px] place-content-center place-items-center">
            
            {/* Title */}
            <h3 className="titulo max-w-[400px] md:max-w-[500px] text-primary text-[24px] sm:text-[32px] md:text-[40px] font-semibold text-center lg:text-left py-[10px] md:py-0">INGRESAR</h3>
            
            {/* Cards Container */}
            <div className="flex flex-col lg:flex-row gap-[50px] px-[40px] lg:px-0">

                {/* Escuelas Card */}
                <div className="left bg-bg rounded-[15px] max-w-[400px] lg:w-[400px] lg:h-[300px] shadow-md shadow-gray-400 py-[40px] px-[20px] sm:px-[40px] lg:px-[40px] flex flex-col gap-[40px] place-items-center">
                    
                    {/* Title/Icon Container */}
                    <div className="flex gap-[10px] lg:gap-[15px] w-full place-content-start place-items-center">
                        <h4 className="text-primary font-semibold text-[20px] md:text-[24px] lg:text-[24px]">Rectores y Directores</h4>
                        <Image className="w-[30px] lg:w-[40px]" width={40} height={40} src={"/School.png"} alt="Escuelas" />
                    </div>
                    
                    <p className="text-paragraph text-[12px] lg:text-[14px] text-justify lg:w-[320px]">Si sos <strong>Rector/a</strong> o <strong>Director/a</strong> de una <strong>institución</strong> debes
                    ingresar haciendo click en el botón de abajo.</p>
                    
                    <Link href="/"><button className="bg-accent text-[12px] lg:text-[14px] text-bg font-medium px-[15px] min-w-[148px] lg:px-[30px] lg:min-w-[178px] py-[5px] lg:py-[15px] rounded-[3px] lg:rounded-[5px] shadow-sm shadow-shadows hover:bg-accent-hover hover:cursor-pointer transition-all duration-[.3s] ease-in-out">INICIAR SESIÓN</button></Link>
                
                </div>

                {/* Equipo Aprender Card */}
                <div className="right bg-bg rounded-[15px] max-w-[400px] lg:w-[400px] lg:h-[300px] shadow-md shadow-gray-400 py-[40px] px-[20px] sm:px-[40px] lg:px-[40px] flex flex-col gap-[40px] place-items-center">
                    
                    {/* Title/Icon Container */}
                    <div className="flex gap-[35px] lg:gap-[45px] w-full place-content-start place-items-center">
                        <h4 className="text-primary tracking-wider font-semibold text-[20px] md:text-[24px] lg:text-[24px]">Equipo Aprender</h4>
                        <Image className="w-[30px] lg:w-[40px]" width={40} height={40} src={"/Team.png"} alt="Equipo Aprender" />
                    </div>
                    
                    <p className="text-paragraph text-[12px] lg:text-[14px] text-justify lg:w-[320px]">Si formas parte del <strong>Equipo Aprender</strong> debes iniciar sesión haciendo click en el botón de abajo.</p>
                    
                    <Link href="/"><button className="bg-accent text-[12px] lg:text-[14px] text-bg font-medium px-[15px] min-w-[148px] lg:px-[30px] lg:min-w-[178px] py-[5px] lg:py-[15px] rounded-[3px] lg:rounded-[5px] shadow-sm shadow-shadows hover:bg-accent-hover hover:cursor-pointer transition-all duration-[.3s] ease-in-out">INICIAR SESIÓN</button></Link>
                
                </div>

            </div>
        
        </section>
    );
};

export default Ingreso;