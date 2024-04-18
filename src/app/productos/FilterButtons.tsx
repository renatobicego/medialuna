"use client";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Selection,
} from "@nextui-org/react";
import { Dispatch, SetStateAction, useCallback, useMemo } from "react";
import { FaFilter } from "react-icons/fa";
import { LuChevronsUpDown } from "react-icons/lu";
import { Category } from "../util/dataTypes";
import {
  ReadonlyURLSearchParams,
  usePathname,
  useRouter,
} from "next/navigation";

type FilterButtonsProps = {
  selectedOrder: Selection;
  selectedFilter: Selection;
  setSelectedFilter: Dispatch<SetStateAction<Selection>>;
  setSelectedOrder: Dispatch<SetStateAction<Selection>>;
  categories: Category[];
  searchParams: ReadonlyURLSearchParams;
};

const FilterButtons = ({
  selectedOrder,
  selectedFilter,
  setSelectedFilter,
  setSelectedOrder,
  categories,
  searchParams,
}: FilterButtonsProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const orderOptions: Record<string, string> = {
    aZ: "A - Z",
    zA: "Z - A",
    precioMenorMayor: "Precio menor a mayor",
    precioMayorMenor: "Precio mayor a menor",
  };

  // Generate categoriesOptions from the categories array
  const categoriesOptions: Record<string, string> = useMemo(() => {
    const options: Record<string, string> = {};
    categories.forEach((category) => {
      options[category._id] = category.name;
    });
    return options;
  }, [categories]);

  // Convert the Set to an Array and get the first value.
  const selectedOrderValue = Array.from(selectedOrder)[0];
  const selectedFilterValue = useMemo(() => {
    const selectedFilterNames = Array.from(selectedFilter).map(
      (key) => categoriesOptions[key]
    );
    return selectedFilterNames.join(", ");
  }, [selectedFilter, categoriesOptions]);

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
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
            {selectedFilterValue || "Categoría"}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          closeOnSelect={false}
          aria-label="Opciones de filtro de productos"
          selectedKeys={selectedFilter}
          selectionMode="single"
          onSelectionChange={(option: Selection) => setSelectedFilter(option)}
          className="max-w-[80vw]"
        >
          {Object.entries(categoriesOptions).map(([key, value]) => (
            <DropdownItem
              onClick={() => {
                if(searchParams.get('categoria') === value){
                  router.push('/productos')
                }else{
                  router.push(pathname + "?" + createQueryString("categoria", value));
                }
              }}
              key={key}
            >
              {value}
            </DropdownItem>
          ))}
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
