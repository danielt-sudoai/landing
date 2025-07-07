import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ContextLanguageProvider } from "@/context/context-Language";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Motivami",
  description:
    "Motivami is a platform that helps you stay motivated and achieve your goals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ContextLanguageProvider>
      <html lang="it">
        <body className={`${montserrat.variable} antialiased`}>{children}</body>
      </html>
    </ContextLanguageProvider>
  );
}
