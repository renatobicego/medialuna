import React from "react";
import Image from "next/image";
import { Category } from "@/app/dataTypes";

const CategoryCard = ({ category }: { category: Category }) => {
  return (
    <div className="w-full h-48 xs:h-60 relative flex flex-col justify-end rounded-[20px] overflow-hidden">
      <Image
        width={300}
        height={400}
        src={category.image}
        className="absolute top-0 left-0 h-full z-0 object-cover brightness-75 xl:w-full"
        alt={"Categoría de medias: " + category.name}
      />
      <p className="z-10 relative text-white text-xl xs:text-2xl mx-3 xs:mx-4 my-8 drop-shadow font-semibold ">
        {category.name}
      </p>
    </div>
  );
};

export default CategoryCard;
