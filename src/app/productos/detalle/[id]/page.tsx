import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";
import ProductCard from "./ProductCard";
import RelatedProducts from "./RelatedProducts";
import { Metadata, ResolvingMetadata } from "next";

const getProduct = async(id: string) => {
  const res = await fetch(`${process.env.URL}/api/products/details/${id}`, {next: {revalidate: 60}})
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Error en el servidor')
  }
  return res.json()
}

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id
 
  const { product } = await getProduct(id)
 
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: 'Medialuna |' + product.name,
    openGraph: {
      images: [product.image, ...previousImages],
    },
  }
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
