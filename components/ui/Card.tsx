"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CardProps {
  title: string;
  href: string;
  icon?: React.ReactNode;
  category?: string;
  delay?: number;
}

export const Card: React.FC<CardProps> = ({
  title,
  href,
  icon,
  category,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Link href={href} target="_blank" rel="noopener noreferrer" className="block h-full group">
        <div className="relative h-full p-6 overflow-hidden transition-all duration-300 bg-white border rounded-2xl shadow-sm hover:shadow-xl border-slate-200 hover:border-uii-gold/50 group-hover:bg-slate-50 dark:bg-slate-900 dark:border-slate-800">
          {/* Decorative Gradient Blob on Hover */}
          <div className="absolute top-0 right-0 w-32 h-32 transition-opacity duration-500 rounded-full opacity-0 -mr-16 -mt-16 bg-uii-gold/10 group-hover:opacity-100 blur-2xl" />

          <div className="relative z-10 flex flex-col h-full justify-between gap-4">
            {/* Header: Icon & Category */}
            <div className="flex items-start justify-between">
              <div className="p-3 transition-colors duration-300 rounded-xl bg-uii-navy/5 text-uii-navy group-hover:bg-uii-navy group-hover:text-white dark:bg-slate-800 dark:text-uii-gold">
                {icon}
              </div>
              {category && (
                <span className="px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                  {category}
                </span>
              )}
            </div>

            {/* Content: Title & Arrow */}
            <div className="space-y-2">
              <h3 className="text-lg font-bold leading-tight text-slate-800 group-hover:text-uii-navy dark:text-slate-200 transition-colors duration-300">
                {title}
              </h3>
              <div className="flex items-center text-sm font-medium text-uii-gold opacity-0 transform translate-x-[-10px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                Buka Tautan <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};