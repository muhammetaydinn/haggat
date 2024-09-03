"use client";

import CategoriesTab from "@/components/CategoriesTab/CategoriesTab";
import PriceRange from "@/components/PriceRange/PriceRange";
import ProductsContainer from "@/components/ProductsContainer/ProductsContainer";
import Search from "@/components/Search/Search";
import SelectOrderBy from "@/components/SelectOrderBy/SelectOrderBy";
import { useCartStore } from "@/store/cart";
import { Container, Grid, Space } from "@mantine/core";
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
      <Space h={20} />
      <Grid>
        <Grid.Col span={{ base: 12, sm: 3 }}>
          <Search setFilterParams={setFilterParams} />
          <Space h={20} />
          <PriceRange setFilterParams={setFilterParams} />

          <Space h={20} />
          <CategoriesTab
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
            setFilterParams={setFilterParams}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 9 }}>
          <SelectOrderBy></SelectOrderBy>
          <Space h={20} />
          <ProductsContainer filterParams={filterParams} />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
