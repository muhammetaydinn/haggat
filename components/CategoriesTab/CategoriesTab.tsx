import useGetAllCategories from "@/hooks/useGetAllCategories";
import { Box, Container, Divider, Group, Skeleton, Text } from "@mantine/core";
import cx from "clsx";
import { Dispatch, SetStateAction, useState } from "react";
import classes from "../CategoriesTab/CategoriesTab.module.css";
interface IProductsFilterContainerProps {
  setSelectedCategory: Dispatch<SetStateAction<number>>;
  selectedCategory: number;
  setFilterParams: Dispatch<SetStateAction<object>>;
}
export default function TableOfContents({
  setSelectedCategory,
  selectedCategory,
  setFilterParams,
}: IProductsFilterContainerProps) {
  const { categories, isFetching } = useGetAllCategories([]);
  const [active, setActive] = useState(selectedCategory);
  if (isFetching) {
    return (
      <Container size={"lg"}>
        <Skeleton height={"500px"} width="100%" radius="xl" p={0} />
      </Container>
    );
  }
  const allCategories = [{ id: 0, name: "All" }, ...categories];
  const items = allCategories.map((item) => (
    <Box<"a">
      style={{
        hover: {
          color: "var(--mantine-color-primary)",
        },
      }}
      component="a"
      onClick={(event) => {
        event.preventDefault();
        setActive(item.id);
        setSelectedCategory(item.id);
        setFilterParams((prev) => {
          return { ...prev, categoryId: item.id };
        });
      }}
      key={item.id}
      className={cx(classes.link, {
        [classes.linkActive]: active === item.id,
      })}
      //for sub categories
      //   style={{ paddingLeft: `calc(${item.order} * var(--mantine-spacing-md))` }}
    >
      {item.name}
    </Box>
  ));

  return (
    <div>
      <Group mb="md">
        <Text>Categories</Text>
      </Group>
      <Divider my="md" />
      <div className={classes.links}>
        <div
          className={classes.indicator}
          style={{
            transform: `translateY(calc(${active} * var(--link-height) + var(--indicator-offset)))`,
          }}
        />
        {items}
      </div>
    </div>
  );
}
