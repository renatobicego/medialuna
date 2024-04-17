import { Button, Link } from "@nextui-org/react";
import Image from "next/image"
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

const Footer = ({bgColor, textColor=""} : {bgColor: string, textColor?: string}) => {
  const menuItems = [
    {
      key: "inicio",
      text: "Inicio",
      href: "/",
    },
    {
      key: "medias",
      text: "Medias",
      href: "/productos",
    },
    {
      key: "categoria",
      text: "Categorías",
      href: "/#categorias",
    },
  ];
  const socialMenuItems = [
    {
      key: "instagram",
      href: "https://www.instagram.com/medialuna.mza/",
      icon: <FaInstagram className={`w-4/5 h-4/5 xs:w-[90%] xs:h-[90%] text-negro ${textColor}`}/>,
    },
    {
      key: "telefono",
      href: "https://wa.me/542617492914",
      icon: <FaWhatsapp className={`w-4/5 h-4/5 xs:w-[90%] xs:h-[90%] text-negro ${textColor}`}/>,
    },
  ];
  return (
    <footer className={`${bgColor} flex flex-col w-screen sm:flex-row sm:items-center py-10 px-4 sm:px-8 sm:gap-8 lg:gap-10`}>
        <Image 
          src={'/logo-medialuna.png'}
          alt="Logo de Medialuna medias en footer"
          width={100}
          height={100}
          className="self-center"
        />
        <nav className="max-sm:w-full mt-4">
          <ul className="flex flex-col sm:flex-row sm:items-center items-start gap-2 sm:gap-3 lg:gap-5">
            {menuItems.map(item => (
              <Link size="md" className={`text-negro font-medium max-xs:text-sm ${textColor}`} key={item.key} href={item.href}>
                {item.text}
              </Link>
            ))}
            <div className="flex gap-1 xs:gap-2 max-sm:mt-2 sm:gap-3 lg:gap-4">
              {socialMenuItems.map(item => (
                <Button
                  key={item.key}
                  as={Link}
                  href={item.href}
                  target="_blank"
                  variant="light"
                  className={`p-0 justify-start`}
                  size="sm"
                  isIconOnly
                >
                  {item.icon}
                </Button>
              ))}
            </div>
          </ul>
        </nav>
    </footer>
  )
}

export default Footer