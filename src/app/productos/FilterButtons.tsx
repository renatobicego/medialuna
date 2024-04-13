"use client";
import {
  Button,
  ButtonGroup,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  Selection,
} from "@nextui-org/react";
import { useMemo, useState } from "react";
import { FaFilter } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import { LuChevronsUpDown } from "react-icons/lu";

const FilterButtons = () => {
  const [selectedOrder, setSelectedOrder] = useState<Selection>(new Set([""]));
  const [selectedFilter, setSelectedFilter] = useState<Selection>(
    new Set([""])
  );

  const orderOptions: Record<string, string> = {
    aZ: "A - Z",
    zA: "Z - A",
    precioMenorMayor: "Precio menor a mayor",
    precioMayorMenor: "Precio mayor a menor",
  };

  const filterOptions: Record<string, string> = {
    merge: "Create a merge commit",
    squash: "Squash and merge",
    rebase: "Rebase and merge",
  };

  const categoriesOptions: Record<string, string> = {
    medias34: "Medias 3/4",
    soquetes: "Soquetes",
    tenis: "Tenis",
    premium: "Premium",
  };

  // Convert the Set to an Array and get the first value.
  const selectedOrderValue = Array.from(selectedOrder)[0];
  const selectedFilterValue = useMemo(
    () => Array.from(selectedFilter).join(", ").replaceAll("_", " "),
    [selectedFilter]
  );

  return (
    <div className="flex items-center gap-3 w-full flex-wrap md:w-auto">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Button
            variant="bordered"
            className="text-white rounded-2xl"
            size="lg"
            endContent={<FaFilter className="text-white" />}
          >
            {selectedFilterValue ? selectedFilterValue : "Categoría"}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          closeOnSelect={false}
          aria-label="Opciones de filtro de productos"
          selectedKeys={selectedFilter}
          selectionMode="multiple"
          onSelectionChange={(option: Selection) => setSelectedFilter(option)}
          className="max-w-[80vw]"
        >
          <DropdownItem key="medias34">
            {categoriesOptions["medias34"]}
          </DropdownItem>
          <DropdownItem key="tenis">{categoriesOptions["tenis"]}</DropdownItem>
          <DropdownItem key="soquetes">
            {categoriesOptions["soquetes"]}
          </DropdownItem>
          <DropdownItem key="premium">
            {categoriesOptions["premium"]}
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Button
            variant="bordered"
            className="text-white rounded-2xl"
            size="lg"
            endContent={<LuChevronsUpDown className="text-white h-5 w-5" />}
          >
            {orderOptions[selectedOrderValue]
              ? orderOptions[selectedOrderValue]
              : "Ordenar"}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Opciones de ordenar productos"
          selectedKeys={selectedOrder}
          selectionMode="single"
          onSelectionChange={(option: Selection) => setSelectedOrder(option)}
          className="max-w-[300px]"
        >
          <DropdownItem key="aZ">{orderOptions["aZ"]}</DropdownItem>
          <DropdownItem key="zA">{orderOptions["zA"]}</DropdownItem>
          <DropdownItem key="precioMenorMayor">
            {orderOptions["precioMenorMayor"]}
          </DropdownItem>
          <DropdownItem key="precioMayorMenor">
            {orderOptions["precioMayorMenor"]}
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default FilterButtons;
