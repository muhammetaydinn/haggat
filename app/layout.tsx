import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import { MantineProvider } from "@mantine/core";
import Header from "@/components/Header";
import Providers from "@/components/Providers";
import { ReactQueryProvider } from "@/components/ReactQueryProvider";


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
      <body className={`h-full  bg-whit text-black`}>
        {/*Custom cache (optional) the code snippet below shows how to change the CSS key to css (the
        default is mui): */}
        <Providers>
          <ReactQueryProvider>
            <AppRouterCacheProvider options={{ key: "css" }}>
              <MantineProvider forceColorScheme="light">
                <Header />
                {children}
                <Footer />
              </MantineProvider>
            </AppRouterCacheProvider>
          </ReactQueryProvider>
        </Providers>
      </body>
    </html>
  );
}
