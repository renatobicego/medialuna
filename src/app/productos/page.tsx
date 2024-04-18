import { Suspense } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { getCategories, getProducts } from "../util/fetchData";
import Products from "./Products";
import TitleBreadcrumbs from "./TitleBreadcrumbs";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const categoria = searchParams.categoria
 
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: categoria ? ' Medialuna | Categoria ' + categoria : 'Medialuna | Nuestras Medias',
    openGraph: {
      images: [...previousImages],
    },
  }
}

export default async function Productos() {
  const {products} = await getProducts()
  const {categories} = await getCategories()
  return (
    <>
      <Header color="26, 144, 112" textColor="text-white" />
      <div className="fixed left-0 top-0 w-screen h-screen bg-verde -z-10"></div>
      <main className="main-section bg-verde">
        <section
          className="flex flex-col px-4 pt-10 pb-16 border rounded-[40px] w-screen items-start gap-5 mt-0.5
            md:w-[95vw] md:px-8 
            3xl:px-12"
        >
          <TitleBreadcrumbs />
          <Suspense>
            <Products products={products} categories={categories || []}/>
          </Suspense>
        </section>
      </main>
      <Footer bgColor="bg-verde" textColor={"text-white"} />
    </>
  );
}
