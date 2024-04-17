"use client";
import NextImage from "next/image";
import { Button, Card, CardFooter, Image, Link, Skeleton } from "@nextui-org/react";
import { Product, ProductServer } from "@/app/util/dataTypes";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FaCheck, FaTrash } from "react-icons/fa6";
import axios from "axios";
import { deleteFileFirebase } from "@/app/util/uploadFileFirebase";
import { FaBan } from "react-icons/fa";

const ProductCard = ({ product }: { product: ProductServer}) => {
  const pathname = usePathname();
  const router = useRouter()
  const [imageLoaded, setImageLoaded] = useState(false);

  const deleteProduct = async() => {
    const confirmation = confirm('¿Está seguro que quiere eliminar el producto?')
    if(confirmation){
      await axios.delete(`/api/products/${product._id}`)
      await deleteFileFirebase(product.image)
      router.refresh()
    }
  }

  const notAvailable = async() => {
    await axios.put(`/api/products/${product._id}`, {
      ...product,
      available: !product.available
    })
    router.refresh()
  }

  return (
    <Card
      className={`flex flex-col rounded-[20px] overflow-hidden text-negro w-full ${product.available ? '' : 'opacity-50'}`}
      
    >
      <Skeleton isLoaded={imageLoaded}>
        <Link
          href={pathname.includes('/admin') ? `/admin/editar/${product._id}` : `/productos/${product._id}`}>
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
                pathname.includes("/productos") || pathname.includes("/admin")
                  ? "lg:h-72 xl:h-80 2xl:h-[22rem] 3xl:h-96"
                  : ""
              }
            `}
          />
        </Link>
      </Skeleton>
      <CardFooter
        className="bg-white flex flex-col pt-4 pb-6 px-3 flex-1 items-start
            md:px-4 md:pt-5 md:pb-7 md:gap-1
            lg:px-5 lg:pt-6 lg:pb-8 lg:gap-2
            3xl:px-6 3xl:pt-7 3xl:pb-9"
      >
        <p className="font-medium max-xs:text-sm md:text-lg lg:text-xl 3xl:text-2xl">
          {product.name} {product.available ? '' : '(Sin stock)'}
        </p>
        <p className="font-semibold max-xs:text-sm md:text-lg lg:text-xl 3xl:text-2xl">
          ${product.price}
        </p>
        {pathname.includes("/admin") ? (
          <>
          
          <div className="flex gap-1 lg:gap-2 items-center flex-wrap">
            {product.categories?.map((item, i) => (
              <button
                key={item._id}
                className="py-1 px-3 text-sm lg:text-base rounded-3xl border border-negro text-negro"
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className="mt-2 flex gap-2">
            <Button
              isIconOnly
              onClick={notAvailable}
              color="primary"
            >
              {product.available ? <FaBan/> : <FaCheck />}
            </Button>
            <Button
              isIconOnly
              onClick={deleteProduct}
              color="danger"
            >
              <FaTrash />
            </Button>
          </div>
          </>
        ) : (
          ""
        )}
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
