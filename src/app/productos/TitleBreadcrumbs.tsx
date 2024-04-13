"use client";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";

const TitleBreadcrumbs = () => {
  const breadcrumbsItems = [
    {
      href: "/",
      text: "Inicio",
    },
    {
      href: "/productos",
      text: "Nuestras Medias",
    },
  ];
  return (
    <>
      <Breadcrumbs>
        {breadcrumbsItems.map((item, i) => (
          <BreadcrumbItem
            classNames={{
              item: `${
                i === breadcrumbsItems.length - 1
                  ? "text-white"
                  : "text-white opacity-75"
              } md:text-base xl:text-lg 3xl:text-xl`,
              separator: "text-white",
            }}
            className={"text-white"}
            key={i}
            href={item.href}
          >
            {item.text}
          </BreadcrumbItem>
        ))}
      </Breadcrumbs>
      <h1 className="title text-white font-medium">Nuestras Medias</h1>
    </>
  );
};

export default TitleBreadcrumbs;
