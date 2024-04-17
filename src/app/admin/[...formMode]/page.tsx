import axios from "axios";
import FormProduct from "./FormProduct";
import { Category } from "@/app/util/dataTypes";
import { getCategories } from "@/app/util/fetchData";

export default async function FormProductPage(){
    const data: {categories: Category[]} = await getCategories()
    return(
        <main className="bg-fondo main-section text-negro">
            <section className="px-4 md:w-[95vw] md:px-8 3xl:px-12 flex flex-col gap-4">
                <h2 className="title ">Publicar/Editar Producto</h2>
                <FormProduct categories={data.categories}/>
            </section>
        </main>
    )
}