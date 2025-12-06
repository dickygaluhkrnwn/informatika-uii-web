"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";

interface HeaderProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm transition-all duration-300">
      <div className="container-width py-3 md:py-0">
        {/* Tambahkan md:flex-nowrap agar di desktop tidak turun baris */}
        <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-y-4 md:gap-y-0 md:h-20">
          
          {/* 1. Logo Section (Kiri) */}
          {/* Update: Perkecil width container desktop ke 200px */}
          <div className={`flex items-center shrink-0 order-1 md:w-[200px] transition-opacity duration-300 ${isSearchOpen ? 'opacity-0 md:opacity-100 hidden md:flex' : 'opacity-100'}`}>
            {/* Update: Perkecil ukuran visual logo (h-9 dan w-48) */}
            <div className="relative h-9 w-48 md:w-52">
               <Image 
                 src="/images/program-studi-nformatika.png"
                 alt="Program Studi Informatika UII"
                 fill
                 className="object-contain object-left"
                 priority
               />
            </div>
          </div>

          {/* 2. Search Section (Kanan) */}
          {/* Update: Tambahkan shrink-0 dan samakan width container ke 200px agar simetris */}
          <div className="flex justify-end items-center order-2 md:order-3 ml-auto md:ml-0 md:w-[200px] shrink-0">
            <AnimatePresence mode="wait">
              {isSearchOpen ? (
                <motion.div 
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "100%" }}
                  exit={{ opacity: 0, width: 0 }}
                  className="flex items-center w-full bg-slate-100 dark:bg-slate-800 rounded-full px-4 py-2 overflow-hidden"
                >
                  <Search className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
                  <input
                    ref={inputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder="Cari..."
                    className="w-full bg-transparent border-none focus:ring-0 text-sm outline-none text-slate-800 dark:text-slate-200 placeholder:text-slate-400"
                  />
                  <button onClick={() => { setIsSearchOpen(false); onSearchChange(""); }} className="ml-2 text-slate-400 hover:text-slate-600 shrink-0">
                    <X className="w-4 h-4" />
                  </button>
                </motion.div>
              ) : (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2.5 rounded-full bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors"
                >
                  <Search className="w-5 h-5" />
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          {/* 3. Category Tabs (Tengah) */}
          <div className="w-full md:w-auto md:flex-1 md:flex md:justify-center order-3 md:order-2 overflow-x-auto md:overflow-visible no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
            <div className="flex gap-4 lg:gap-6 min-w-max md:min-w-0 border-b border-transparent md:justify-center">
              {categories.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => onSelectCategory(category)}
                    className={`relative pb-3 text-sm font-medium transition-colors duration-300 whitespace-nowrap ${
                      isActive 
                        ? "text-uii-navy dark:text-uii-gold" 
                        : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
                    }`}
                  >
                    {category}
                    {isActive && (
                      <motion.div
                        layoutId="activeTabIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-uii-navy dark:bg-uii-gold rounded-t-full"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};