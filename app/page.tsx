import CategoriesCarousel from "@/components/CategoriesCarousel/CategoriesCarousel";
import HomeCarousel from "@/components/HomeCarousel";
import {
  fetchAllCategories,
  fetchHomeCarouselProducts,
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
        <h2 className="text-2xl font-bold mt-10">Categories</h2>
        <CategoriesCarousel initialCategoriesData={initialCategoriesData} />
      </main>
    </div>
  );
}
