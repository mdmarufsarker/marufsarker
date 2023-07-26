import "./globals.css";
import type { Metadata } from "next";
import Head from "next/head";
import Link from "next/link";

import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Maruf Sarker",
  description:
    "Frontend Web Developer, Content Creator & Competitive Programmer",
  viewport: "width=device-width, initial-scale=1",
  icons: "/images/logo.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <Link rel="preconnect" href="https://fonts.googleapis.com"></Link>
        <Link rel="preconnect" href="https://fonts.gstatic.com"></Link>
        <Link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Itim&family=Pacifico&family=Work+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        ></Link>
      </Head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
