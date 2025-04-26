import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Cairo } from 'next/font/google';

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollToTop from "@/components/ScrollToTop";
import NextTopLoader from 'nextjs-toploader';

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Tux Paint - رسومات ممتعة للأطفال",
  icons: {
    icon: '/tux-character.png',
  },
  description: "موقع تعليمي يشرح برنامج Tux Paint، وهو برنامج رسم مفتوح المصدر للأطفال يجمع بين المرح والتعليم",
};

const cairo = Cairo({
  subsets: ['arabic'],
  display: 'swap',
  weight: ['400', '600', '700'],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${nunito.className} ${cairo.className}`}>
        <NextTopLoader
          color="#FF8A65"
          initialPosition={0}
          height={3}
          showSpinner={false}
          shadow="0 0 10px #FF8A65,0 0 5px #FF8A65"
        />
        <div className="min-h-screen  flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
