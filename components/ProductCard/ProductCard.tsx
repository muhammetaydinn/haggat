import { IProduct } from "@/models/product.model";
import { useCartStore } from "@/store/cart";
import { Carousel } from "@mantine/carousel";
import {
  ActionIcon,
  Button,
  Card,
  Group,
  Image,
  rem,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { IconShoppingCart, IconStar } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
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
  const theme = useMantineTheme();
  const { addToCart, cart, updateCartItemQuantity } = useCartStore();
  const productInCart = cart.find((item) => item.product.id === id);
  const [quantity, setQuantity] = useState(
    productInCart ? productInCart.quantity : 0
  );

  const handleIncrement = () => {
    // TODO:ADD toast.success("You successfully added product to your cart.");
    const updatedQuantity = quantity + 1;
    setQuantity(updatedQuantity);

    if (productInCart) {
      updateCartItemQuantity(id, updatedQuantity);
    } else {
      addToCart({
        id: id,
        title: title,
        price: price,
        description: description,
        images: images,
        category: category,
        creationAt: "",
        updatedAt: "",
      });
    }
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      const updatedQuantity = quantity - 1;
      setQuantity(updatedQuantity);

      if (productInCart) {
        updateCartItemQuantity(id, updatedQuantity);
      }
    }
  };

  const slides = images?.map((image) => (
    <Carousel.Slide key={image}>
      <Image src={image} height={220} />
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
