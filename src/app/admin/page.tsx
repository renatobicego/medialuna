import React from "react";
import CardGrid from "../components/CardGrid/CardGrid";
import { CardType, Product } from "../util/dataTypes";
import { FaSearch } from "react-icons/fa";
import { Button, Input, Link } from "@nextui-org/react";
import { getProducts } from "../util/fetchData";

export default async function AdminPage(){
  const {products} = await getProducts()
  return (
    <main className="main-section bg-fondo ">
      <section className="px-4 md:w-[95vw] md:px-8 3xl:px-12 flex flex-col gap-4">
        <h1 className="title text-negro font-medium">Editar Productos</h1>
        <div className="w-full flex justify-between items-center flex-wrap">
          <Input
            label="Buscar Medias"
            className="mb-4 max-md:w-full md:w-1/2 lg:w-1/3"
            classNames={{
              label: " md:text-base 2xl:text-lg lg:mx-2",
              inputWrapper: "rounded-2xl lg:h-unit-11 2xl:h-unit-12",
              input: "md:text-base 2xl:text-lg lg:px-2",
            }}
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
        <CardGrid cardType={CardType.product} items={products || []} />
      </section>
    </main>
  );
};
