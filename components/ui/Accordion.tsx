"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  isOpen,
  onClick,
}) => {
  return (
    <div className="border-b border-slate-200 dark:border-slate-800 last:border-none">
      <button
        onClick={onClick}
        className="flex items-center justify-between w-full py-4 text-left group focus:outline-none"
      >
        <span className={`text-base font-medium transition-colors duration-300 ${
          isOpen ? "text-uii-navy dark:text-uii-gold" : "text-slate-700 dark:text-slate-300 group-hover:text-uii-navy dark:group-hover:text-uii-gold"
        }`}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`flex-shrink-0 ml-4 ${
            isOpen ? "text-uii-navy dark:text-uii-gold" : "text-slate-400"
          }`}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-4 text-slate-600 dark:text-slate-400 text-sm leading-relaxed whitespace-pre-line">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface AccordionProps {
  items: { q: string; a: string }[];
  category?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ items, category }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
      {category && (
        <h3 className="text-lg font-bold text-uii-navy dark:text-white mb-4 border-b border-slate-100 dark:border-slate-800 pb-2">
          {category}
        </h3>
      )}
      <div className="flex flex-col">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.q}
            answer={item.a}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    </div>
  );
};