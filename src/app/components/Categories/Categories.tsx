import { CardType } from "@/app/util/dataTypes";
import CardGrid from "../CardGrid/CardGrid"
import { getCategories } from "@/app/util/fetchData";

const Categories = async() => {
  const {categories} = await getCategories()
  return (
    <section className="flex flex-col px-4 pt-10 pb-16  bg-azul rounded-[40px] w-screen items-start gap-5
      md:w-[95vw] md:px-8 lg:w-[55%]
      3xl:px-12
    ">
      <h2 className="title text-white font-medium ml-2">Categorías</h2>
      <CardGrid cardType={CardType.category} items={categories || []} />
    </section>
  )
}

export default Categories