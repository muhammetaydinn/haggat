"use client";

import { useCartStore } from "@/store/cart";
import {
  Button,
  Paper,
  Container,
  Text,
  Image,
  Grid,
  Flex,
  Divider,
} from "@mantine/core";
import { useRouter } from "next/navigation";
const fee = 14.99;
const CartPage = () => {
  const router = useRouter();
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateCartItemQuantity = useCartStore(
    (state) => state.updateCartItemQuantity
  );

  const handleRemoveFromCart = (productId: number) => {
    removeFromCart(productId);
  };

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    updateCartItemQuantity(productId, newQuantity);
  };

  const totalCartCost = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-8/12">
        <Container>
          <h1>Shopping Cart</h1>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <Paper style={{ backgroundColor: "white" }} shadow="xs" p="xl">
              {cart.map((item) => (
                <div key={item.product.id} style={{ marginBottom: "16px" }}>
                  <Grid gutter="md">
                    <div style={{ marginRight: "16px" }}>
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.title}
                        className="w-24 h-24"
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <Text className="line-clamp-2 " size="xl">
                        {item.product.title}
                      </Text>
                      <Text size="lg">${item.product.price}</Text>
                    </div>
                    <div>
                      <Button
                        variant="outline"
                        color="rgba(0, 0, 0, 1)"
                        size="xs"
                        onClick={() => handleRemoveFromCart(item.product.id)}
                        style={{
                          marginRight: "8px",
                        }}
                      >
                        Remove
                      </Button>
                      <Button
                        variant="outline"
                        color="rgba(0, 0, 0, 1)"
                        size="xs"
                        onClick={() =>
                          handleQuantityChange(
                            item.product.id,
                            item.quantity - 1
                          )
                        }
                        disabled={item.quantity <= 1}
                      >
                        -
                      </Button>
                      <span style={{ margin: "0 8px" }}>{item.quantity}</span>
                      <Button
                        variant="outline"
                        color="rgba(0, 0, 0, 1)"
                        size="xs"
                        onClick={() =>
                          handleQuantityChange(
                            item.product.id,
                            item.quantity + 1
                          )
                        }
                      >
                        +
                      </Button>
                    </div>
                  </Grid>
                </div>
              ))}
            </Paper>
          )}
        </Container>
      </div>

      <div className="w-full md:w-4/12">
        <Container>
          {cart.length < 1 ? null : (
            <Paper style={{ backgroundColor: "white" }} shadow="xs" p="xl">
              <h1>Order Summary</h1>
              <Flex direction="column" gap="md">
                <Flex justify="space-between">
                  <Text size="xl">Total:</Text>
                  <Text size="xl">{`$${totalCartCost}`}</Text>
                </Flex>

                <Flex justify="space-between">
                  <Text size="xl">Shipping Fee:</Text>
                  <Text size="xl">{`$${fee}`}</Text>
                </Flex>

                {totalCartCost > 100 ? (
                  <Flex justify="space-between">
                    <Text size="xl">
                      Free Shipping for $100 and Above (Seller Will Cover)
                    </Text>
                    <Text
                      className="text-green-500"
                      size="xl"
                    >{`-$${fee}`}</Text>
                  </Flex>
                ) : (
                  <></>
                )}
              </Flex>
              <Divider m="md" />

              <Flex justify="space-between">
                <Text size="xl">Total:</Text>
                <Text size="xl" className="text-green-500">
                  {totalCartCost > 100
                    ? `$${totalCartCost}`
                    : `$${totalCartCost + fee}`}
                </Text>
              </Flex>
              <div style={{ marginTop: "16px" }}>
                <Button
                  variant="filled"
                  className="hover:bg-green-600 duration-300 ease-in-out"
                  color="black"
                  style={{ marginTop: "16px", width: "100%" }}
                  onClick={() => router.push("/payment")}
                >
                  Checkout
                </Button>
              </div>
            </Paper>
          )}
        </Container>
      </div>
    </div>
  );
};

export default CartPage;
