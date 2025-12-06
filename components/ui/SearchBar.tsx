"use client";

import React from "react";
import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <div className="relative w-full max-w-2xl mx-auto group">
      {/* Glow Effect Focus */}
      <div className="absolute -inset-1 bg-gradient-to-r from-uii-navy to-uii-gold rounded-full opacity-20 group-focus-within:opacity-50 blur transition duration-500" />
      
      <div className="relative flex items-center bg-white dark:bg-slate-900 rounded-full shadow-lg border border-slate-200 dark:border-slate-800">
        <div className="pl-6 text-slate-400">
          <Search className="w-5 h-5" />
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Cari layanan (contoh: Skripsi, Magang...)"
          className="w-full py-4 pl-4 pr-6 text-base bg-transparent border-none rounded-full focus:ring-0 text-slate-800 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none"
        />
      </div>
    </div>
  );
};