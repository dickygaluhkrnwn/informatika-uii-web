import { 
  BookOpen, 
  FileCheck, 
  UploadCloud, 
  UserCheck, 
  AlertCircle, 
  CheckCircle2,
  Clock,
  CalendarDays
} from "lucide-react";

// --- 1. Hero & Jadwal ---
export const automataHero = {
  title: "AUTOMATA Open Submission",
  subtitle: "Vol. 7 No. 1 (Semester Ganjil 2025/2026)",
  description: "Pusat publikasi ilmiah mahasiswa Informatika UII. Wajib bagi mahasiswa yang mengambil mata kuliah Publikasi Ilmiah.",
  links: {
    template: "https://www.ieee.org/conferences/publishing/templates.html",
    turnitin: "https://www.turnitin.com/",
    ojs: "https://journal.uii.ac.id/AUTOMATA" // Asumsi link OJS, nanti bisa disesuaikan
  }
};

export const importantDates = [
  { title: "Submit Makalah", date: "2 – 8 Des 2025", icon: <UploadCloud className="w-5 h-5" /> },
  { title: "Masa Review", date: "9 – 15 Des 2025", icon: <Clock className="w-5 h-5" /> },
  { title: "Batas Revisi", date: "20 Des 2025", icon: <AlertCircle className="w-5 h-5" /> },
  { title: "Kolokium", date: "23 Des 2025", sub: "13.00 WIB", icon: <CalendarDays className="w-5 h-5" />, highlight: true },
];

// --- 2. Topik (Scope) ---
export const researchTopics = [
  "Cyber Systems",
  "Informatics Theory & Intelligence Systems",
  "Data Science",
  "Software Engineering",
  "Information Systems",
  "Medical Informatics",
  "Community Development",
  "Business Start-up",
  "Internship"
];

// --- 3. Alur Proses (Step by Step) ---
export const submissionSteps = [
  {
    id: 1,
    title: "Join Turnitin",
    desc: "Buat akun student di Turnitin.com. Gunakan Class ID: 36853979 & Enrollment Key: bismillahUII.",
    icon: <UserCheck className="w-6 h-6" />
  },
  {
    id: 2,
    title: "Cek Similarity",
    desc: "Upload draft makalah (gunakan nama 'John Doe'). Pastikan similarity index < 20%. Max cek 3x sehari.",
    icon: <FileCheck className="w-6 h-6" />
  },
  {
    id: 3,
    title: "Submit OJS",
    desc: "Login OJS dengan email UII. Upload makalah (blind review) & hasil Turnitin. Tambahkan dosen sebagai author ke-2.",
    icon: <UploadCloud className="w-6 h-6" />
  },
  {
    id: 4,
    title: "Proses Review",
    desc: "Tunggu status 'Awaiting Assignment' berubah menjadi 'In Review'. Cek email secara berkala.",
    icon: <Clock className="w-6 h-6" />
  },
  {
    id: 5,
    title: "Revisi & Publish",
    desc: "Perbaiki sesuai catatan reviewer. Upload versi final (ada nama penulis) di bagian Upload Author Version.",
    icon: <BookOpen className="w-6 h-6" />
  }
];

// --- 4. FAQ Data ---
export const faqs = [
  {
    category: "Umum & Syarat",
    items: [
      {
        q: "Apa itu AUTOMATA?",
        a: "AUTOMATA adalah prosiding/jurnal publikasi ilmiah di Jurusan Informatika UII. Saat ini membuka Open Submission untuk Vol. 7 No. 1."
      },
      {
        q: "Apa saja dokumen yang harus disiapkan?",
        a: "1. Makalah (blind review) format IEEE A4 (4–8 hal).\n2. Similarity report (Turnitin) < 20%.\n3. Checklist & persetujuan pembimbing."
      },
      {
        q: "Bagaimana aturan untuk Tugas Akhir Berkelompok?",
        a: "Setiap anggota kelompok (PKM / Perintisan Bisnis) wajib membuat dan mengunggah makalah pada aspek yang berbeda dari pekerjaan kelompoknya."
      }
    ]
  },
  {
    category: "Turnitin & Similarity",
    items: [
      {
        q: "Berapa batas similarity index yang diperbolehkan?",
        a: "Maksimal 20%. Makalah dengan similarity >20% akan ditolak secara otomatis."
      },
      {
        q: "Apakah nama asli boleh dicantumkan saat cek Turnitin?",
        a: "TIDAK. Karena proses review adalah double-blind, gunakan nama samaran 'John Doe' saat upload ke Turnitin."
      },
      {
        q: "Bagaimana cara mengunduh similarity report?",
        a: "Di Turnitin, klik tombol 'View', lalu klik ikon 'Download', dan pilih 'Current View'. File PDF ini wajib dilampirkan di OJS."
      }
    ]
  },
  {
    category: "Proses OJS & Review",
    items: [
      {
        q: "Apakah harus membuat akun OJS?",
        a: "Ya. Daftar menggunakan email UII (NIM@student.uii.ac.id). Pastikan mencentang opsi 'Author: Able to submit items'."
      },
      {
        q: "Apa yang harus dilakukan jika status 'Accept with Revision'?",
        a: "Baca catatan reviewer, revisi makalah, beri nama penulis lengkap pada versi revisi, lalu unggah ulang di menu 'Upload Author Version'."
      },
      {
        q: "Kapan makalah dipindahkan ke ARCHIVE?",
        a: "Setelah makalah selesai proses editing dan resmi diterbitkan pada prosiding AUTOMATA."
      }
    ]
  }
];