import { ComboboxItem, Select } from "@mantine/core";
import React, { useState } from "react";

const SelectOrderBy = () => {
  const [value, setValue] = useState<ComboboxItem | null>(null);
  return (
    <div className="justify-end flex pr-12">
      <Select
        data={[
          {
            value: "newest",
            label: "Newest",
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
        onChange={(_value, option) => setValue(option)}
      />
    </div>
  );
};

export default SelectOrderBy;
