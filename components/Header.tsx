"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { LogInButton } from "./LogInButton";
import { Group } from "@mantine/core";

const Header = () => {
  const pathname = usePathname();
  return (
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

      <div className="flex items-center gap-10  ">
        <p>
          <Link
            className={`p-3 ${pathname === "/store" ? "underline" : ""}`}
            href="/store"
          >
            store
          </Link>
        </p>
        <p>
          <Link
            className={`p-3 ${pathname === "/" ? "underline" : ""}`}
            href="/"
          >
            home
          </Link>
        </p>
        <Group >
          <LogInButton />
          {/* {!session?.user?.email && <Button>Sign up</Button>} */}
        </Group>
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
  );
};

export default Header;
