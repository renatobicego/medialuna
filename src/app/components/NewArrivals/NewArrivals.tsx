import { Button, Link } from "@nextui-org/react";
import CardGrid from "../CardGrid/CardGrid";
import { CardType} from "@/app/util/dataTypes";
import { getProducts } from "@/app/util/fetchData";

// Function to shuffle an array using Fisher-Yates shuffle algorithm
const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
const NewArrivals = async() => {
  const products = await getProducts()
  // Shuffle the products array
  const shuffledProducts = shuffleArray(products?.filter(product => product.available === true));

  // Limit the number of products to 6 items after shuffling
  const limitedProducts = shuffledProducts.slice(0, 6);
  return (
    <section className="flex flex-col px-4 py-10 max-md:min-h-[85vh] bg-verde rounded-[40px] w-screen  items-start gap-5
      md:w-[95vw] md:px-8 md:pb-16
      lg:w-[55vw] 
      3xl:px-12
    ">
      <h2 className="title text-white font-medium ml-2 ">Nuevos Ingresos</h2>
      <CardGrid cardType={CardType.product} items={limitedProducts || []} />
      <Button
        as={Link}
        className="bg-white text-negro py-2 px-6 font-semibold h-auto rounded-2xl self-center md:text-lg lg:text-xl"
        href="/productos"
      >
        Ver Más
      </Button>
    </section>
  );
};

export default NewArrivals;
