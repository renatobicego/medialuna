import { Button, Link } from "@nextui-org/react";
import CardGrid from "../CardGrid/CardGrid";
import { CardType, Product } from "@/app/dataTypes";

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
    image: "/illustrations/ejemplo3.webp",
    price: 2000,
  },
];

const NewArrivals = () => {
  return (
    <section className="flex flex-col px-4 py-10 max-md:min-h-[85vh] bg-verde rounded-[40px] w-screen  items-start gap-5
      md:w-[95vw] md:px-8 md:pb-16
      lg:w-[55vw] 
      3xl:px-12
    ">
      <h2 className="title text-white font-medium ml-2 ">Nuevos Ingresos</h2>
      <CardGrid cardType={CardType.product} items={products} />
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
