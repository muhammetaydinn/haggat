import { Group, rem, RangeSlider, Text } from "@mantine/core";
import { IconEyeDollar } from "@tabler/icons-react";
import { Dispatch, SetStateAction, useState } from "react";

interface IProductsFilterContainerProps {
  setFilterParams: Dispatch<SetStateAction<object>>;
}

import { debounce } from "@/utils/debounce/index";
import React from "react";

const PriceRange = ({ setFilterParams }: IProductsFilterContainerProps) => {
  //TODO : MAYBE WE SHOULD USE MIN AND MAX TEXT INPUTS INSTEAD OF RANGE SLIDER

  const onRangeChange = (e: any) => updateDebounceRange(e);
  const updateDebounceRange = debounce((rangeValues) => {
    setFilterParams((prev) => {
      return (
        Array.isArray(rangeValues) && {
          ...prev,
          price_min: rangeValues[0],
          price_max: rangeValues[1],
        }
      );
    });
  });
  return (
    <div>
      <Group mb="md">
        <Text>Price Range:</Text>
      </Group>

      <RangeSlider
        color="black"
        minRange={20}
        min={1}
        max={500}
        step={10}
        defaultValue={[1, 500]}
        onChange={(e) => onRangeChange(e)}
      />
    </div>
  );
};

export default PriceRange;
