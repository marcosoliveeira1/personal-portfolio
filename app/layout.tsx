import "./globals.css";
import type { Metadata } from 'next'

import { inter } from './fonts'
import { CONFIG } from "../constants";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer/footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: CONFIG.site.title,
  description: CONFIG.site.description,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <link rel="icon" href="/logo.svg" sizes="any" />

      <body className="bg-gray-100 w-screen">
        <Header />

        {children}
        <Toaster position="top-right" />
        <Footer />

      </body>
    </html>
  );
}