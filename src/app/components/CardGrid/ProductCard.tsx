"use client";
import NextImage from "next/image";
import { Card, CardFooter, Image, Link, Skeleton } from "@nextui-org/react";
import { Product } from "@/app/dataTypes";
import { usePathname } from "next/navigation";
import { useState } from "react";

const ProductCard = ({ product }: { product: Product }) => {
  const pathname = usePathname();
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Card
      as={Link}
      className="flex flex-col rounded-[20px] overflow-hidden text-negro w-full"
      href={`/productos/${product.name}`}
    >
      <Skeleton isLoaded={imageLoaded}>
        <Image
          width={600}
          height={800}
          as={NextImage}
          onLoad={() => setImageLoaded(true)}
          src={product.image}
          alt={"Medias: " + product.name}
          classNames={{
            wrapper: "!max-w-full",
          }}
          className={`rounded-none h-36 object-cover xs:h-48 lg:h-60 xl:h-64 
            ${
              pathname.includes("/productos")
                ? "lg:h-72 xl:h-80 2xl:h-[22rem] 3xl:h-96"
                : ""
            }
          `}
        />
      </Skeleton>
      <CardFooter
        className="bg-white flex flex-col pt-4 pb-6 px-3 flex-1 items-start
            md:px-4 md:pt-5 md:pb-7 md:gap-1
            lg:px-5 lg:pt-6 lg:pb-8 lg:gap-2
            3xl:px-6 3xl:pt-7 3xl:pb-9"
      >
        <p className="font-medium max-xs:text-sm md:text-lg lg:text-xl 3xl:text-2xl">
          {product.name}
        </p>
        <p className="font-semibold max-xs:text-sm md:text-lg lg:text-xl 3xl:text-2xl">
          ${product.price}
        </p>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
