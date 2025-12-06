import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// 1. Konfigurasi Font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

// 2. Konfigurasi Metadata (SEO)
export const metadata: Metadata = {
  title: "Informatika UII - Portal Informasi Mahasiswa",
  description: "Pusat informasi layanan akademik, tugas akhir, dan kemahasiswaan Program Studi Informatika Universitas Islam Indonesia.",
  icons: {
    icon: "/favicon.ico", // Pastikan nanti ada favicon, atau bisa hapus baris ini dulu
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-slate-50 text-slate-900 min-h-screen flex flex-col`}
      >
        {/* Konten halaman akan dirender di sini */}
        {children}
        <Analytics />
      </body>
    </html>
  );
}