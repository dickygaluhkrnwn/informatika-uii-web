import { 
  GraduationCap, 
  FileText, 
  UserCheck, 
  CreditCard, 
  Briefcase, 
  MessageCircle, 
  Mail,
  PenTool,
  ScrollText
} from "lucide-react";

export const links = [
  // --- Kategori: Tugas Akhir ---
  {
    title: "Penyerahan Naskah Tugas Akhir / Skripsi",
    href: "https://docs.google.com/forms/d/1TtkTWMNj2qmKoS6YKTzWPCnItzoiVglvYtwkSq9FN4A/viewform?edit_requested=true",
    category: "Tugas Akhir",
    icon: <FileText className="w-6 h-6" />,
  },
  {
    title: "Form Permohonan Surat Penelitian TA",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSchMd_phR36tq-cM9AVYPUipsX9cqW7h5wxocc7KdH4GAz03w/viewform",
    category: "Tugas Akhir",
    icon: <FileText className="w-6 h-6" />,
  },
  {
    title: "Virtual Akun Pembayaran TA (Reguler)",
    href: "https://docs.google.com/spreadsheets/d/1Lq40KOoSieyRXQ1B-Rx3xZj5IKHUal6AkZF8O2t4zYI/edit?gid=639615571#gid=639615571",
    category: "Tugas Akhir", // Digabung ke TA agar lebih ringkas
    icon: <CreditCard className="w-6 h-6" />,
  },
  {
    title: "Virtual Akun Pembayaran TA (IP)",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSczMkDygh_Uaz1Q_t1LdReyUY08vNkhE8X2Zc-9NW7loB8BDA/viewform",
    category: "Tugas Akhir",
    icon: <CreditCard className="w-6 h-6" />,
  },

  // --- Kategori: Pendadaran & Kelulusan ---
  {
    title: "Pendaftaran Pendadaran (Reguler)",
    href: "https://docs.google.com/forms/d/15mVPvaJHGmM5DB-beeOl7O2zDnOwdKqqznpmACXgpzI/viewform?edit_requested=true",
    category: "Pendadaran & Lulus",
    icon: <GraduationCap className="w-6 h-6" />,
  },
  {
    title: "Pendaftaran Pendadaran (IP)",
    href: "https://docs.google.com/forms/d/1AaVThzhqnKCvgw9NxJdtsoisbbubCYvNpM08wi8uG6E/viewform?edit_requested=true",
    category: "Pendadaran & Lulus",
    icon: <GraduationCap className="w-6 h-6" />,
  },
  {
    title: "Alur Pasca Pendadaran",
    href: "https://drive.google.com/file/d/1W3XkpMZB4OYXBNaZbYZBJ6c414_IBAlq/view",
    category: "Pendadaran & Lulus",
    icon: <ScrollText className="w-6 h-6" />,
  },
  {
    title: "Posting Lulus",
    href: "https://docs.google.com/forms/d/e/1FAIpQLScIzwuHo8FptuwkbbQrj0hGhBRK51zDSBepLV1HbufQh4aEQg/closedform",
    category: "Pendadaran & Lulus",
    icon: <UserCheck className="w-6 h-6" />,
  },

  // --- Kategori: Administrasi & Magang ---
  {
    title: "Permohonan Tanda Tangan Kaprodi",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSeQvYIeoyFJr2fMFFuyS-7TMWxE3Y3TbCLmfG2zakhQCWsJ5Q/viewform",
    category: "Administrasi",
    icon: <PenTool className="w-6 h-6" />,
  },
  {
    title: "Permohonan Surat Keterangan Aktif",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSeGTiROFATqudRtmhIBdVNVimI7zBniuW6u_1S7Qzq1NoV_Iw/closedform",
    category: "Administrasi",
    icon: <FileText className="w-6 h-6" />,
  },
  {
    title: "Permohonan Surat Magang Penjaluran",
    href: "https://docs.google.com/forms/d/1WVlU-VrF7ZE1zmbLAB6ea8kTnKHXWjd4HKaQRTH40Yw/viewform?edit_requested=true",
    category: "Administrasi", // Digabung agar tidak terlalu banyak tab
    icon: <Briefcase className="w-6 h-6" />,
  },

  // --- Kategori: Kontak ---
  {
    title: "WhatsApp Admin",
    href: "https://api.whatsapp.com/send/?phone=%2B628161113523&text&type=phone_number&app_absent=0",
    category: "Kontak",
    icon: <MessageCircle className="w-6 h-6" />,
  },
  {
    title: "Email Prodi",
    href: "mailto:informatika@uii.ac.id",
    category: "Kontak",
    icon: <Mail className="w-6 h-6" />,
  },
];