"use client";

import React from "react";
import { motion } from "framer-motion";

interface Step {
  id: number;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

interface TimelineProps {
  steps: Step[];
}

export const Timeline: React.FC<TimelineProps> = ({ steps }) => {
  return (
    <div className="relative flex flex-col space-y-8 pl-6 md:pl-0">
      {/* Vertical Line (Mobile: Left, Desktop: Center - Simplified to Left for consistency first) */}
      <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-slate-200 dark:bg-slate-800 md:left-1/2 md:-ml-px" />

      {steps.map((step, index) => {
        const isEven = index % 2 === 0;
        return (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex items-center md:justify-between ${
              isEven ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Empty Space for layout balance */}
            <div className="hidden md:block w-5/12" />

            {/* Icon Node */}
            <div className="absolute left-0 md:left-1/2 md:-ml-6 flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-slate-900 border-4 border-slate-100 dark:border-slate-800 shadow-sm z-10 text-uii-navy dark:text-uii-gold">
              {step.icon}
            </div>

            {/* Content Card */}
            <div className="ml-12 md:ml-0 w-full md:w-5/12">
              <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow duration-300">
                <span className="inline-block px-2.5 py-0.5 rounded text-xs font-bold bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400 mb-2">
                  Langkah {step.id}
                </span>
                <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">
                  {step.title}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};