"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";

// Import Komponen UI
import { Accordion } from "@/components/ui/Accordion";
import { Timeline } from "@/components/ui/Timeline";
import { TopicBadge } from "@/components/ui/TopicBadge";

// Import Data Konten
import { 
  automataHero, 
  importantDates, 
  researchTopics, 
  submissionSteps, 
  faqs 
} from "@/data/automata";

export default function AutomataPage() {
  // Variabel animasi untuk container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans selection:bg-uii-gold/30">
      
      {/* --- 1. Simple Navbar --- */}
      <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="container-width py-4 flex items-center justify-between">
          <Link 
            href="/"
            className="flex items-center text-slate-600 dark:text-slate-400 hover:text-uii-navy dark:hover:text-uii-gold transition-colors font-medium text-sm group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Kembali ke Beranda
          </Link>
          <div className="relative h-8 w-40">
             <Image 
               src="/images/program-studi-nformatika.png"
               alt="Program Studi Informatika UII"
               fill
               className="object-contain object-right"
             />
          </div>
        </div>
      </nav>

      {/* --- 2. Hero Section --- */}
      <section className="relative pt-12 pb-16 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-uii-navy/5 to-transparent -z-10" />
        
        <div className="container-width text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-uii-gold/10 text-uii-gold text-xs font-bold tracking-wider uppercase border border-uii-gold/20">
              Open Submission
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-uii-navy dark:text-white leading-tight">
              {automataHero.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-medium">
              {automataHero.subtitle}
            </p>
            <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 leading-relaxed">
              {automataHero.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a 
                href={automataHero.links.template} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-uii-navy text-white font-semibold hover:bg-uii-navy-light transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform duration-200"
              >
                <Download className="w-5 h-5 mr-2" />
                Unduh Template IEEE
              </a>
              <a 
                href={automataHero.links.turnitin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-medium hover:border-uii-gold hover:text-uii-navy dark:hover:text-uii-gold transition-colors"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Masuk Turnitin
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 3. Key Dates Grid --- */}
      <section className="container-width px-4 -mt-8 mb-20 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {importantDates.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`p-6 rounded-2xl border flex flex-col items-center text-center space-y-3 transition-all duration-300 ${
                item.highlight 
                  ? "bg-uii-navy text-white border-uii-navy shadow-xl scale-105 md:scale-110 relative z-20" 
                  : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 shadow-sm hover:border-uii-gold/50"
              }`}
            >
              <div className={`p-3 rounded-full ${
                item.highlight ? "bg-white/10 text-uii-gold" : "bg-slate-100 dark:bg-slate-800 text-slate-500"
              }`}>
                {item.icon}
              </div>
              <div>
                <h3 className={`text-sm font-bold uppercase tracking-wide mb-1 ${item.highlight ? "text-slate-300" : "text-slate-500"}`}>
                  {item.title}
                </h3>
                <p className="text-lg font-bold">{item.date}</p>
                {item.sub && <p className="text-sm opacity-80 mt-1">{item.sub}</p>}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <div className="container-width px-4 space-y-24 pb-32">
        
        {/* --- 4. Topic Scope --- */}
        <section>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white mb-4">
              Lingkup Publikasi
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Topik penelitian yang dapat dipublikasikan di prosiding AUTOMATA meliputi berbagai bidang berikut.
            </p>
          </motion.div>
          <TopicBadge topics={researchTopics} />
        </section>

        {/* --- 5. Submission Timeline --- */}
        <section className="relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white mb-4">
              Alur Pengajuan
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Ikuti langkah-langkah berikut untuk memastikan makalah Anda diterima.
            </p>
          </motion.div>
          
          <div className="bg-slate-50/50 dark:bg-slate-900/50 rounded-3xl p-4 md:p-10 border border-slate-200 dark:border-slate-800">
            <Timeline steps={submissionSteps} />
          </div>
        </section>

        {/* --- 6. FAQ Section --- */}
        <section className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white mb-4">
              Pertanyaan Umum
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Jawaban untuk pertanyaan yang sering diajukan seputar AUTOMATA dan Turnitin.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faqGroup, idx) => (
              <Accordion 
                key={idx} 
                items={faqGroup.items} 
                category={faqGroup.category} 
              />
            ))}
          </div>
        </section>

      </div>

      {/* --- 7. Footer Simple --- */}
      <footer className="py-8 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
        <div className="container-width text-center">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Informatika UII. Informasi diambil dari pengumuman resmi Prodi.
          </p>
        </div>
      </footer>

    </main>
  );
}