"use client"
import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";
import ProductCard from "./ProductCard";
import { Product } from "@/app/dataTypes";
import RelatedProducts from "./RelatedProducts";


export default function ProductoDetalle() {
  const product: Product = {
    image: '/illustrations/ejemplo3.webp',
    name: "Néstor y Cristina",
    price: 2000,
    category: ['Medias 3/4', 'Premium']
  }
  return (
    <>
      <Header color="26, 144, 112" textColor="text-white" />
      <div className="fixed left-0 top-0 w-screen h-screen bg-verde -z-10"></div>
      <main className="main-section bg-verde">
        <ProductCard product={product}/>
        <RelatedProducts />
      </main>
      <Footer bgColor="bg-verde" textColor={"text-white"} />
    </>
  );
}
