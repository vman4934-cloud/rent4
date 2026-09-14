import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope } from "next/font/google";
import { company } from "@/data/company";
import { CartProvider } from "@/components/providers/CartProvider";
import { DemoBanner } from "@/components/layout/DemoBanner";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { TopBar } from "@/components/layout/TopBar";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `Аренда инструмента и оборудования в ${company.city} — ${company.name}`,
    template: `%s — ${company.name}`,
  },
  description: `Каталог аренды строительного инструмента в ${company.serviceArea}. Предварительный расчёт стоимости и заявка. Наличие подтверждает менеджер.`,
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${manrope.variable} font-sans antialiased`}>
        <CartProvider>
          <div className="flex min-h-screen flex-col">
            <a href="#main" className="skip-link">
              Перейти к содержимому
            </a>
            <TopBar />
            <DemoBanner />
            <Header />
            <main id="main" className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
