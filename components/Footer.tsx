import Link from "next/link";
import { IconBrandGithub } from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pb-4 pl-4 pr-4 mt-2">
      {/* Divider */}
      <div className="h-px bg-gray-300 my-4"></div>

      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm text-gray-600">
          © 2024{" "}
          <Link
            href="https://www.linkedin.com/in/muhammetaydin02/"
            className="text-gray-600 underline hover:text-gray-800"
          >
            muhammetaydin
          </Link>
          . All rights reserved.
        </p>
        <div className="bg-gray-300 hover:bg-gray-400 rounded-md p-2 transition-colors duration-200">
          <a
            href="https://github.com/muhammetaydinn"
            className="text-gray-600 hover:text-gray-800"
            aria-label="GitHub"
          >
            <IconBrandGithub className="w-5 h-5" stroke={1.5} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
