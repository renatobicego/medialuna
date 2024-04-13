"use client";
import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Image from "next/image";
import DropdownMedias from "./DropdownMedias";
import HamburgerMenu from "./HamburgerMenu";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState({
        x: 0,
        y: 0,
      });

    useEffect(() => {
        const updateScrollPosition = () => {
            setScrollPosition({
                x: window.scrollX,
                y: window.scrollY,
            });
        };

        if(typeof window !== 'undefined'){
            updateScrollPosition();
        }

        window.addEventListener('scroll', updateScrollPosition);

        return () => {
            window.removeEventListener('scroll', updateScrollPosition);
        };
    }, []);
    return scrollPosition;
}


const Header = ({ color, textColor }: { color: string, textColor: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname()
  const {y: scrollY} = useScrollPosition()
  const opacity = Math.min(100 - Math.round(scrollY / 5), 100);

  const headerStyle = {
    backgroundColor: `rgba(${color}, ${opacity}%)`,
  };
  return (
    <Navbar
      className={`h-[12.5vh] lg:h-[15vh] py-1 sm:py-2 `}
      classNames={{
        wrapper: "h-full max-w-full justify-end px-4 md:px-8 2xl:px-[3vw]",
        item: [
          "flex",
          "relative",
          "h-2/5",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-rojo",
        ],
        menu: "!h-screen w-screen z-[1000] top-0 pt-[3.5vh] pr-4 bg-rojo",
        // menu: "pr-4 bg-rojo",
        toggleIcon: `bg-white h-8 xs:h-10 max-xs:before:w-5 max-xs:after:w-5 
        rounded-full text-rojo before:duration-300 after:duration-300 max-xs:before:-translate-y-[3px] max-xs:after:translate-y-[3px]`,
        toggle: "xs:w-10 xs:h-10 h-8 w-8"
      }}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
      motionProps={{
        style: headerStyle
      }}
    >
      <NavbarContent className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full" justify="center">
        <NavbarBrand as={Link} className={`h-full`} href={'/'}>
          <Image
            src={"/logo-medialuna.png"}
            alt="Logo de Medialuna"
            width={100}
            priority
            height={100}
            className=" w-[25vw] h-auto sm:w-[10vw] md:max-h-full md:w-20 lg:h-full lg:w-auto"
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className={`hidden md:flex gap-4 !flex-grow-0 ${textColor}`} justify="end">
        <NavbarItem isActive={pathname === '/'} className="mr-2">
          <Link href="/" aria-current="page" className={textColor}>
            Inicio
          </Link>
        </NavbarItem>
        <DropdownMedias isActive={pathname.includes('/productos')} textColor={textColor}/>
        <NavbarItem>
          <Link color="foreground" href="/#contacto" className={textColor}>
            Contacto
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="md:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          srOnlyText="Botón para abrir menú de navegación"
          className="md:hidden "
        />
      </NavbarContent>
      <HamburgerMenu isMenuOpen={isMenuOpen}/>
    </Navbar>
  );
};

export default Header;
