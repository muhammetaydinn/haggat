"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="flex justify-between items-center text-black ml-5 p-5">
      <div className="hidden sm:block">
        <img
          src="/logo.svg"
          alt="Large Logo"
          className="max-w-full h-16 min-w-32"
          width={200}
          height={64}
        />
      </div>

      {/* Small logo, shown when screen width is less than 400px */}
      <div className="block sm:hidden">
        <img
          src="/logosmall.svg"
          alt="Small Logo"
          className="max-w-full h-16 min-w-16"
          width={100}
          height={64}
        />
      </div>

      <div className="flex items-center gap-24 mr-5 ">
        <p>
          <Link
            className={`p-3 ${pathname === "/store" ? "underline" : ""}`}
            href="/store"
          >store</Link>
        </p>
        <p>
          <Link
            className={`p-3 ${pathname === "/" ? "underline" : ""}`}
            href="/"
          >
            home
          </Link>
        </p>
        <button
          onClick={() => {
            router.push("/login");
          }}
          className="p-3 bg-cyan-300 text-white hover:bg-cyan-700 shadow-lg rounded-lg"
        >
          giris yap
        </button>
      </div>
    </div>
  );
};

export default Header;
