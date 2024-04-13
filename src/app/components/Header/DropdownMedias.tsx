import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  NavbarItem,
} from "@nextui-org/react";
import React from "react";
import { BiChevronDown } from "react-icons/bi";

const DropdownMedias = ({textColor, isActive}: {textColor: string, isActive: boolean}) => {
  return (
    <Dropdown>
      <NavbarItem isActive={isActive}>
        <DropdownTrigger>
          <Button
            disableRipple
            className={`p-0 bg-transparent data-[hover=true]:bg-transparent ${textColor}`}
            endContent={<BiChevronDown />}
            variant="light"
            size="lg"
          >
            Medias
          </Button>
        </DropdownTrigger>
      </NavbarItem>
      <DropdownMenu
        aria-label="Categorias de Medias"
        className="w-[340px]"
        itemClasses={{
          base: "gap-4",
        }}
      >
        <DropdownItem
          key="medias_3/4"
          href="/productos"
        >
          Medias 3/4
        </DropdownItem>
        <DropdownItem
          key="soquetes"
          href="/productos"
        >
          Soquetes
        </DropdownItem>
        <DropdownItem
          key="tenis"
          href="/productos"

        >
          Tenis
        </DropdownItem>
        <DropdownItem
          key="premium"
          href="/productos"
        >
          Premium
        </DropdownItem>
        <DropdownItem
          key="premium"
          href="/productos"
        >
          Ver Todas
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropdownMedias;
