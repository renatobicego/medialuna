"use client"
import ProductCard from "./ProductCard";
import CategoryCard from "./CategoryCard";
import { CardType, Category, Product } from "@/app/dataTypes";
import { usePathname } from "next/navigation";

type CardGridProps = {
  cardType: CardType;
  items: Category[] | Product[];
};
const CardGrid = ({ cardType, items }: CardGridProps) => {
  const pathname = usePathname()

  return (
    <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2  gap-2 xs:gap-3 w-full sm:gap-4 lg:gap-6 3xl:gap-8
      ${cardType === CardType.category ? '2xl:grid-cols-2' : '2xl:grid-cols-3'}
      ${pathname.includes('/productos') ? 'lg:!grid-cols-4' : ''}
    `}>
      {items.map((item, index) => {
        if (cardType === CardType.product && "price" in item) {
          const product = item as Product;
          return <ProductCard key={index} product={product} />;
        } else if (cardType === CardType.category) {
          const category = item as Category;
          return <CategoryCard category={category} key={index} />;
        }
      })}
    </div>
  );
};

export default CardGrid;
