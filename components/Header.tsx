"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { LogInButton } from "./LogInButton";
import { Badge, Box, Center, rem, useMantineTheme } from "@mantine/core";
import { IconShoppingCart } from "@tabler/icons-react";
import { useCartStore } from "@/store/cart";

const Header = () => {
  const theme = useMantineTheme();
  const pathname = usePathname();
  const { cart } = useCartStore();
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="shadow-lg sticky top-0 z-10 bg-white">
      <div className="container mx-auto flex justify-between items-center p-5">
        {/* Logo with Link */}
        <Link href="/" className="flex-shrink-0">
          <img
            src="/logo.svg"
            alt="Logo"
            className="hidden sm:block max-w-full h-8"
            width={100}
            height="auto"
          />
          <img
            src="/logosmall.svg"
            alt="Small Logo"
            className="block sm:hidden max-w-full h-8"
            width={50}
            height="auto"
          />
        </Link>

        {/* Navigation Links */}
        <div className="flex flex-grow justify-center ">
          <Link
            className={`p-3 ${
              pathname === "/products" ? "underline font-bold" : ""
            }`}
            href="/products"
          >
            Store
          </Link>
          <Link
            className={`p-3 ${pathname === "/" ? "underline font-bold" : ""}`}
            href="/"
          >
            Home
          </Link>
          <Link href="/cart" className="p-3 flex items-center">
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
        </div>

        {/* User Button */}
        <div className="flex-shrink-0">
          <LogInButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
