import { contactUrl, instagramUrl, productsUrl, whatsappUrl } from "@/app/util/urls";
import {
  Button,
  Link,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Input,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaInstagram, FaSearch, FaWhatsapp } from "react-icons/fa";

const HamburgerMenu = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  const menuItems = [
    {
      key: "inicio",
      text: "Inicio",
      href: "/",
    },
    {
      key: "medias",
      text: "Medias",
      href: productsUrl,
    },
    {
      key: "categoria",
      text: "Contacto",
      href: contactUrl,
    },
  ];
  const socialMenuItems = [
    {
      key: "instagram",
      text: "medialuna.mza",
      href: instagramUrl,
      icon: <FaInstagram className="w-6 xs:w-7 h-6 xs:h-7" />,
    },
    {
      key: "telefono",
      text: "+54 9 2617 49-2914",
      href: whatsappUrl,
      icon: <FaWhatsapp className="w-6 xs:w-7 h-6 xs:h-7" />,
    },
  ];

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <NavbarMenu
      className="px-0 gap-6"
      motionProps={{
        variants,
        initial: "hidden",
        animate: "visible",
        exit: "hidden",
        transition: { delay: 0.1 },
      }}
    >
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        srOnlyText="Botón para abrir menú de navegación"
        className="md:hidden self-end mr-4"
      />
      <div className="flex w-[99%] flex-col items-start gap-1 xs:gap-2 border px-6 py-8 rounded-[40px] mx-auto mt-1">
        {/* <Input
          label="Buscar Medias"
          className="mb-4"
          classNames={{
            label: "group-data-[filled-within=true]:text-white",
            inputWrapper: "rounded-2xl",
          }}
          labelPlacement="outside"
          endContent={
            <FaSearch className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
          }
        /> */}
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.key}>
            <Link className="w-full text-white max-xs:text-sm" href={item.href} size="md">
              {item.text}
            </Link>
          </NavbarMenuItem>
        ))}
        {socialMenuItems.map((item) => (
          <NavbarMenuItem key={item.key}>
            <Link className="w-full text-white" href={item.href} size="md">
              <Button
                disableRipple
                size="md"
                target="_blank"
                startContent={item.icon}
                variant="light"
                className="underline text-white p-0 text-sm max-xs:h-auto mt-1"
              >
                {item.text}
              </Button>
            </Link>
          </NavbarMenuItem>
        ))}
      </div>
    </NavbarMenu>
  );
};

export default HamburgerMenu;
