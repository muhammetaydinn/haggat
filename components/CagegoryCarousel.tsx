import useGetAllCategories from "@/hooks/useGetAllCategories";
import { ICategory } from "@/models/category.model";
import React from "react";
interface ICategoriesCarouselProps {
  initialCategoriesData: ICategory[];
}
const CategoryCarousel = ({
  initialCategoriesData,
}: ICategoriesCarouselProps) => {
      const { categories, isLoading } = useGetAllCategories(
        initialCategoriesData
      );
  return (
    <div className="text-black">
      {initialCategoriesData.length > 0 ? (
        <a>{initialCategoriesData.map((category) => category.name)}</a>
      ) : (
        <a>loading...</a>
      )}
    </div>
  );
};

export default CategoryCarousel;
