import { Input } from "@nextui-org/react";
import { FaSearch } from "react-icons/fa";
import FilterButtons from "./FilterButtons";
import CardGrid from "../components/CardGrid/CardGrid";
import { CardType, Product } from "../dataTypes";
const products: Product[] = [
  {
    name: "Néstor y Cristina",
    image: "/illustrations/ejemplo.png",
    price: 2000,
  },
  {
    name: "Néstor y Cristina",
    image: "/illustrations/ejemplo2.webp",
    price: 2000,
  },
  {
    name: "Néstor y Cristina",
    image: "/illustrations/ejemplo.png",
    price: 2000,
  },
  {
    name: "Néstor y Cristina",
    image: "/illustrations/ejemplo.png",
    price: 2000,
  },
];
const Products = () => {
  return (
    <>
      <div className="flex flex-col  items-start justify-between md:w-full md:flex-row sm:items-center">
        <Input
          label="Buscar Medias"
          className="mb-4 max-md:flex-1 md:w-1/2 lg:w-1/3"
          classNames={{
            label:
              "group-data-[filled-within=true]:text-white md:text-base 2xl:text-lg lg:mx-2",
            inputWrapper: "rounded-2xl lg:h-unit-11 2xl:h-unit-12",
            input: "md:text-base 2xl:text-lg lg:px-2",
          }}
          labelPlacement="outside"
          endContent={
            <FaSearch className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
          }
        />
        <FilterButtons />
      </div>
      <CardGrid cardType={CardType.product} items={products} />
    </>
  );
};

export default Products;
