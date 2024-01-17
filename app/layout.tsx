import "./globals.css";
import type { Metadata } from 'next'

import { inter } from './fonts'
import { site } from "../lib/data";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer/footer";
import { Toaster } from "react-hot-toast";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <link rel="icon" href="/logo.svg" sizes="any" />

      <body className="bg-gray-100 w-screen">
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Toaster position="top-right" />
          <Footer />
        </ActiveSectionContextProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}