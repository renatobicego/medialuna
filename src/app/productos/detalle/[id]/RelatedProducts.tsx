import CardGrid from "@/app/components/CardGrid/CardGrid"
import { CardType, Product } from "@/app/util/dataTypes"

const RelatedProducts = async({products} : {products: Product[]}) => {
  if(products.length){
    return (
      <div className="w-[92vw] mx-auto flex flex-col gap-4">
          <h4 className="text-white text-xl xs:text-2xl lg:text-3xl 2xl:text-4xl">
              Productos Relacionados
          </h4>
          <CardGrid cardType={CardType.product} items={products}/>
      </div>
    )
  }
}

export default RelatedProducts