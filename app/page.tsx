import CategoriesCarousel from "@/components/CategoriesCarousel/CategoriesCarousel";
import HomeCarousel from "@/components/HomeCarousel";
import { fetchAllCategories, fetchHomeCarouselProducts } from "@/services";
import { Container, Text } from "@mantine/core";
// Bunu ekleyerek bileşeni Client Component yapıyoruz

export default async function Home() {
  const initialData = await fetchHomeCarouselProducts();
  const initialCategoriesData = await fetchAllCategories();
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Ana İçerik */}
      <main className="p-5">
        <HomeCarousel initialData={initialData} />
        <Text
          style={{
            textAlign: "start",
            fontWeight: "bold",
            fontSize: "2rem",
          }}
          size="xl"
          mt={"2rem"}
          mb={"2rem"}
        >
          Categories
        </Text>
        <Container size="" mt={"2rem"} mb={"2rem"}>
          <CategoriesCarousel initialCategoriesData={initialCategoriesData} />
        </Container>
      </main>
    </div>
  );
}
