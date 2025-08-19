import Image from "next/image";


const SobreNosotros = () => {
    return (
        <section id="sobreNosotros" className="hidden lg:flex lg:flex-col gap-[200px] place-items-center bg-bg-alter pt-[150px]">
            <h3 className="titulo max-w-[400px] md:max-w-[500px] text-primary text-[24px] sm:text-[32px] md:text-[40px] font-semibold text-center lg:text-left py-[10px] md:py-0">NUESTRO EQUIPO</h3>
            <div className="flex flex-col gap-[150px]">
                <div className="equipo-card">
                    <div className="left flex flex-col w-[50%] gap-[20px]">
                        <h4 className="text-primary font-semibold text-subtitle-lg text-center">Referente Jurisdiccional</h4>
                        <p className="text-paragraph text-paragraph-lg px-[40px] text-justify">Nuestra Referente Jurisdiccional y Líder de equipo <strong>Adriana Noemí Sánchez</strong> es la encargada de </p>
                    </div>
                    <div className="right flex flex-col w-[50%] place-items-center">
                        <figure>
                            <Image className="w-[600px] rounded-[15px]" width={600} height={600} src={"/Imagen1.png"} alt="" />  
                        </figure>
                        <figcaption className="text-paragraph text-paragraph-size">
                            Adriana Noemí Sanchez
                        </figcaption>
                    </div>
                </div>

                <div className="equipo-card">
                    <div className="left flex flex-col w-[50%] place-items-center">
                        <figure>
                            <Image className="w-[600px] rounded-[15px]" width={600} height={600} src={"/Imagen1.png"} alt="" />  
                        </figure>
                        <figcaption className="text-paragraph text-paragraph-size">
                            Valeria Moreno y Cecilia Urbani
                        </figcaption>
                    </div>
                    <div className="right flex flex-col w-[50%] gap-[20px]">
                        <h4 className="text-primary font-semibold text-subtitle-lg text-center">Implementación</h4>
                        <p className="text-paragraph text-paragraph-lg px-[40px] text-justify">Nuestra area de implementación, conformada por <strong>Valeria Moreno</strong> y <strong>Cecilia Urbani</strong>, es la encargada de</p>
                    </div>
                </div>

                <div className="equipo-card">
                    <div className="left flex flex-col w-[50%] gap-[20px]">
                        <h4 className="text-primary font-semibold text-subtitle-lg text-center">Area Pedagógica</h4>
                        <p className="text-paragraph text-paragraph-lg px-[40px] text-justify">Nuestra area pedagógica conformada por <strong>Adriana Suarez</strong>, <strong>Ana Carolina Tolosa</strong> y <strong>Luciana Rosario Tenreyro</strong>, se encarga de</p>
                    </div>
                    <div className="right flex flex-col w-[50%] place-items-center">
                        <figure>
                            <Image className="w-[600px] rounded-[15px]" width={600} height={600} src={"/Imagen1.png"} alt="" />  
                        </figure>
                        <figcaption className="text-paragraph text-paragraph-size">
                            Adriana Suarez, Ana Carolina Tolosa y Luciana Rosario Tenreyro
                        </figcaption>
                    </div>
                </div>

                <div className="equipo-card">
                    <div className="left flex flex-col w-[50%] place-items-center">
                        <figure>
                            <Image className="w-[600px] rounded-[15px]" width={600} height={600} src={"/Imagen1.png"} alt="" />  
                        </figure>
                        <figcaption className="text-paragraph text-paragraph-size">
                            Florencia Pato y Augusto Donis
                        </figcaption>
                    </div>
                    <div className="right flex flex-col w-[50%] gap-[20px]">
                        <h4 className="text-primary font-semibold text-subtitle-lg text-center">Area Contable</h4>
                        <p className="text-paragraph text-paragraph-lg px-[40px] text-justify">Nuestra area Contable conformada por <strong>Florencia Pato</strong> y <strong>Augusto Donis</strong>, es la encargada de</p>
                    </div>
                </div>

                <div className="equipo-card">
                    <div className="left flex flex-col w-[50%] gap-[20px]">
                        <h4 className="text-primary font-semibold text-subtitle-lg text-center">Area Informática</h4>
                        <p className="text-paragraph text-paragraph-lg px-[40px] text-justify">Nuestra area informática conformada por <strong>Jorge Neder</strong> y <strong>Ricardo Benites</strong>, es la encargada de llevar a cabo todos los desarrollos de nuestros sistemas</p>
                    </div>
                    <div className="right flex flex-col w-[50%] place-items-center">
                        <figure>
                            <Image className="w-[600px] rounded-[15px]" width={600} height={600} src={"/Imagen1.png"} alt="" />  
                        </figure>
                        <figcaption className="text-paragraph text-paragraph-size">
                            Jorge Neder y Ricardo Benites
                        </figcaption>
                    </div>
                </div>
            </div>
            <div className="titulo relative w-full">
                <Image className="max-h-[650px] w-full" width={650} height={650} src={"/Imagen1.png"} alt="Equipo Aprender" />
                <p className="text-primary text-paragraph-lg min-w-[1050px] font-medium absolute bottom-[10%] left-[50%] translate-x-[-50%]"><strong>Nuestra Misión:</strong> Aportar al desarrollo educativo de nuestra comunidad a través de la evaluación y el análisis del aprendizaje en las escuelas.</p>
            </div>
        </section>
    );
};

export default SobreNosotros;
