import { IProduct } from "@/models/product.model";
import { Carousel } from "@mantine/carousel";
import {
  Card,
  Group,
  Image,
  Text
} from "@mantine/core";
import { useRouter } from "next/navigation";
import classes from "./ProductCard.module.css";

const ProductCard = ({
  id,
  title,
  price,
  description,
  images,
  category,
}: IProduct) => {
  const router = useRouter();

  const slides = images?.map((image) => (
    <Carousel.Slide key={image}>
      <Image
        src={image}
        height={220}
        fallbackSrc="https://placehold.co/220?text=Placeholder"
      />
    </Carousel.Slide>
  ));

  return (
    <Card
      className="hover:shadow-2xl hover:shadow-gray-800/90  transition-shadow duration-300 ease-in-out"
      onClick={() => router.push(`/product/${id}`)}
      radius="md"
      withBorder
      padding="xl"
      style={{ minHeight: "200px", width: "280px" }}
    >
      <Card.Section>
        <Carousel
          withIndicators
          loop
          classNames={{
            root: classes.carousel,
            controls: classes.carouselControls,
            indicator: classes.carouselIndicator,
          }}
        >
          {slides}
        </Carousel>
      </Card.Section>

      <Group justify="space-between" mt="lg">
        <Text fw={500} fz="lg">
          {title}
        </Text>
      </Group>

      <Text fz="sm" c="dimmed" mt="sm">
        {category.name}
      </Text>

      <Group justify="space-between" mt="md">
        <div>
          <Text fz="xl" span fw={500} className={classes.price}>
            {`$${price}`}
          </Text>
        </div>
      </Group>
    </Card>
  );
};

export default ProductCard;
