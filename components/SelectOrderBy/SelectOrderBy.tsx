import { ComboboxItem, Select } from "@mantine/core";
import React, { useState } from "react";
import { useSortStore } from "../ProductsContainer/ProductsContainer";

const SelectOrderBy = () => {
  const { sortBy, setSortBy } = useSortStore();
  //TODO: Implement select order by logic here
  const [value, setValue] = useState<ComboboxItem | null>(null);
  return (
    <div className="justify-end flex pr-12">
      <Select
        placeholder="Order by"
        data={[
          {
            value: "newest",
            label: "Newest",
          },
          {
            value: "oldest",
            label: "Oldest",
          },
          {
            value: "price-asc",
            label: "Price: Low to High",
          },
          {
            value: "price-desc",
            label: "Price: High to Low",
          },
          {
            value: "name-asc",
            label: "Name: A to Z",
          },
          {
            value: "name-desc",
            label: "Name: Z to A",
          },
        ]}
        value={value ? value.value : null}
        onChange={(_value, option) => {
          if (option) {
            setValue(option);
            setSortBy(option.value);
          }
        }}
      />
    </div>
  );
};

export default SelectOrderBy;
