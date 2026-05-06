import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

export default function ElegantNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "01", name: t('nav.work'), href: "#project" },
    { id: "02", name: t('nav.about'), href: "#about" },
    { id: "03", name: t('nav.journey'), href: "#roadmap" },
    { id: "04", name: t('nav.home'), href: "#" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
        className={`fixed top-0 left-0 z-50 w-[100vw] transition-all duration-700 ${
          scrolled ? "py-2 md:py-3 bg-black/90 backdrop-blur-lg " : "py-1 md:py-2 bg-transparent"
        }`}
      >
        <div className="w-full mx-auto flex justify-between items-center px-6" style={{padding:"0px 30px"}}>

          {/* Brand - Professional Logo Style */}
          <a href="#" className="group flex items-center gap-3 !no-underline" style={{ textDecoration: 'none' }}>
            {/* Logo Mark */}
            <div className="relative w-10 h-10 flex items-center justify-center border border-white/20 rounded-sm group-hover:border-orange-500/50 transition-colors duration-500">
              <span className="text-sm font-bold tracking-tight text-white">BE</span>
              <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm" />
            </div>
            {/* Logo Wordmark */}
            <div className="flex flex-col leading-none">
              <span className="text-lg font-semibold tracking-[0.15em] text-white uppercase !no-underline" style={{ textDecoration: 'none' }}>Brad</span>
              <span className="text-[10px] font-light tracking-[0.4em] text-neutral-500 uppercase !no-underline" style={{ textDecoration: 'none' }}>Emery</span>
            </div>
          </a>

          {/* Desktop Links - Minimalist & Spaced */}
          <ul className="hidden md:flex gap-4 lg:gap-6 items-center" style={{ margin: 0,textDecoration: 'none' }}>
            {navLinks.map((link) => (
              <li key={link.id} className="group relative">
                <a href={link.href} className="flex items-start gap-2" style={{ textDecoration: 'none' }}>
                  <span className="text-[9px] font-mono text-neutral-600 group-hover:text-red transition-colors">
                    {link.id}
                  </span>
                  <span className="text-xs uppercase tracking-[0.4em] text-neutral-400 group-hover:text-white group-hover:italic transition-all duration-500">
                    {link.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {/* Right Side: Language Switcher + Mobile Menu */}
          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>
            {/* Mobile Trigger - Minimalist Lines */}
            <button 
              onClick={() => setIsOpen(true)}
              className="md:hidden flex flex-col gap-2 group p-2"
            >
              <span className="w-8 h-[1px] bg-white group-hover:w-4 transition-all" />
              <span className="w-4 h-[1px] bg-white group-hover:w-8 transition-all" />
            </button>
          </div>

        </div>
      </motion.nav>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="fixed inset-0 z-[60] bg-black px-12 py-24 flex flex-col justify-between"
          >
            <div className="flex justify-between items-start">
              <p className="text-[10px] uppercase tracking-[0.5em] text-neutral-600">{t('language.switch')}</p>
              <div className="flex items-center gap-4">
                <LanguageSwitcher />
                <button onClick={() => setIsOpen(false)} className="text-xs uppercase tracking-widest text-white">
                  Close //
                </button>
              </div>
            </div>

            <nav className="flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center gap-6 py-6 border-b border-neutral-900"
                >
                  <span className="text-xs font-mono text-neutral-600">{link.id}</span>
                  <span className="text-6xl font-light tracking-tighter text-white group-hover:italic group-hover:opacity-50 transition-all">
                    {link.name}
                  </span>
                </a>
              ))}
            </nav>

            <div className="text-neutral-700 text-[10px] uppercase tracking-[0.4em]">
              © 2026 Brad Emery — Douala
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}