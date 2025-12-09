"use client";

import React from "react";
import { motion } from "framer-motion";

interface TopicBadgeProps {
  topics: string[];
}

export const TopicBadge: React.FC<TopicBadgeProps> = ({ topics }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {topics.map((topic, index) => (
        <motion.div
          key={topic}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm text-sm font-medium text-slate-700 dark:text-slate-300 hover:border-uii-gold hover:text-uii-navy dark:hover:text-uii-gold transition-colors cursor-default"
        >
          {topic}
        </motion.div>
      ))}
    </div>
  );
};