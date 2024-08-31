import useGetProducts from "@/hooks/useGetProducts";
import { Container, Skeleton, Text } from "@mantine/core";
import React from "react";
interface IProductsContainerProps {
  filterParams: Record<string, string>;
}
const ProductsContainer = ({ filterParams }: IProductsContainerProps) => {
  const { productsData, isFetching } = useGetProducts(filterParams);
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
      {Array.isArray(productsData) && productsData.length > 0 ? (
        productsData?.map((item) => {
            return <a>{item.title}</a>
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
