"use client";

import React from "react";
import { motion } from "framer-motion";

interface CategoryTabsProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <div className="w-full overflow-x-auto no-scrollbar py-4 px-1">
      <div className="flex gap-3 min-w-max">
        {categories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className="relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-uii-gold"
            >
              {/* Background Animation */}
              {isActive ? (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-uii-navy text-white rounded-full shadow-md"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              ) : (
                <div className="absolute inset-0 bg-white border border-slate-200 rounded-full hover:bg-slate-50 dark:bg-slate-800 dark:border-slate-700" />
              )}

              {/* Text Label */}
              <span className={`relative z-10 ${isActive ? "text-white" : "text-slate-600 dark:text-slate-300"}`}>
                {category}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};