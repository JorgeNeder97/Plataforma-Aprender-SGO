import Image from "next/image";

const SobreNosotrosMobile = () => {
  return (
    <section id="sobreNosotrosMobile" className="lg:hidden z-10 flex flex-col gap-[100px] place-items-center bg-bg-alter pt-[50px]">
        <h3 className="titulo max-w-[400px] md:max-w-[500px] text-primary text-[24px] sm:text-[32px] md:text-[40px] font-semibold text-center lg:text-left py-[10px] md:py-0">NUESTRO EQUIPO</h3>
        <div className="flex flex-col gap-[100px]">
            <div className="equipo-card-mobile">
                <h4 className="titulo text-primary font-semibold text-subtitle-lg text-center">Referente Jurisdiccional</h4>
                
                <div className="titulo flex flex-col place-items-center gap-[10px]">
                    <figure>
                        <Image className="w-[600px] rounded-[15px]" width={600} height={600} src={"/Imagen1.png"} alt="" />  
                    </figure>
                    <figcaption className="text-paragraph text-paragraph-size">
                        Adriana Noemí Sanchez
                    </figcaption>
                </div>

                <p className="titulo text-paragraph text-paragraph-lg px-[5px] text-justify">Nuestra Referente Jurisdiccional y Líder de equipo <strong>Adriana Noemí Sánchez</strong> es la encargada de </p>
            </div>

            <div className="equipo-card-mobile">
            <h4 className="titulo text-primary font-semibold text-subtitle-lg text-center">Implementación</h4>

                <div className="titulo flex flex-col place-items-center gap-[10px]">
                    <figure>
                        <Image className="w-[600px] rounded-[15px]" width={600} height={600} src={"/Imagen1.png"} alt="" />  
                    </figure>
                    <figcaption className="text-paragraph text-paragraph-size">
                        Valeria Moreno y Cecilia Urbani
                    </figcaption>
                </div>
                
                <p className="titulo text-paragraph text-paragraph-lg px-[5px] text-justify">Nuestra area de implementación, conformada por <strong>Valeria Moreno</strong> y <strong>Cecilia Urbani</strong>, es la encargada de</p>
            </div>

            <div className="equipo-card-mobile">
                <h4 className="titulo text-primary font-semibold text-subtitle-lg text-center">Area Pedagógica</h4>
                
                <div className="titulo flex flex-col place-items-center gap-[10px]">
                    <figure>
                        <Image className="w-[600px] rounded-[15px]" width={600} height={600} src={"/Imagen1.png"} alt="" />  
                    </figure>
                    <figcaption className="text-paragraph text-paragraph-size">
                        Adriana Suarez, Ana Carolina Tolosa y Luciana Rosario Tenreyro
                    </figcaption>
                </div>

                <p className="titulo text-paragraph text-paragraph-lg px-[5px] text-justify">Nuestra area pedagógica conformada por <strong>Adriana Suarez</strong>, <strong>Ana Carolina Tolosa</strong> y <strong>Luciana Rosario Tenreyro</strong>, se encarga de</p>
            </div>

            <div className="equipo-card-mobile">
            <h4 className="titulo text-primary font-semibold text-subtitle-lg text-center">Area Contable</h4>

                <div className="titulo flex flex-col place-items-center gap-[10px]">
                    <figure>
                        <Image className="w-[600px] rounded-[15px]" width={600} height={600} src={"/Imagen1.png"} alt="" />  
                    </figure>
                    <figcaption className="text-paragraph text-paragraph-size">
                        Florencia Pato y Augusto Donis
                    </figcaption>
                </div>
                
                <p className="titulo text-paragraph text-paragraph-lg px-[5px] text-justify">Nuestra area Contable conformada por <strong>Florencia Pato</strong> y <strong>Augusto Donis</strong>, es la encargada de</p>
            </div>

            <div className="equipo-card-mobile">
                <h4 className="titulo text-primary font-semibold text-subtitle-lg text-center">Area Informática</h4>
                
                <div className="titulo flex flex-col place-items-center gap-[10px]">
                    <figure>
                        <Image className="w-[600px] rounded-[15px]" width={600} height={600} src={"/Imagen1.png"} alt="" />  
                    </figure>
                    <figcaption className="text-paragraph text-paragraph-size">
                        Jorge Neder y Ricardo Benites
                    </figcaption>
                </div>

                <p className="titulo text-paragraph text-paragraph-lg px-[5px] text-justify">Nuestra area informática conformada por <strong>Jorge Neder</strong> y <strong>Ricardo Benites</strong>, es la encargada de llevar a cabo todos los desarrollos de nuestros sistemas</p>
            </div>
        </div>
        <div className="titulo lg:relative w-full">
            <Image className="max-h-[650px] w-full" width={600} height={600} src={"/Imagen1.png"} alt="Equipo Aprender" />
            <p className="text-primary text-justify text-paragraph-size min-w-[300px] max-w-[300px] sm:max-w-none font-medium absolute left-[50%] translate-x-[-50%] translate-y-[-60px] lg:absolute lg:bottom-[10%] lg:left-[50%] lg:translate-x-[-50%] z-10"><strong>Nuestra Misión:</strong> Aportar al desarrollo educativo de nuestra comunidad a través de la evaluación y el análisis del aprendizaje en las escuelas.</p>
        </div>
    </section>
  )
}

export default SobreNosotrosMobile;