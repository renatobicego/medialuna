import React from "react";
import Image from "next/image";
import { Category } from "@/app/util/dataTypes";
import { Link } from "@nextui-org/react";
import { productsUrl } from "@/app/util/urls";

const CategoryCard = ({ category }: { category: Category }) => {
  return (
    <Link
      href={productsUrl + "?categoria=" + category.name}
      className="w-full h-48 xs:h-60 relative flex flex-col justify-end items-start rounded-[20px] overflow-hidden"
    >
      <Image
        width={300}
        height={400}
        src={category.image}
        className="absolute top-0 left-0 h-full z-0 object-cover brightness-75 xl:w-full"
        alt={"Categoría de medias: " + category.name}
      />
      <p className="z-10 relative text-white text-xl lg:text-2xl mx-3 xs:mx-4 my-8 drop-shadow font-semibold lg:mx-6">
        {category.name}
      </p>
    </Link>
  );
};

export default CategoryCard;
