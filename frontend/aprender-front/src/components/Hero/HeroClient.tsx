"use client";
import dynamic from "next/dynamic";

// Esto es para que pueda usar scrollreveal sin que me de error 500 al intentar cargar el objeto window
const Hero = dynamic(() => import("@/components/Hero/Hero"), {ssr: false});

const HeroClient = () => {
  return <Hero />;
};

export default HeroClient;