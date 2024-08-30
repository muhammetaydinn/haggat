import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { MantineProvider } from "@mantine/core";
import Header from "@/components/Header";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HAGGAT - Gothic Things",
  description: "T-shirts and more...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-white">
      <link rel="shortcut icon" href="/haggat_favicon.svg" />
      <body className={`h-full ${inter.className} bg-white`}>
        {/*Custom cache (optional) the code snippet below shows how to change the CSS key to css (the
        default is mui): */}
        <Providers>
          <AppRouterCacheProvider options={{ key: "css" }}>
            <MantineProvider defaultColorScheme="light">
              <Header />
              {children}
              <Footer />
            </MantineProvider>
          </AppRouterCacheProvider>
        </Providers>
      </body>
    </html>
  );
}
