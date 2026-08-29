import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { heroimg } from "../src/assets/img"
import heroimgmobile from "../src/assets/heroimgmobile.png"

export default function Hero() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(max-width: 767px)").matches;
  });
  const [scrollProgress, setScrollProgress] = useState(0);
  const { t } = useTranslation();

  const sectorItems = [
    "Freight & Logistics",
    "Clinics & Health",
    "Transport & Mobility",
    "Restaurants & Food",
    "Retail & Commerce",
    "Hotels & Hospitality",
    "Manufacturing",
    "Construction",
    "Field Services",
    "Education",
    "Real Estate",
    "B2B Operations"
  ];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const handleResize = (event) => {
      setIsMobile(event.matches);
    };

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleResize);
    } else {
      mediaQuery.addListener(handleResize);
    }

    setIsMobile(mediaQuery.matches);

    return () => {
      if (typeof mediaQuery.removeEventListener === "function") {
        mediaQuery.removeEventListener("change", handleResize);
      } else {
        mediaQuery.removeListener(handleResize);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = heroRef.current;
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        const heroHeight = rect.height;
        const scrolled = -rect.top;
        const progress = Math.min(Math.max(scrolled / (heroHeight * 0.6), 0), 1);
        setScrollProgress(progress);
      }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section ref={containerRef} className="relative w-full">
      {/* ========== 1. FULL BACKGROUND HERO SECTION ========== */}
      <div
        ref={heroRef}
        className="relative min-h-[100vh] w-full z-0 flex flex-col items-center bg-cover bg-top md:bg-center justify-center overflow-hidden"
        style={{ backgroundImage: `url(${isMobile ? heroimgmobile : heroimg})` }}
      >
        {/* Dark Overlay with Welcome Text */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ 
            backgroundColor: `rgba(0, 0, 0, ${scrollProgress * 1.4})`,
            opacity: scrollProgress > 0 ? 1 : 0
          }}
        >
          <motion.h1
            className="text-[2rem] md:text-[12] font-bold text-white tracking-tighter"
            style={{ 
              opacity: scrollProgress,
              fontSize: `${isMobile ? 2 + scrollProgress * 6 : 10 + scrollProgress * 10}rem`,
              marginTop: '50px',
              paddingTop: '60px'
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: 0.8 + (scrollProgress * 0.2),
              opacity: scrollProgress
            }}
            transition={{ duration: 0.1 }}
          >
            {t('hero.welcome')}
          </motion.h1>
        </motion.div>
     
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2  -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        >
          <p className="text-[10px] uppercase tracking-widest text-white/50">{t('hero.scroll')}</p>
          <div className="w-[1px] h-12 bg-gradient-to-b from-lime-400 to-transparent" />
        </motion.div>

        {/* Social Icons (Mobile) – now with inline SVGs */}
          <motion.div
            className="absolute bottom-8 left-4 sm:left-6 z-50"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex flex-col items-center gap-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/brad.emery99"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-500 transition"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/brad-emery-75692b1b4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-500 transition"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/brad-emery"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-500 transition"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="https://twitter.com/BradEmery99"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-500 transition"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </motion.div>
      </div>

      <div className="relative border-y border-white/10 bg-[#0b0b0b] overflow-hidden">
        <div className="sector-marquee px-3 py-2 md:py-3">
          {[...sectorItems, ...sectorItems].map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="sector-pill"
            >
              <span className="sector-diamond">◆</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ========== 2. INTRO SECTION (Dark Background) ========== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-[#0a0a0a] px-8 py-32 md:py-64 min-h-[80vh] flex items-center text-white border-t border-white/5 mt-16 md:mt-24"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
          {/* Sidebar Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="sticky top-10 flex flex-col gap-2">
              <span className="text-orange-500 font-bold text-xs uppercase tracking-[0.3em]">
                // Intro
              </span>
              <div className="h-px w-12 bg-neutral-800 hidden md:block"></div>
            </div>
          </motion.div>

          {/* Main Statement */}
          <div className="md:col-span-10 flex flex-col justify-between">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-medium leading-[1] tracking-tighter"
            >
              I’m a versatile{" "}
              <span className="text-orange-600 italic">Full stack developer</span>{" "}
              who partners with founders to turn ideas into{" "}
              <span className="text-white underline decoration-neutral-800 underline-offset-8">
                real products
              </span>
              . I focus on{" "}
              <span className="text-neutral-500">
                clear interfaces, sharp decisions, and fast execution.
              </span>
            </motion.h3>

            {/* Footer Content of the Intro */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-32 flex flex-col md:flex-row justify-between items-start md:items-end gap-16"
            >
              <div className="max-w-xl space-y-6">
                <p className="text-neutral-400 text-lg md:text-xl leading-relaxed font-light">
                  Bringing your vision to life quickly and efficiently—whether
                  it’s branding, apps, or websites—we got it covered,
                  delivering smooth and effective solutions from start to
                  finish.
                </p>
                <div className="flex gap-4 text-xs font-mono text-neutral-600">
                  <span>Branding</span> <span>/</span>
                  <span>Websites</span> <span>/</span>
                  <span>Apps</span>
                </div>
              </div>

              {/* Cinematic "See my Work" Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group relative px-12 py-6 border border-neutral-800 rounded-full text-xs uppercase tracking-widest overflow-hidden transition-all"
                style={{padding:"10px 10px"}}
              >
                <span className="relative z-10 group-hover:text-black transition-colors duration-500" >
                  See my Work
                </span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* ========== 3. WORK SECTION (Services) ========== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-[#0a0a0a] px-8 py-32 md:py-48 border-t border-white/5 mt-24 md:mt-32"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
          {/* Sidebar Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="sticky top-10 flex flex-col gap-2">
              <span className="text-orange-500 font-bold text-xs uppercase tracking-[0.3em]">
                // Work
              </span>
              <div className="h-px w-12 bg-neutral-800 hidden md:block"></div>
            </div>
          </motion.div>

          {/* Service Item */}
          <div className="md:col-span-10">
            <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
              {/* Giant Number */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-[15vw] md:text-[12rem] font-bold leading-none text-neutral-800 tracking-tighter select-none"
              >
                01
              </motion.div>

              <div className="flex-1 space-y-8">
                {/* Title & Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-5xl md:text-7xl font-medium leading-[1.1] tracking-tighter text-white">
                    Branding & Marketing
                  </h3>
                  <p className="mt-6 text-lg md:text-2xl text-neutral-400 font-light leading-relaxed max-w-2xl">
                    Branding that builds trust and drives loyalty through clear
                    visuals and messaging, into an unforgettable online
                    experience.
                  </p>
                </motion.div>

                {/* Service List */}
                <motion.ul
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="space-y-1 text-base md:text-lg"
                >
                  {[
                    { name: "Brand Strategy and Messaging", icon: "◎" },
                    { name: "Logo Design", icon: "◉" },
                    { name: "Visual Identity", icon: "◈" },
                    { name: "Brand Guidelines & Frameworks", icon: "◆" },
                    { name: "Marketing materials", icon: "◇" },
                    { name: "Motion Design", icon: "⟲" }
                  ].map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + idx * 0.08 }}
                      viewport={{ once: true }}
                      className="group flex items-center gap-4 py-3 px-4 -mx-4 rounded-lg hover:bg-white/5 transition-all duration-300 cursor-default"
                    >
                      <span className="text-orange-500 text-sm font-mono opacity-60 group-hover:opacity-100 transition-opacity">
                        {item.icon}
                      </span>
                      <span className="text-white/90 group-hover:text-white font-medium tracking-tight group-hover:translate-x-1 transition-transform">
                        {item.name}
                      </span>
                      <span className="ml-auto text-[10px] font-mono text-neutral-600 group-hover:text-orange-500/60 transition-colors">
                        0{idx + 1}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}