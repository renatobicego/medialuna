import { productsUrl } from "@/app/util/urls";
import { Button, Link } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="flex flex-col pl-4 py-10 min-h-[85vh] border border-rojo rounded-[40px] w-[99vw] md:max-lg:w-[95vw] 
      items-start gap-5 relative mt-0.5 mx-auto
      md:min-h-[50vh] md:pl-8 
      lg:min-h-[50vh] lg:w-[45vw] lg:gap-8
      3xl:pl-12
    ">
      <h1 className="text-rojo text-4xl xs:text-6xl font-semibold sm:w-1/2 lg:text-7xl 2xl:text-8xl">
        Vendemos medias Comprame
      </h1>
      <Button
        as={Link}
        className="bg-white text-rojo py-2 px-6 font-semibold h-auto rounded-2xl text-sm xs:text-lg data-[focus-visble=true]:outline-rojo lg:text-xl"
        size="lg"
        href={productsUrl}
      >
        Mirá nuestras medias
      </Button>
      <Image
        src={"/illustrations/zapatillas-medias-ilustracion.jpg"}
        alt="Ilustración de unas medias con zapatillas"
        className="rounded-l-[36px] w-[70vw] h-auto self-end sm:w-auto sm:absolute bottom-12 right-0 sm:max-h-[80%] lg:h-[50%]"
        width={1000}
        height={1200}
      />
    </section>
  );
};

export default HeroSection;
