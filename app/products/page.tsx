'use client';

import CategoriesTab from "@/components/CategoriesTab/CategoriesTab";
import ProductsContainer from "@/components/ProductsContainer/ProductsContainer";
import { useCartStore } from "@/store/cart";
import { Container, Grid } from "@mantine/core";
import { useEffect, useState } from "react";

export default function Page() {
  const { selectedCategoryId } = useCartStore();
  const [selectedCategory, setSelectedCategory] =
    useState<number>(selectedCategoryId);
  const [filterParams, setFilterParams] = useState({});

  useEffect(() => {
    setFilterParams({ ["categoryId"]: selectedCategoryId });
  }, []);

  return (
    <Container size={"xl"} m={"auto"}>
      <Grid>
        <Grid.Col span={{ base: 12, sm: 3 }}>
          <CategoriesTab
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
            setFilterParams={setFilterParams}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 9 }}>
          <ProductsContainer filterParams={filterParams} />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
