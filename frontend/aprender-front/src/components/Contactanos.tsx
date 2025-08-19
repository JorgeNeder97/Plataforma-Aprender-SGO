const Contactanos = () => {
    return (
        <section id="contactanos" className="w-full bg-[url('/contactanos-bg.jpg')] bg-cover bg-center min-h-[500px] lg:min-h-[650px] font-default text-paragraph-size py-[100px] lg:py-[50px] px-[40px] lg:px-[50px] flex flex-col gap-[100px]">
            <h3 className=" right texto max-w-[400px] md:max-w-[500px] tracking-widest text-bg text-title sm:text-title-sm md:text-title-md font-bold place-self-center lg:place-self-end lg:text-left py-[10px] md:py-0">CONTACTANOS</h3>
            <div className="flex flex-col place-items-start lg:w-[60%] gap-[50px] leading-[25px] lg:leading-normal">
                <p className="contacto text-bg font-semibold text-subtitle-sm text-justify lg:tracking-normal lg:text-start lg:text-title-sm max-w-[700px]">Encontranos en el Piso 13 del Ministerio de Educación, Ciencia y Tecnología de Santiago del Estero.</p>
                <p className="contacto text-bg text-paragraph-sm lg:text-subtitle-sm"><strong>Dirección:</strong> <span className="tracking-wide">24 de Septiembre 151 - Santiago del Estero, Capital.</span></p>
                <p className="contacto text-bg text-paragraph-sm lg:text-subtitle-sm"><strong>Teléfono:</strong> <span className="tracking-wider">4288680</span></p>
                <p className="contacto text-bg text-paragraph-sm lg:text-subtitle-sm"><strong>Correo:</strong> <span className="tracking-wide">aprendersantiago@gmail.com</span></p>
            </div>
        </section>
    );
};

export default Contactanos;
