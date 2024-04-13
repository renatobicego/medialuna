import CardGrid from "@/app/components/CardGrid/CardGrid"
import { CardType, Product } from "@/app/dataTypes"

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
const RelatedProducts = () => {
  return (
    <div className="w-[92vw] mx-auto flex flex-col gap-4">
        <h4 className="text-white text-xl xs:text-2xl lg:text-3xl 2xl:text-4xl">
            Productos Relacionados
        </h4>
        <CardGrid cardType={CardType.product} items={products}/>
    </div>
  )
}

export default RelatedProducts