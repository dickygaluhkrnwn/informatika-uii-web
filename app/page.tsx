"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link"; // Import Link
import { Header } from "@/components/layout/Header";
import { Card } from "@/components/ui/Card";
import { links } from "@/data/links";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react"; // Import Icons

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");

  // 1. Ekstrak Kategori Unik dari Data
  const categories = useMemo(() => {
    const uniqueCats = Array.from(new Set(links.map((link) => link.category)));
    return ["Semua", ...uniqueCats];
  }, []);

  // 2. Logika Filter (Search + Category)
  const filteredLinks = links.filter((link) => {
    const matchesSearch = link.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "Semua" || link.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20 font-sans">
      {/* Header sekarang menangani Navigasi & Pencarian */}
      <Header 
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Hero Section - Lebih Ringkas */}
      <section className="relative pt-12 pb-8 px-4 overflow-hidden">
        {/* Background Gradient UII - Lebih Soft */}
        <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-b from-uii-navy/5 via-uii-navy/5 to-transparent -z-10" />
        
        <div className="container-width text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-2"
          >
            <span className="text-uii-gold font-bold tracking-widest uppercase text-xs md:text-sm">
              Universitas Islam Indonesia
            </span>
            {/* Perbaikan teks: <br> hanya muncul di mobile (md:hidden) */}
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-uii-navy dark:text-white leading-tight">
              Pusat Layanan <br className="md:hidden" /> Informatika
            </h2>
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Satu pintu untuk semua kebutuhan akademik Anda.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- NEW: Automata Featured Banner --- */}
      <section className="container-width px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-uii-navy to-uii-navy-light p-6 md:p-10 shadow-2xl text-white group"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors duration-500" />
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-uii-gold/20 rounded-full blur-2xl" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="flex items-center px-3 py-1 rounded-full bg-uii-gold text-uii-navy text-xs font-bold uppercase tracking-wider shadow-sm">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Terbaru
                </span>
                <span className="text-slate-300 text-sm font-medium border-l border-white/20 pl-2">
                  Vol. 7 No. 1
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold leading-tight">
                AUTOMATA Open Submission
              </h3>
              <p className="text-slate-200 text-sm md:text-base leading-relaxed opacity-90">
                Pusat publikasi ilmiah mahasiswa Informatika. Dapatkan informasi lengkap mengenai syarat, template IEEE, dan alur pengajuan.
              </p>
            </div>

            <Link 
              href="/automata" 
              className="shrink-0 flex items-center px-6 py-3 bg-white text-uii-navy font-bold rounded-xl shadow-lg hover:bg-slate-50 transition-all hover:scale-105 active:scale-95 group/btn"
            >
              Lihat Informasi
              <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Links Grid Section */}
      <section className="container-width px-4">
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredLinks.length > 0 ? (
              filteredLinks.map((link) => (
                <motion.div
                  key={link.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    title={link.title}
                    href={link.href}
                    category={link.category}
                    icon={link.icon}
                  />
                </motion.div>
              ))
            ) : (
              // Empty State
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-20"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <p className="text-slate-500 text-lg font-medium">
                  Layanan tidak ditemukan.
                </p>
                <button 
                  onClick={() => { setSearchQuery(""); setActiveCategory("Semua"); }}
                  className="mt-2 text-uii-navy hover:text-uii-gold font-medium transition-colors"
                >
                  Reset Pencarian
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="mt-32 py-8 border-t border-slate-200 dark:border-slate-800">
        <div className="container-width text-center">
          <p className="text-slate-500 text-sm font-medium">
            &copy; {new Date().getFullYear()} Informatika UII. Dibuat dengan semangat <span className="text-red-500">♥</span> untuk mahasiswa.
          </p>
        </div>
      </footer>
    </main>
  );
}