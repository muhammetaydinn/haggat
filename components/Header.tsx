"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { LogInButton } from "./LogInButton";
import { Badge, Box, Center, Group, rem, useMantineTheme } from "@mantine/core";
import { IconShoppingCart } from "@tabler/icons-react";
import { useCartStore } from "@/store/cart";

const Header = () => {
  const theme = useMantineTheme();
  const pathname = usePathname();
  const { cart } = useCartStore();
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <div className="shadow-lg  sticky z-10 ">
      <div className="flex justify-between items-center text-black ml-5 mr-5 p-5">
        <div className="hidden sm:block">
          <img
            src="/logo.svg"
            alt="Large Logo"
            className="max-w-full h-8 min-w-16"
            width={100}
            height={"auto"}
          />
        </div>

        {/* Small logo, shown when screen width is less than 400px */}
        <div className="block sm:hidden">
          <img
            src="/logosmall.svg"
            alt="Small Logo"
            className="max-w-full h-8 min-w-8"
            width={50}
            height={"auto"}
          />
        </div>

        <div className="flex items-center gap-10 mr-5 ">
          <p>
            <Link
              className={`p-3 ${
                pathname === "/products" ? "underline font-bold" : ""
              }`}
              href="/products"
            >
              store
            </Link>
          </p>
          <p>
            <Link
              className={`p-3 ${pathname === "/" ? "underline font-bold" : ""}`}
              href="/"
            >
              home
            </Link>
          </p>
          <Link
            href="/cart"
            className="p-3
          "
          >
            <Center inline>
              <Box component="span" mr={5}>
                Cart
              </Box>
              <IconShoppingCart
                style={{ width: rem(16), height: rem(16) }}
                color="black"
              />
              {totalQuantity > 0 && (
                <Badge
                  size="xs"
                  circle
                  style={{
                    backgroundColor: theme.colors.red[6],
                    transform: "translate(-2px,-8px)",
                    minWidth: "fit-content",
                  }}
                >
                  {totalQuantity}
                </Badge>
              )}
            </Center>
          </Link>
          <LogInButton />
          {/* {!session?.user?.email && <Button>Sign up</Button>} */}
          {/* <button
          onClick={() => {
            router.push("/login");
          }}
          className="p-3 bg-cyan-300 text-white hover:bg-cyan-700 shadow-lg rounded-lg"
        >
          giris yap
        </button> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
