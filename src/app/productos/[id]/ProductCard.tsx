"use client";
import {
  BreadcrumbItem,
  Breadcrumbs,
  Button,
  Card,
  CardFooter,
  Image,
  Link,
  Skeleton,
} from "@nextui-org/react";
import { useState } from "react";
import NextImage from "next/image";
import { ProductServer } from "@/app/util/dataTypes";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const ProductCard = ({ product }: { product: ProductServer }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const breadcrumbsItems = [
    {
      href: "/",
      text: "Inicio",
    },
    {
      href: "/productos",
      text: "Nuestras Medias",
    },
    {
      href: "/productos/" + product.name,
      text: product.name,
    },
  ];
  const socialMenuItems = [
    {
      key: "instagram",
      text: "medialuna.mza",
      href: "#",
      icon: <FaInstagram className="w-6 xs:w-7 h-6 xs:h-7" />,
    },
    {
      key: "telefono",
      text: "+54 9 2617 49-2914",
      href: "#",
      icon: <FaWhatsapp className="w-6 xs:w-7 h-6 xs:h-7" />,
    },
  ];
  if (product) {
    return (
      <Card
        className="flex flex-col border rounded-[40px] w-[92vw] mx-auto items-start mt-0.5
               sm:w-[95vw] sm:flex-row sm:items-center lg:items-start"
      >
        <Skeleton
          className="sm:w-[90%] md:w-1/2 h-[110%]"
          isLoaded={imageLoaded}
        >
          <Image
            width={2000}
            height={2000}
            as={NextImage}
            onLoad={() => setImageLoaded(true)}
            src={product.image}
            alt={"Medias: " + product.name}
            classNames={{
              wrapper: "max-sm:max-w-full h-full",
              img: "object-cover h-full",
            }}
            className={`rounded-none w-full`}
          />
        </Skeleton>
        <CardFooter
          className="flex flex-col items-start px-4 md:px-6 lg:px-10 pt-6 pb-10 lg:py-14 2xl:py-20 gap-3 xs:gap-4
         md:gap-5 2xl:gap-6
         text-negro sm:w-3/5"
        >
          <Breadcrumbs
            classNames={{
              list: "items-center",
            }}
          >
            {breadcrumbsItems.map((item, i) => (
              <BreadcrumbItem
                classNames={{
                  item: `${
                    i === breadcrumbsItems.length - 1
                      ? "text-verde"
                      : "text-verde opacity-50"
                  } md:text-base xl:text-lg 3xl:text-xl`,
                  separator: "text-verde",
                }}
                className={"text-verde"}
                key={i}
                href={item.href}
              >
                {item.text}
              </BreadcrumbItem>
            ))}
          </Breadcrumbs>
          <h2 className="font-medium text-xl xs:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-6xl">
            {product.name} {product.available ? "" : "(Sin Stock)"}
          </h2>
          <div className="flex flex-wrap items-center gap-2">
            {product.categories?.map((item, i) => (
              <button
                key={item._id}
                className="py-1 px-3 text-sm lg:text-base rounded-3xl border border-negro text-negro"
              >
                {item.name}
              </button>
            ))}
          </div>
          <h3 className="font-semibold text-xl xs:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-6xl">
            ${product.price}
          </h3>
          <p className="text-sm xs:text-base lg:text-lg 2xl:text-xl">
            Para comprarlas, comunicate por:
          </p>
          <div className="flex flex-col gap-1">
            {socialMenuItems.map((item) => (
              <Link key={item.key} href={item.href} size="lg">
                <Button
                  disableRipple
                  size="md"
                  startContent={item.icon}
                  variant="light"
                  className="underline p-0 xs:text-base lg:text-lg 2xl:text-xl max-xs:h-auto"
                >
                  {item.text}
                </Button>
              </Link>
            ))}
          </div>
        </CardFooter>
      </Card>
    );
  }
};

export default ProductCard;
