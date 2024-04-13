import { Button, Link } from "@nextui-org/react"
import Image from "next/image"
import { FaInstagram, FaWhatsapp } from "react-icons/fa6"


const Contact = () => {
  return (
    <section className="flex flex-col sm:flex-row lg:flex-col overflow-hidden bg-amarillo 
    rounded-[40px] w-screen md:w-[95vw] items-start sm:items-center lg:flex-1">
        <Image
            src={'/illustrations/animacion-medias.gif'}
            width={1000}
            height={1200}
            unoptimized
            alt="Gif de zapatillas y medias que suben y bajan"
            className="w-full sm:w-1/2 lg:w-5/6 xl:w-3/4 2xl:w-[70%] 3xl:w-3/5"
        />
        <div className="mx-4 max-sm:mb-16 lg:mx-8 lg:w-3/5 lg:self-start xl:mb-8 2xl:mx-10 2xl:mb-10 3xl:m-12">
            <h3 className="text-xl xs:text-2xl 2xl:text-3xl text-white font-medium leading-8 xs:leading-10 2xl:leading-relaxed
             max-xs:pr-2">
                Para comprar, contactarse por Whatsapp o Instagram:
            </h3>
            <Button
                as={Link}
                startContent={<FaWhatsapp className="w-8 h-8 xs:w-10 xs:h-10" />}
                className="underline text-white p-0 text-xl xs:text-2xl 2xl:text-3xl font-medium mb-1 mt-3 xs:mb-2 xs:mt-4 "
                size="lg"
                variant="light"
            >
                +54 9 2617 49-2914
            </Button>
            <Button
                as={Link}
                startContent={<FaInstagram className="w-8 h-8 xs:w-10 xs:h-10" />}
                className="underline text-white p-0 text-xl xs:text-2xl 2xl:text-3xl font-medium "
                size="lg"
                variant="light"
            >
                medialuna.mza
            </Button>
        </div>
    </section>
  )
}

export default Contact