import useGetProducts from "@/hooks/useGetProducts";
import { Container, Skeleton, Text } from "@mantine/core";
import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { IProduct } from "@/models/product.model";
import { create } from "zustand";
interface IProductsContainerProps {
  filterParams: Record<string, string>;
}
// Zustand store için type tanımı
interface SortStore {
  sortBy: string;
  setSortBy: (sortBy: string) => void;
}

export const useSortStore = create<SortStore>((set) => ({
  sortBy: "newest",
  setSortBy: (sortBy) => set({ sortBy }),
}));
const orderProducts = (products: IProduct[], orderBy: string) => {
  switch (orderBy) {
    case "newest":
      return products.sort(
        (a, b) =>
          new Date(b.creationAt).getTime() - new Date(a.creationAt).getTime()
      );
    case "oldest":
      return products.sort(
        (a, b) =>
          new Date(a.creationAt).getTime() - new Date(b.creationAt).getTime()
      );
    case "price-asc":
      return products.sort((a, b) => a.price - b.price);
    case "price-desc":
      return products.sort((a, b) => b.price - a.price);
    case "name-asc":
      return products.sort((a, b) => a.title.localeCompare(b.title));
    case "name-desc":
      return products.sort((a, b) => b.title.localeCompare(a.title));
    default:
      return products;
  }
};


const ProductsContainer = ({ filterParams }: IProductsContainerProps) => {
  const { productsData, isFetching } = useGetProducts(filterParams);
  const { sortBy, setSortBy } = useSortStore();
    const [sortedProducts, setSortedProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    if (productsData) {
      setSortedProducts(orderProducts([...productsData], sortBy));
    }
  }, [productsData, sortBy]);

  if (isFetching) {
    return (
      <Container size={"lg"}>
        <Skeleton height={"100vh"} width="100%" radius="xl" p={0} />
      </Container>
    );
  }
  return (
    <Container
      fluid
      display={"flex"}
      style={{ gap: "2rem", flexWrap: "wrap", justifyContent: "center" }}
    >
      {Array.isArray(sortedProducts) && sortedProducts.length > 0 ? (
        sortedProducts?.map((item) => {
          return <ProductCard {...item} key={item.id} />;
        })
      ) : (
        <Text
          size="36px"
          fw={900}
          variant="gradient"
          gradient={{ from: "blue", to: "cyan", deg: 0 }}
          style={{ padding: "0 2rem 2rem 2rem" }}
        >
          No products matching your criteria were found; please check your
          filters.
        </Text>
      )}
    </Container>
  );
};

export default ProductsContainer;
