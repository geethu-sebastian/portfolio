import type { Metadata } from "next";
import {  Poppins, Rubik } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { siteConfig } from "./page";
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});
const rubik = Rubik({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  //metadataBase: new URL(""),
  title: {
    default: siteConfig.name,
    template: `%s - Software Engineer`,
  },
  description: siteConfig.description,

  // added new keywords for seo
  keywords: [
    "geethu",
    "sebastian",
    "GEETHU",
    "Geethu",
    "Sebastian",
    "Geethu Sebastian",
    "geethu sebastian",
    "portfolio",
    "web developer",
    "web",
    "web dev",
    "developer",
    "PROGRAMMER ",
    "programmer ",
    "GEETHU SEBASTIAN ",
    "website",
    "@geethugsp",
    "geethu developer",
  ],
  authors: [
    {
      name: "Geethu Sebastian",
      url: "https://github.com/geethu-sebastian",
    },
  ],
  creator: "Geethu Sebastian",

  openGraph: {
    type: "website",
    locale: "en_US",
    //url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    creator: "@geethugsp",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${rubik.variable}`}>
        <main
          className={cn(
            "flex relative screen break-words min-h-screen items-center justify-between pt-14 pb-4 px-40 max-md:p-4 max-sm:pt-20",
            { "bg-white": "#E6E7EB" }
          )}
        >
          {/* NAVBAR ->  */}
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
