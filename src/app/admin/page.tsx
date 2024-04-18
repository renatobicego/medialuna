import React from "react";
import { getProducts } from "../util/fetchData";
import ProductsList from "./ProductsList";

export default async function AdminPage(){
  const {products} = await getProducts()
  return (
    <main className="main-section bg-fondo ">
      <section className="px-4 md:w-[95vw] md:px-8 3xl:px-12 flex flex-col gap-4">
        <h1 className="title text-negro font-medium">Editar Productos</h1>
        <ProductsList products={products}/>
      </section>
    </main>
  );
};
