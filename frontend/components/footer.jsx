import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

/* ===================== DATA ===================== */

const socials = [
  { name: "GitHub", href: "https://github.com/brad-emery" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/brad-emery-75692b1b4" },
  { name: "Twitter", href: "https://twitter.com/BradEmery99" },
  { name: "Instagram", href: "https://www.instagram.com/brad.emery99" }
];

/* ===================== COMPONENTS ===================== */

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 */
const SectionTitle = ({ children }) => (
  <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-600">
    {children}
  </span>
);

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {number} [props.delay=0]
 */
const FadeIn = ({
  children,
  delay = 0
}) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

/* ===================== MAIN ===================== */

export default function Footer() {
  const { t } = useTranslation();

  const navLinks = [
    { label: t('Home'), href: "#" },
    { label: t('About'), href: "#about" },
    { label: t('Work'), href: "#project" },
    { label: t('Journey'), href: "#roadmap" }
  ];

  return (
    <footer className="bg-[#050505] border-t border-white/5" style={{ padding: '30px 0' }}>

      {/* ================= CTA ================= */}
      <section className="px-8 py-32 md:py-48 border-t border-white/10" style={{ padding: '50px 50px' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-orange-400 text-sm font-mono uppercase tracking-[0.3em]">
              {t('footer.cta.availability')}
            </p>
            <h2 className="text-4xl md:text-6xl font-medium text-white tracking-tighter">
              {t('footer.cta.title')}{" "}
              <span className="text-orange-600 italic">{t('footer.cta.titleHighlight')}</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <motion.a
                href="https://wa.me/671810319?text=Hi%20Brad%2C%20I%20saw%20your%20portfolio%20and%20I%27m%20interested%20in%20working%20with%20you%20on%20a%20project."
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-orange-500 text-black font-semibold  text-sm uppercase tracking-wider hover:bg-orange-400 transition-colors inline-block"
                style={{ paddingLeft: '15px', paddingRight: '15px', textDecoration: 'none' }}
              >
                {t('footer.cta.startProject')}
              </motion.a>
              <motion.a
                href="tel:+671810319"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-white/30 text-white font-semibold text-sm uppercase tracking-wider hover:bg-white/10 transition-colors inline-block"
                style={{ paddingLeft: '15px', paddingRight: '15px', textDecoration: 'none' }}
              >
                {t('footer.cta.scheduleCall')}
              </motion.a>
            </div>
            <div className="pt-6 text-sm text-neutral-400">
              <a href="mailto:emerybrad4@gmail.com" className="text-orange-400 transition hover:text-orange-300" style={{ textDecoration: 'none' }}>
                emerybrad4@gmail.com
              </a>
              <span className="mx-3 text-neutral-600">/</span>
              <a href="https://wa.me/671810319" target="_blank" rel="noreferrer" className="text-orange-400 transition hover:text-orange-300" style={{ textDecoration: 'none' }}>
                +671 810 319
              </a>
            </div>
          </motion.div>
        </div>
      </section>
     

      {/* ================= MAIN FOOTER ================= */}
      <section className="px-6 py-24 md:py-32 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-6">
            <FadeIn>
              <h3 className="text-2xl text-white">
                Brad<span className="text-orange-400">.</span>
              </h3>
              <p className="text-neutral-500 text-sm mt-5 max-w-sm">
                {t('footer.brand.description')}
              </p>
            </FadeIn>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <FadeIn delay={0.1}>
              <SectionTitle>{t('footer.explore')}</SectionTitle>
              <div className="flex flex-col gap-3 mt-5">
                {navLinks.map((link) => (
                  <a key={link.label} href={link.href} className="text-white text-sm transition no-underline" style={{textDecoration: 'none'}}>
                    {link.label}
                  </a>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Socials */}
          <div className="md:col-span-3">
            <FadeIn delay={0.2}>
              <SectionTitle>{t('footer.connect')}</SectionTitle>
              <div className="flex flex-col gap-3 mt-5">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 text-white text-sm transition no-underline"
                    style={{textDecoration: 'none'}}
                  >
                    {social.name}
                    <svg
                      className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ================= BOTTOM ================= */}
      <section className="px-6 py-6 border-t border-white/5 mt-16 md:mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-neutral-500">

          <p>© {new Date().getFullYear()} Brad Emery</p>

          <p className="flex items-center gap-1">
            Designed & built with
            <span className="text-orange-400">✦</span>
            <span className="text-orange-400">intention</span>
          </p>

        </div>
      </section>

    </footer>
  );
}