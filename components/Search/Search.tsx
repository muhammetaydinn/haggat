import useGetAllCategories from "@/hooks/useGetAllCategories";
import useGetProducts from "@/hooks/useGetProducts";
import { debounce } from "@/utils/debounce";
import { Container, Skeleton, TextInput } from "@mantine/core";
import { Dispatch, SetStateAction } from "react";
interface IProductsFilterContainerProps {
  setFilterParams: Dispatch<SetStateAction<object>>;
}

const Search = ({ setFilterParams }: IProductsFilterContainerProps) => {
  const onChange = (e: any, name: string) =>
    updateDebounceText(e.target.value, name);
  const updateDebounceText = debounce((text, name) => {
    setFilterParams((prev) => {
      return !!text && { ...prev, [name]: text };
    });
  });
  return (
    <div>
      <TextInput
        styles={{
          input: {
            border: "2px solid black",
          },
        }}
        name="title"
        withAsterisk
        label="Search "
        placeholder="Type a product."
        onChange={(e) => onChange(e, "title")}
      />
    </div>
  );
};

export default Search;
