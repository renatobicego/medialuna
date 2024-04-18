import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";
import ProductCard from "./ProductCard";
import RelatedProducts from "./RelatedProducts";

const getProduct = async(id: string) => {
  const res = await fetch(`${process.env.URL}/api/products/details/${id}`, {next: {revalidate: 60}})
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Error en el servidor')
  }
  return res.json()
}


export default async function ProductoDetalle({params} : {params: {id: string}}) {
  const {product, relatedProducts} = await getProduct(params.id)
  return (
    <>
      <Header color="26, 144, 112" textColor="text-white" />
      <div className="fixed left-0 top-0 w-screen h-screen bg-verde -z-10"></div>
      <main className="main-section bg-verde">
        <ProductCard product={product}/>
        <RelatedProducts products={relatedProducts || []}/>
      </main>
      <Footer bgColor="bg-verde" textColor={"text-white"} />
    </>
  );
}
