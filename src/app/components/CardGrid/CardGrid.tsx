"use client";
import ProductCard from "./ProductCard";
import CategoryCard from "./CategoryCard";
import { CardType, Category, Product, ProductServer } from "@/app/util/dataTypes";
import { usePathname } from "next/navigation";
import useWindowSize from "@/app/util/hooks/useWIndowSIze";
import { productsUrl } from "@/app/util/urls";

type CardGridProps = {
  cardType: CardType;
  items: Category[] | Product[];
};
const CardGrid = ({ cardType, items }: CardGridProps) => {
  const pathname = usePathname();
  const { width: screenWidth } = useWindowSize();
  // Determine the number of items to render based on screenWidth and cardType
  const getNumItemsToRender = () => {
    if (screenWidth >= 1536 && cardType === CardType.product) {
      return 6; // Render 6 items when screenWidth is 1536px or greater and cardType is product
    } else if (screenWidth < 1536 && cardType === CardType.product) {
      return 4; // Render 4 items when screenWidth is less than 1536px and cardType is product
    } else {
      return items.length; // Render all items if cardType is category or in other cases
    }
  };

  // Filter items array based on the number to render
  const itemsToRender = pathname === '/' ? items.slice(0, getNumItemsToRender()) : items;

  return (
    <div
      className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2 xs:gap-3 w-full sm:gap-4 lg:gap-6 3xl:gap-8 ${
        cardType === CardType.category ? "2xl:grid-cols-2" : "2xl:grid-cols-3"
      } ${pathname.includes(productsUrl) ? "lg:!grid-cols-4" : ""}`}
    >
      {itemsToRender.map(item => {
        if (cardType === CardType.product && "price" in item) {
          const product = item as ProductServer;
          return <ProductCard key={product._id} product={product} />;
        } else if (cardType === CardType.category) {
          const category = item as Category;
          return <CategoryCard key={category._id} category={category} />;
        }
        return null; // Handle other cases (shouldn't reach here if itemsToRender is correctly filtered)
      })}
    </div>
  );
};

export default CardGrid;
