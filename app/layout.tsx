import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fajri Bagja Putra - Frontend Web Developer, North Cikarang, West Java, Indonesia | Personal Website",
  description: "I'm from Indonesia, passionate about web development and design. I'm always eager to take on new challenges and collaborate on exciting projects. Let's connect and explore opportunities together",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
