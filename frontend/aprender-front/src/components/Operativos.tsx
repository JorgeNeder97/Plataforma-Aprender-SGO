import Image from "next/image";

const Operativos = () => {
    return (
        <section id="operativos" className="max-w-screen font-default flex flex-col gap-[60px] lg:gap-[100px] place-items-center py-[60px] lg:py-[100px]">
            
            {/* Title */}
            <h3 className="titulo max-w-[400px] md:max-w-[500px] text-primary text-[24px] sm:text-[32px] md:text-[40px] font-semibold text-center lg:text-left py-[10px] md:py-0">OPERATIVOS 2025</h3>
            
            {/* Cards container */}
            <div className="flex flex-col lg:flex-row gap-[60px] lg:gap-[10px]">
            
                <div className="operativo-card">
                    <Image className="w-[80px] lg:w-[100px]" width={100} height={100} src={"/Aprender1.png"} alt="Aprender Primaria" />
                    <p className="mt-[10px]">Aprender Censal Primaria</p>
                    <p>(6to Grado)</p>
                </div>
            
                <div className="operativo-card">
                    <Image className="w-[80px] lg:w-[100px]" width={100} height={100} src={"/Acompañar.png"} alt="Acompañar" />
                    <p className="mt-[10px]">Acompañar</p>
                </div>
            
                <div className="operativo-card">
                    <Image className="w-[80px] lg:w-[100px]" width={100} height={100} src={"/Erce.png"} alt="ERCE 2025" />
                    <p className="w-[220px] text-center mt-[10px]">ERCE 2025</p>
                </div>
            
                <div className="operativo-card">
                    <Image className="w-[80px] lg:w-[100px]" width={100} height={100} src={"/Aprender2.png"} alt="Aprender Secundaria" />
                    <p className="mt-[10px]">Aprender Muestral Secundaria</p>
                    <p>(5to/6to Año)</p>
                </div>
            
                <div className="operativo-card">
                    <img className="w-[80px] lg:w-[100px]" width={100} height={100} src={"/Aprender1.png"} alt="Aprender Primaria" />
                    <p className="mt-[10px]">Aprender Muestral Primaria</p>
                    <p>(3er Grado)</p>
                </div>
            
            </div>
        
        </section>
    );
};

export default Operativos;