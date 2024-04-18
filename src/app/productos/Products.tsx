"use client";
import { Input, Selection } from "@nextui-org/react";
import { FaSearch } from "react-icons/fa";
import FilterButtons from "./FilterButtons";
import CardGrid from "../components/CardGrid/CardGrid";
import { CardType, Category, Product, ProductServer } from "../util/dataTypes";
import { useCallback, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";


const Products = ({
  products,
  categories,
}: {
  products: ProductServer[];
  categories: Category[];
}) => {
  const searchParams = useSearchParams();
  const queryCategory = searchParams.get("categoria");
  const [searchValue, setSearchValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedOrder, setSelectedOrder] = useState<Selection>(new Set([]));
  const [selectedFilter, setSelectedFilter] = useState<Selection>(new Set([]));

  // Effect to update selectedFilter when queryCategory changes
  useEffect(() => {
    if (queryCategory) {
      const categoryValue = categories.find(c => c.name === queryCategory)?._id as string;

      // Set selectedFilter to a new Set containing the categoryValue
      setSelectedFilter(new Set([categoryValue]));
    } else {
      // If queryCategory is not valid or not found in queryCategories, clear selectedFilter
      setSelectedFilter(new Set([]));
    }
  }, [queryCategory]);

  useEffect(() => {
    // Function to filter and order products
    const filterAndOrderProducts = () => {
      let filtered = products;

      // Filter by search query
      if (searchValue.trim() !== "") {
        const query = searchValue.toLowerCase();
        filtered = filtered.filter((product) =>
          product.name.toLowerCase().includes(query)
        );
      }

      const filtersKeys = selectedFilter as Set<string>;
      // Filter by selected category filter
      if (filtersKeys.size > 0) {
        filtered = filtered.filter((product) =>
          product.categories.some((category) => filtersKeys.has(category._id))
        );
      }

      // Sort products based on selected order
      const sortedProducts = Array.from(filtered).sort((a, b) => {
        const orderValue = Array.from(selectedOrder)[0];
        switch (orderValue) {
          case "aZ":
            return a.name.localeCompare(b.name);
          case "zA":
            return b.name.localeCompare(a.name);
          case "precioMenorMayor":
            return a.price - b.price;
          case "precioMayorMenor":
            return b.price - a.price;
          default:
            return 0;
        }
      });

      // Move products with available: false to the end
      const availableProducts = sortedProducts.filter(
        (product) => product.available
      );
      const unavailableProducts = sortedProducts.filter(
        (product) => !product.available
      );
      const finalSortedProducts = [
        ...availableProducts,
        ...unavailableProducts,
      ];

      // Update filtered products state
      setFilteredProducts(finalSortedProducts);
    };

    // Call filterAndOrderProducts whenever searchValue, selectedFilter, or selectedOrder changes
    filterAndOrderProducts();
  }, [searchValue, selectedFilter, selectedOrder, products]);

  return (
    <>
      <div className="flex flex-col  items-start justify-between md:w-full md:flex-row sm:items-center">
        <Input
          label="Buscar Medias"
          className="mb-4 max-md:flex-1 md:w-1/2 lg:w-1/3"
          classNames={{
            label:
              "group-data-[filled-within=true]:text-white md:text-base 2xl:text-lg lg:mx-2",
            inputWrapper: "rounded-2xl lg:h-unit-11 2xl:h-unit-12",
            input: "md:text-base 2xl:text-lg lg:px-2",
          }}
          labelPlacement="outside"
          value={searchValue}
          onValueChange={setSearchValue}
          endContent={
            <FaSearch className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
          }
        />
        <FilterButtons
          selectedFilter={selectedFilter}
          selectedOrder={selectedOrder}
          setSelectedFilter={setSelectedFilter}
          setSelectedOrder={setSelectedOrder}
          categories={categories}
          searchParams={searchParams}
        />
      </div>
      <CardGrid cardType={CardType.product} items={filteredProducts} />
    </>
  );
};

export default Products;
