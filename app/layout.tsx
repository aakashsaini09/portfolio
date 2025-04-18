import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTrasition from "@/components/StairTrasition";

const jetBrainMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrainMono'
});

export const metadata: Metadata = {
  title: "Aakash Saini || Portfolio Website",
  description: "Portfolio Website Using Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetBrainMono.variable} antialiased`} >
        <Header/>
        <StairTrasition/>
        <PageTransition>
        {children}
        </PageTransition>
      </body>
    </html>
  );
}
