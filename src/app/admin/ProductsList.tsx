"use client";
import { Button, Input, Link } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import CardGrid from "../components/CardGrid/CardGrid";
import { CardType, ProductServer } from "../util/dataTypes";

const ProductsList = ({ products }: { products: ProductServer[] }) => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredProducts, setFilteredProducts] =
    useState<ProductServer[]>(products);
  const [outStock, setOutStock] = useState(false);

  useEffect(() => {
    const filterAndOrderProducts = () => {
      let filtered = products;

      // Filter by search query
      if (searchValue.trim() !== "") {
        const query = searchValue.toLowerCase();
        filtered = filtered.filter((product) =>
          product.name.toLowerCase().includes(query)
        );
      }

      const outStockProducts: ProductServer[] = filtered.filter(
        (product) => !product.available
      );

      // Update filtered products state
      setFilteredProducts(outStock ? outStockProducts : filtered);
    };
    filterAndOrderProducts();
  }, [products, searchValue, outStock]);
  return (
    <>
      <div className="w-full flex justify-between items-center flex-wrap">
        <Input
          label="Buscar Medias"
          className="mb-4 max-md:w-full md:w-1/2 lg:w-1/3"
          classNames={{
            label: " md:text-base 2xl:text-lg lg:mx-2",
            inputWrapper: "rounded-2xl lg:h-unit-11 2xl:h-unit-12",
            input: "md:text-base 2xl:text-lg lg:px-2",
          }}
          value={searchValue}
          onValueChange={setSearchValue}
          labelPlacement="outside"
          endContent={
            <FaSearch className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
          }
        />
        <Button
          as={Link}
          className="bg-white text-rojo py-2 px-6 font-semibold h-auto rounded-2xl text-sm xs:text-lg data-[focus-visble=true]:outline-rojo lg:text-xl"
          size="lg"
          href="/admin/publicar"
        >
          Publicar producto
        </Button>
      </div>
      <Button
        onClick={() => setOutStock(!outStock)}
        variant="bordered"
        color="primary"
        className="self-start"
      >
        {outStock ? "Ver todos" : "Ver productos sin stock"}
      </Button>
      <CardGrid cardType={CardType.product} items={filteredProducts} />
    </>
  );
};

export default ProductsList;
