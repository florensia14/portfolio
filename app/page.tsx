"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/* Icon pakai file PNG kamu sendiri, taruh di public/element/
   lalu sesuaikan nama filenya di bawah kalau beda */
const ICONS = {
  // bintang (stars)
  kupu: "/element/home.png",
  starSmall: "/element/starSmall.png",
  starBlue: "/element/bintang biru.png",
  starPink: "/element/bintang pink.png",
  starSkill: "/element/bintangSkill.png",
  // sparkle / burst
  sparkleBlue: "/element/bom biru.png",
  sparklePink: "/element/bom pink.png",
  // kupu-kupu (butterflies)
  butterflyPink: "/element/kupu pink (1).png",
  butterflyYellow: "/element/kupu kuning(2).png",
  // dekorasi lain
  flower: "/element/flower.png",
  denim: "/element/denim.jpeg",
  omg: "/element/omg.png",
  tulip: "/element/tulip.png",
  user: "/element/user.png",
  cv: "/element/cv.jpeg",
  // kontak
  email: "/element/email.png",
  github: "/element/githubb.png",
  githubb: "/element/github.png",
  whatsapp: "/element/whatsapp.png",
  quote: "/element/quote.png",
  attention: "/element/attention.png",
  book: "/element/buku.png",
  pin: "/element/pin.png",
  instagram: "/element/instagram.png",
};

/* ------------------------------------------------------------------ */
/*  DATA — gampang diubah di sini tanpa nyentuh JSX di bawah           */
/* ------------------------------------------------------------------ */

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Goals & Interests", href: "#goals" },
  { label: "Skill's", href: "#skills" },
  { label: "Project", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

/* Nama file disamakan persis dengan yang ada di public/element/ kamu.
   MySQL belum ada file-nya di folder — tambahkan mysql.png kalau sudah punya. */
const SKILLS = [
  { name: "JavaScript", icon: "/element/js.webp" },
  { name: "Tailwind", icon: "/element/Tailwindd.png" },
  { name: "PostgreSQL", icon: "/element/PostgreSQL.png" },
  { name: "Node.js", icon: "/element/nodejs.png" },
  { name: "CSS", icon: "/element/CSSS.png" },
  { name: "MySQL", icon: "/element/sql.png" },
  { name: "Express.js", icon: "/element/EXP.png" },
  { name: "React Native", icon: "/element/React.png" },
  { name: "Figma", icon: "/element/figma.png" },
  { name: "HTML", icon: "/element/html.png" },
  { name: "Supabase", icon: "/element/SUPABASE.png" },
  { name: "GitHub", icon: "/element/githubb.png" },
  { name: "Python", icon: "/element/python.png" },
  { name: "Next.js", icon: "/element/Next.png" },
  { name: "Visual Studio Code", icon: "/element/vs.png" },
  { name: "TypeScript", icon: "/element/TypeScript.png" },
  { name: "Docker", icon: "/element/dockerr.png" },
];

/* ------------------------------------------------------------------ */
/*  TEMPLATE GAMBAR PROJECT                                            */
/*  Tiap project dikasih 6 slot gambar (elem-1.png s/d elem-6.png).    */
/*  Kalau fotomu cuma 2-3, tinggal HAPUS baris yang tidak kepake.      */
/*  Kalau lebih dari 6, tinggal TAMBAH baris baru dengan pola yang     */
/*  sama. File-nya taruh di public/element/ dengan nama yang sama.    */
/* ------------------------------------------------------------------ */

const PROJECTS = [
  {
    title: "LUXURY",
    subtitle: "E-Commerce Mobile App | 2024",
    desc: "A luxury fashion e-commerce mobile app UI/UX design concept, featuring an elegant dark teal palette paired with clean white backgrounds, minimalist typography, and a sleek, exclusive visual style. The kit includes a full set of screens ranging from login and sign up (welcome, sign in, forgot password, OTP verification) to shopping (catalog, search, product details, cart), checkout (payment and shipping address), and account management (profile, order history, wishlist, notifications), along with supporting features such as vouchers, language settings, help, and logout. Each screen is designed consistently to deliver a premium, simple, and refined shopping experience.",
    images: [
      "/element/luxury1.png",
      "/element/luxury2.png",
      "/element/luxury3.png",
      "/element/luxury4.png",
    ],
    decor: ICONS.starBlue,
    layout: "split",
    tilt: "none",
    links: [{ label: "View Design", href: "https://www.figma.com/design/gaxKx6jNzU90SqDSHQq6Yt/projek-ddg?node-id=0-1&t=KoLlmse4MCgslkam-1" }],
  },
  {
    title: "LEARNIFY",
    subtitle: "e-learning mobile app | 2024",
    desc: "Learnify is a clean, user-friendly e-learning mobile app concept featuring a blue, white, and yellow color palette. It includes a complete workflow from onboarding, authentication (login, signup, OTP, forgot password), and home screen to course browsing by education level, detailed listings, teacher schedules, events, and registrations. Designed with consistent navigation, the kit supports online tutoring, video lessons, practice exercises, testimonials, and certificate management.",
    images: [
      "/element/learnify1.png",
      "/element/learnify2.png",
      "/element/learnify3.png",
      "/element/learnify4.png",
    ],
    decor: null,
    layout: "combined",
    tilt: "none",
    links: [{ label: "View Design", href: "https://www.figma.com/design/o1dRHmb74i7zUnxR0vV6X5/Learnify-Landing-page?node-id=0-1&t=KoLlmse4MCgslkam-1" }],
  },
  {
    title: "VELOURA",
    subtitle: "e-commerce website | 2025",
    desc: "A UI/UX design for VELOURA, an e-commerce website with an elegant, feminine dusty pink and cream color scheme. Built using HTML, JavaScript, and Tailwind CSS, and tested locally with Live Server. Product data is fetched dynamically from an external API (DummyJSON) and rendered using JavaScript. The flow includes a landing page, sign up and login, home page with product categories, product details, shopping cart, order/checkout details, a favorites page, and a user profile page. Each screen is designed consistently to deliver a clean, modern, and easy-to-use shopping experience.",
    images: [
      "/element/veloura1.png",
      "/element/veloura2.png",
    ],
    decor: ICONS.flower,
    layout: "split",
    tilt: "none",
    links: [
      { label: "View Design", href: "https://www.figma.com/design/0vIrBeMz5r9MV8w6BGqHt3/veloura--ddg?node-id=0-1&t=KoLlmse4MCgslkam-1" },
      { label: "View Code", href: "https://github.com/florensia14/Veloura.git" },
    ],
  },
  {
    title: "LITERA",
    subtitle: "Library Website | 2025",
    desc: "A UI/UX design for Litera, a web-based library/book borrowing system with a clean lavender and cream style. Built with Next.js and MySQL, combining frontend and backend logic. Features full CRUD functionality and 3 user roles: admin and staff share the same dashboard access, while students have a separate, limited view. Includes register/login, home page, profile, favorites, role-based dashboards, book details, and data management forms tailored to each role's permissions.",
    images: [
      "/element/litera1.png",
      "/element/litera2.png",
      "/element/litera3.png",
    ],
    decor: null,
    layout: "combined",
    tilt: "none",
    links: [
      { label: "View Design", href: "https://www.figma.com/design/rd03t745lrBBIvSslagoUT/Litera?node-id=67-7&t=KoLlmse4MCgslkam-1" },
      { label: "View Code", href: "https://github.com/florensia14/Litera_libraryWeb.git" },
    ],
  },
  {
    title: "LITERA",
    subtitle: "Library Mobile | 2025",
    desc: "A mobile app prototype for Litera (React Native + TypeScript), with a lavender and cream style. Includes register/login, home, book details, favorites, notifications, and profile with bottom tab navigation and books linking to their favorite/detail pages accordingly.",
    images: [
      "/element/literamob1.png",
      "/element/literamob2.png",
    ],
    decor: ICONS.book,
    layout: "split",
    tilt: "none",
    links: [
      { label: "View Design", href: "https://www.figma.com/design/rd03t745lrBBIvSslagoUT/Litera?node-id=520-3&t=KoLlmse4MCgslkam-1" },
      { label: "View Code", href: "https://github.com/florensia14/Litera_libraryMobile.git" },
    ],
  },
  {
    title: "Lapor.ID",
    subtitle: "Public reporting Website | 2026",
    desc: "A UI/UX design for LAPOR.ID, a public reporting website with a navy and cream style accented by yellow. Built with Next.js, Express.js, and MySQL, the platform lets users create, edit, and delete reports complete with photos and location tagging (via map, manual address input, or current GPS location). It also includes comments, notifications, role-based access, report history, and a user profile page.",
    images: [
      "/element/laporIDweb1.png",
      "/element/laporIDweb2.png",
      "/element/laporIDweb3.png",
    ],
    decor: null,
    layout: "combined",
    tilt: "none",
    links: [
      { label: "View Design", href: "https://www.figma.com/design/qVmT2TQW2qjJXrhEOtKOru/LAPOR.ID?node-id=0-1&t=ueetNUuvPWh4dogj-1" },
      { label: "View Code", href: "https://github.com/florensia14/Lapor.App_Website.git" },
    ],
  },
  {
    title: "Lapor.ID",
    subtitle: "Public reporting Mobile | 2026",
    desc: "A mobile app prototype for LAPOR.ID (React Native/Expo), with a navy and cream style matching the web version. It shares the same core features: creating, editing, and deleting reports with photos and location tagging, comments, notifications, role-based access, report history, and profile — but on mobile, users can capture photos directly with the camera, not just upload from gallery.",
    images: [
      "/element/lapormob1.png",
      "/element/lapormob2.png",
    ],
    decor: ICONS.attention,
    layout: "split",
    tilt: "none",
    links: [
      { label: "View Design", href: "https://www.figma.com/design/qVmT2TQW2qjJXrhEOtKOru/LAPOR.ID?node-id=161-24&t=KoLlmse4MCgslkam-1" },
      { label: "View Code", href: "https://github.com/florensia14/Lapor.App_Website.git" },
    ],
  },
  {
    title: "REELUXE",
    subtitle: "Movie Ticket Booking Website | 2026",
    desc: "Reeluxe is a modern movie ticket booking website UI/UX design concept featuring a clean blue and gold color palette. The design includes a complete user journey, from login and home page to movie details, cinema and showtime selection, interactive seat booking, snack & drinks ordering, and ticket confirmation. Designed with a consistent visual style, Reeluxe focuses on creating an intuitive, engaging, and user-friendly booking experience.",
    images: [
      "/element/reeluxe1.png",
      "/element/reeluxe2.png",
    ],
    decor: null,
    layout: "combined",
    tilt: "none",
    links: [{ label: "View Design", href: "https://www.figma.com/design/9djcekV9F8a6Uwo1HbDL03/Reeluxe?node-id=0-1&t=ZWmAktPUMB7iieM7-1" }],
  },
];

const CONTACTS = [
  {
    icon: ICONS.whatsapp,
    label: "+62 812 8396 5138",
  },
  {
    icon: ICONS.githubb,
    label: "florensia14",
    href: "https://github.com/florensia14",
  },
  {
    icon: ICONS.instagram,
    label: "@onlyyceciliaa_",
    href: "https://www.instagram.com/onlyceciliaa_/",
  },
  {
    icon: ICONS.email,
    label: "florensianainggolan1449@email.com",
    href: "mailto:florensianainggolan1449@email.com",
  },
];

const BUTTERFLY_COLORS = [
  "#DE6495", "#F2C744", "#799FBB", "#F2C744", "#DE6495", "#F2C744", "#799FBB",
];

/* ------------------------------------------------------------------ */
/*  CAROUSEL — panah kiri/kanan buat pindah gambar project             */
/* ------------------------------------------------------------------ */

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      {direction === "right" ? (
        <>
          <path d="M7 4L13 12L7 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M13 4L19 12L13 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </>
      ) : (
        <>
          <path d="M17 4L11 12L17 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M11 4L5 12L11 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
    </svg>
  );
}

function ProjectImageCarousel({
  images,
  alt,
  heightClass,
  roundedClass,
  tiltDeg,
}: {
  images: string[];
  alt: string;
  heightClass: string;
  roundedClass: string;
  tiltDeg: number;
}) {
  const [index, setIndex] = useState(0);
  const hasMultiple = images.length > 1;
  const isFirst = index === 0;
  const isLast = index === images.length - 1;

  return (
    <div className="flex flex-col items-center gap-3">
      {/* Kotak luar: border pink-main aja (tanpa stroke hitam tambahan),
          dipakai di SEMUA project (split maupun combined), berapapun jumlah foto. */}
      <motion.div
        initial={{ opacity: 0, rotate: tiltDeg }}
        whileInView={{ opacity: 1, rotate: tiltDeg }}
        viewport={{ once: false, amount: 0.3 }}
        whileHover={{ rotate: 0, scale: 1.03 }}
        transition={{ duration: 0.5 }}
        className={`relative w-full bg-cream p-3 sm:p-4 ${heightClass} ${roundedClass} border-4 border-pink-main shadow-[0_25px_50px_-8px_rgba(0,0,0,0.4)]`}
      >
        <motion.div
          animate={{ rotate: -tiltDeg }}
          transition={{ duration: 0.5 }}
          className="relative h-full w-full"
        >
          <div className="relative h-full w-full overflow-hidden rounded-md">
            {images.map((src, i) => (
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-300 ${
                  i === index ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  quality={100}
                  sizes="(max-width: 640px) 100vw, 40vw"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tombol panah jadi anak LANGSUNG dari kotak luar (bukan dari div yang
            di-counter-rotate & di dalam padding), jadi posisinya presisi PAS di garis
            pinggir kotak (border line) — left-0 / right-0 + translate -1/2 = pusat
            tombol nempel tepat di garis border, setengah nongol keluar kotak. */}
        {hasMultiple && !isFirst && (
          <button
            type="button"
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            aria-label="Gambar sebelumnya"
            className="absolute left-0 top-1/2 z-20 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-black bg-pink-main shadow-md transition-transform hover:scale-110"
          >
            <ChevronIcon direction="left" />
          </button>
        )}

        {hasMultiple && !isLast && (
          <button
            type="button"
            onClick={() => setIndex((i) => Math.min(images.length - 1, i + 1))}
            aria-label="Gambar selanjutnya"
            className="absolute right-0 top-1/2 z-20 flex h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-black bg-pink-main shadow-md transition-transform hover:scale-110"
          >
            <ChevronIcon direction="right" />
          </button>
        )}
      </motion.div>

      {/* Dot indikator tetap di LUAR kotak gambar (baris terpisah di bawahnya) */}
      {hasMultiple && (
        <div className="flex items-center gap-1.5">
          {images.map((_, i) => (
            <span
              key={i}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-ink" : "w-2 bg-ink/30"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function Home() {
  const [activeHref, setActiveHref] = useState(NAV_LINKS[0].href);

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((link) => link.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="overflow-x-hidden">
      {/* ---------- NAVBAR ---------- */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-blue-deep/90 backdrop-blur-md shadow-xl py-3"
            : "bg-transparent py-4 md:py-6"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-3 gap-y-2 px-4 sm:gap-x-5 md:gap-x-8 md:px-8 lg:gap-x-14">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActiveHref(link.href)}
              className={`group relative whitespace-nowrap text-[11px] font-semibold tracking-[0.05em] text-paper transition-all duration-300 hover:scale-105 sm:text-xs sm:tracking-[0.06em] md:text-sm md:tracking-[0.08em] ${
                activeHref === link.href ? "text-white" : "opacity-90"
              }`}
            >
              {link.label}

              <span
                className={`absolute -bottom-1.5 left-1/2 h-[2px] rounded-full bg-[#F8DF44] transition-all duration-300 md:-bottom-2 md:h-[3px] ${
                  activeHref === link.href
                    ? "w-full -translate-x-1/2"
                    : "w-0 -translate-x-1/2 group-hover:w-full"
                }`}
              />
            </a>
          ))}
        </div>
      </nav>

      {/* ---------- HERO ---------- */}
      <section
        id="home"
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-pink-main px-6 pt-28 pb-16 text-center text-paper"
      >
        {/* Sparkle — smaller, tucked near the title's top-left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="absolute left-6 top-20 sm:left-10 sm:top-14 md:left-16 md:top-16"
        >
          <Image
            src={ICONS.sparkleBlue}
            alt=""
            width={48}
            height={48}
            className="w-7 sm:w-9 md:w-12 animate-spin [animation-duration:10s]"
          />
        </motion.div>

        {/* Butterfly — bigger, bleeding off the right edge near the top */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -8, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            y: {
              repeat: Infinity,
              duration: 4,
            },
            rotate: {
              repeat: Infinity,
              duration: 4,
            },
          }}
          className="absolute -right-4 top-4 sm:-right-6 sm:top-6 md:-right-8 md:top-8"
        >
          <Image
            src={ICONS.butterflyPink}
            alt=""
            width={140}
            height={140}
            className="w-20 sm:w-28 md:w-[140px]"
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          suppressHydrationWarning
          className="text-5xl font-extrabold tracking-[0.18em] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
        >
          PORTFOLIO
        </motion.h1>

        {/* Name */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.25,
            duration: 0.7,
          }}
          suppressHydrationWarning
          className="mt-2 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Florensia
        </motion.p>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.45,
            duration: 0.7,
          }}
          className="mt-7"
        >
          <span
            suppressHydrationWarning
            className="rounded-full bg-cream px-6 py-3 text-xs font-semibold text-ink shadow-xl sm:px-8 sm:text-sm md:px-10 md:text-base"
          >
            Software Engineering Student
          </span>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
          }}
          className="absolute bottom-8 flex flex-col items-center"
        >
          <span className="mb-2 text-[11px] tracking-[0.3em] text-paper/80">
            SCROLL
          </span>

          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 9L12 15L18 9"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </section>

      {/* ---------- ABOUT ---------- */}
      <section id="about" className="relative bg-cream px-6 py-20">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
          {/* Foto + sticker */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto w-full max-w-xs"
          >
            {/* OMG sticker — larger, overlapping the photo's top-left corner more */}
            <motion.div
              whileHover={{ rotate: 0, scale: 1.05 }}
              className="sticker-tilt absolute -left-8 -top-8 z-10"
            >
              <Image src={ICONS.omg} alt="OMG!" width={110} height={74} />
            </motion.div>
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border-4 border-pink-main bg-paper/60">
              <Image src={ICONS.cv} alt="Foto profil" fill className="object-cover" />
              <div className="absolute inset-x-4 bottom-4 rounded-lg bg-pink-main py-2 text-center text-sm font-semibold text-paper">
                Florensia Gaciela Nainggolan
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <h2 className="font-display mb-4 text-5xl">
              <span className="text-pink-main">About</span>{" "}
              <span className="text-blue-main">me</span>
            </h2>
            <div className="rounded-2xl bg-pink-main p-6 text-paper shadow-md">
              <p className="text-sm leading-relaxed text-justify sm:text-base">
                My name is Florensia Gaciela Nainggolan, a Software
                Engineering student at Taruna Bhakti Vocational School,
                Depok, specializing in web and mobile development.
                Passionate about front-end development and building
                user-friendly applications using JavaScript, Node.js,
                Express.js, Tailwind CSS, React Native, and MySQL. Committed
                to continuous learning and quickly adopting new technologies
                to improve code quality and user experience.
              </p>
            </div>
            {/* Flower — larger, breaking further out of the card's bottom-right */}
            <span className="pointer-events-none absolute -bottom-10 -right-8 z-10">
              <Image src={ICONS.flower} alt="" width={80} height={80} />
            </span>
          </motion.div>
        </div>
      </section>

      {/* ---------- GOALS & INTERESTS ---------- */}
      <section
        id="goals"
        className="relative flex min-h-[80vh] items-center bg-blue-main bg-cover bg-center bg-no-repeat px-6 py-24 text-paper"
        style={{ backgroundImage: `url(${ICONS.denim})` }}
      >
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 flex items-center justify-center gap-3">
            <h2 className="text-2xl font-bold tracking-wide underline decoration-solid decoration-2 underline-offset-8 decoration-[#F8DF44] sm:text-3xl">
              Goals &amp; Interests
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-center text-base font-bold leading-loose sm:text-lg">
              My reason for choosing Software Engineering (RPL) as my major is
              to learn the software development process, from design and
              development to testing. I want to build my technical skills and
              strengthen my understanding of programming logic so I can apply
              them in real-world work environments.
            </p>
            <p className="text-center text-base font-bold leading-loose sm:text-lg">
              My interests are focused on website and application development
              and design, particularly in creating interfaces that are clean,
              functional, and easy to use. I&apos;m eager to learn new
              technologies and sharpen my skills in order to build
              applications that are useful and meet users&apos; needs.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- SKILLS ---------- */}
      <section
        id="skills"
        className="relative border-2 border-black bg-pink-soft px-6 pb-8 pt-15"
      >
        {/* badge nyangkut di antara denim & pink */}
        <div
          className="absolute left-1/2 top-0 w-fit -translate-x-1/2 -translate-y-1/2 rounded-lg border-2 border-black px-10 py-3 shadow-md"
          style={{ backgroundColor: "#ABD3F0" }}
        >
          <h2 className="text-center text-2xl font-extrabold text-pink-main sm:text-3xl">
            Skill&apos;s
          </h2>
        </div>

        {/* decorative stars kiri-kanan */}
        <div className="pointer-events-none absolute -left-14 top-1/3 opacity-100">
          <Image src={ICONS.starBlue} alt="" width={170} height={170} />
        </div>
        <div className="pointer-events-none absolute -right-14 top-1/4 opacity-100">
          <Image src={ICONS.starBlue} alt="" width={170} height={170} />
        </div>

        <div className="relative mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-x-8 gap-y-6 sm:gap-x-14 lg:grid-cols-3">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.4, delay: (i % 8) * 0.05 }}
              whileHover={{ y: -4, rotate: i % 2 === 0 ? -2 : 2 }}
              className="flex items-center gap-3 rounded-lg bg-cream px-4 py-3 text-sm font-bold text-ink shadow-sm sm:gap-6 sm:text-lg"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center sm:h-10 sm:w-10">
                <Image src={skill.icon} alt="" width={36} height={36} />
              </span>
              {skill.name}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------- BUTTERFLY DIVIDER (animated) ---------- */}
      <div className="flex w-full items-center justify-between gap-2 overflow-hidden bg-cream px-4 py-8 sm:px-8 sm:py-10">
        {BUTTERFLY_COLORS.map((_, i) => (
          <motion.span
            key={i}
            animate={{
              y: [0, -14, 0],
              rotate: i % 2 === 0 ? [0, 8, -8, 0] : [0, -8, 8, 0],
            }}
            transition={{
              duration: 1.8 + (i % 3) * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
            className="inline-block shrink-0"
          >
            <Image
              src={i % 2 === 0 ? ICONS.butterflyPink : ICONS.butterflyYellow}
              alt=""
              width={80}
              height={80}
              className="h-auto w-14 sm:w-20"
            />
          </motion.span>
        ))}
      </div>

      {/* ---------- PROJECTS ---------- */}
      <section id="projects" className="relative bg-blue-deep px-6 py-16">
        {/* ---------- SECTION TITLE ---------- */}
        <div className="relative mb-16 flex items-center justify-center">
          {/* Dashed Line */}
          <div className="absolute left-1/2 top-1/2 h-0 w-screen -translate-x-1/2 -translate-y-1/2 border-t-2 border-dashed border-black/70 sm:border-t-[3px]" />

          {/* Title */}
          <div className="relative rounded-2xl border-[2px] border-black bg-pink-soft px-14 py-3 shadow-[6px_6px_0_rgba(0,0,0,.18)]">
            <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
              Project&apos;s
            </h2>
          </div>
        </div>

        <div className="mx-auto flex max-w-5xl flex-col gap-16">
          {PROJECTS.map((project) => {
            const imageOnLeft = project.tilt !== "right";
            const tiltDeg =
              project.tilt === "left" ? -3 : project.tilt === "right" ? 3 : 0;

            const linkButtons = (
              <div className="flex flex-wrap gap-3">
                {project.links.map(({ label, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.96 }}
                    className="cursor-pointer rounded-full bg-pink-main px-5 py-2 text-sm font-semibold text-paper shadow-sm transition-colors hover:bg-[#c94f80]"
                  >
                    {label}
                  </motion.a>
                ))}
              </div>
            );

            /* ===== LAYOUT "SPLIT": dua kotak terpisah, gambar kecil + tilt + border pink+hitam ===== */
            if (project.layout === "split") {
              return (
                <div
                  key={`${project.title}-${project.subtitle}`}
                  className="grid gap-8 sm:grid-cols-2 sm:items-start"
                >
                  <div className={`flex ${imageOnLeft ? "sm:order-1" : "sm:order-2"}`}>
                    <div className="w-full">
                      <ProjectImageCarousel
                        images={project.images}
                        alt={project.title}
                        heightClass="h-[360px] sm:h-[460px]"
                        roundedClass="rounded-xl"
                        tiltDeg={tiltDeg}
                      />
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                    className={`relative flex min-h-[360px] flex-col justify-center rounded-2xl bg-cream p-6 shadow-md sm:min-h-[460px] sm:p-8 ${
                      imageOnLeft ? "sm:order-2" : "sm:order-1"
                    }`}
                  >
                    <h3 className="text-lg font-extrabold text-ink sm:text-xl">
                      {project.title}
                    </h3>
                    <p className="mb-3 text-sm font-semibold text-pink-main sm:text-base">
                      {project.subtitle}
                    </p>
                    <p className="mb-5 text-justify text-sm font-semibold leading-relaxed text-ink/80">
                      {project.desc}
                    </p>
                    {linkButtons}
                    {project.decor && (
                      <span className="pointer-events-none absolute bottom-4 right-4">
                        <Image
                          src={project.decor}
                          alt=""
                          width={60}
                          height={60}
                          className="h-auto w-10 sm:w-16"
                        />
                      </span>
                    )}
                  </motion.div>
                </div>
              );
            }

            /* ===== LAYOUT "COMBINED": satu card gabungan, gambar kecil dengan border pink+hitam juga ===== */
            return (
              <motion.div
                key={`${project.title}-${project.subtitle}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="relative rounded-2xl bg-cream p-6 shadow-md sm:p-8"
              >
                <div className="grid gap-6 sm:grid-cols-2 sm:items-center">
                  <div className={imageOnLeft ? "sm:order-2" : "sm:order-1"}>
                    <ProjectImageCarousel
                      images={project.images}
                      alt={project.title}
                      heightClass="h-[260px] sm:h-[320px]"
                      roundedClass="rounded-lg"
                      tiltDeg={0}
                    />
                  </div>
                  <div className={imageOnLeft ? "sm:order-1" : "sm:order-2"}>
                    <h3 className="text-lg font-extrabold text-ink sm:text-xl">
                      {project.title}
                    </h3>
                    <p className="mb-3 text-sm font-semibold text-pink-main sm:text-base">
                      {project.subtitle}
                    </p>
                    <p className="mb-5 text-justify text-sm font-semibold leading-relaxed text-ink/80">
                      {project.desc}
                    </p>
                    {linkButtons}
                  </div>
                </div>

                {project.decor && (
                  <span className="pointer-events-none absolute -top-4 -right-4">
                    <Image src={project.decor} alt="" width={45} height={45} />
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ---------- CONTACT ---------- */}
      <section
        id="contact"
        className="relative overflow-hidden bg-cover bg-center py-20"
        style={{ backgroundImage: `url(${ICONS.tulip})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0" />

        <div className="relative z-10 mx-auto max-w-4xl px-6">
          {/* Title */}
          <div className="relative mb-16 flex items-center justify-center">
            <div className="absolute left-1/2 top-1/2 h-0 w-screen -translate-x-1/2 -translate-y-1/2 border-t-2 border-dashed border-black/70 sm:border-t-[3px]" />

            <div className="relative rounded-2xl border-[2px] border-black bg-pink-soft px-14 py-3 shadow-[6px_6px_0_rgba(0,0,0,.18)]">
              <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
                Contact Me !!
              </h2>
            </div>
          </div>

          {/* Contact list.
              PENTING: parent tiap item pakai `flex-col items-center` di mobile.
              Karena align-items bukan `stretch`, anaknya otomatis nyusut sesuai
              konten (bukan lebar container) — jadi label yang panjang (email)
              nggak tau kapan harus wrap dan malah nembus keluar layar.
              Fix: kasih `w-full min-w-0` di container + `w-full max-w-full break-words`
              di span labelnya, supaya dia dipaksa ikut lebar grid cell. */}
          <div className="mx-auto grid max-w-2xl grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-12 sm:gap-y-10">
            {CONTACTS.map((contact) => {
              const iconBox = (
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 sm:h-14 sm:w-14">
                  <Image
                    src={contact.icon}
                    alt=""
                    width={26}
                    height={26}
                    className="sm:h-[34px] sm:w-[34px]"
                  />
                </div>
              );

              const label = (
                <span className="w-full max-w-full break-words text-center text-[11px] leading-snug font-bold text-white sm:text-left sm:text-lg">
                  {contact.label}
                </span>
              );

              const sharedClasses =
                "flex h-auto w-full min-w-0 flex-col items-center justify-center gap-1.5 py-2 text-center sm:h-28 sm:flex-row sm:justify-start sm:gap-5 sm:text-left";

              return contact.href ? (
                <a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={sharedClasses}
                >
                  {iconBox}
                  {label}
                </a>
              ) : (
                <div key={contact.label} className={sharedClasses}>
                  {iconBox}
                  {label}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}