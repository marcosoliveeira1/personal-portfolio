import "./globals.css";
import type { Metadata } from 'next'

import { inter } from './fonts'
import { Header } from "@/components/header";
import { CONFIG } from "../constants";

export const metadata: Metadata = {
  title: CONFIG.site.title,
  description: CONFIG.site.description,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body className="bg-gray-100">
        <Header />

        {children}
        {/* <Footer /> */}

      </body>
    </html>
  );
}