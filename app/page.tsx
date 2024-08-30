"use client";
import HomeCarousel from "@/components/HomeCarousel";
import {
  fetchAllCategories,
  fetchHomeCarouselProducts,
  fetchProductsByCategoryId,
} from "@/services";

// Bunu ekleyerek bileşeni Client Component yapıyoruz

export default async function Home() {
  const initialData = await fetchHomeCarouselProducts();
  const initialCategoriesData = await fetchAllCategories();
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Ana İçerik */}
      <main className="p-5">
        <HomeCarousel initialData={initialData} />
      </main>
    </div>
  );
}
