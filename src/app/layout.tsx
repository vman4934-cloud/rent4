import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Golos_Text } from "next/font/google";
import { company } from "@/data/company";
import { CartProvider } from "@/components/providers/CartProvider";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { TopBar } from "@/components/layout/TopBar";
import "./globals.css";

const golos = Golos_Text({
  subsets: ["latin", "cyrillic"],
  variable: "--font-golos",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `Аренда инструмента и оборудования — ${company.name}, ${company.city}`,
    template: `%s — ${company.name}`,
  },
  description: "Аренда инструмента и оборудования RentGar: Москва, 45 моделей для ремонта, стройки и уборки. Рассчитайте стоимость на нужный срок и оставьте заявку.",
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : process.env.GITHUB_PAGES === "true"
      ? new URL("https://vman4934-cloud.github.io/rent4/")
      : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${golos.variable} font-sans antialiased`}>
        <CartProvider>
          <div className="flex min-h-screen flex-col">
            <a href="#main" className="skip-link">
              Перейти к содержимому
            </a>
            <TopBar />
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
