import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

export default function MobileApp() {
  const { t } = useTranslation();

  const features = t('mobileApp.features', { returnObjects: true }) || [];
  const capabilities = t('mobileApp.capabilities', { returnObjects: true }) || [];

  return (
    <motion.section
      id="mobile-app"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-[#0a0a0a] border-t border-white/10"
    >
      <div className="px-6 md:px-8 py-32 md:py-48 min-h-[80vh] flex items-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 w-full">
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
                {t('mobileApp.label')}
              </span>
              <div className="h-px w-12 bg-neutral-800 hidden md:block"></div>
            </div>
          </motion.div>

          {/* Main Content */}
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
                {t('mobileApp.number')}
              </motion.div>

              <div className="flex-1 space-y-12">
                {/* Title */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-4xl md:text-6xl font-medium leading-[1.1] tracking-tighter text-white">
                    {t('mobileApp.title')}{" "}
                    <span className="text-orange-600 italic">{t('mobileApp.titleHighlight')}</span>
                  </h3>
                  <p className="mt-6 text-lg md:text-xl text-neutral-400 font-light leading-relaxed max-w-2xl">
                    {t('mobileApp.description')}
                  </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + idx * 0.08 }}
                      viewport={{ once: true }}
                      className="group rounded-xl border border-white/5 bg-white/[0.02] p-6 hover:border-orange-500/30 hover:bg-white/[0.04] transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-start gap-4">
                        <span className="text-orange-500 text-sm font-mono opacity-60 group-hover:opacity-100 transition-opacity mt-1">
                          {["▢", "▣", "◈", "◆", "◇", "⬡"][idx] || "◆"}
                        </span>
                        <div>
                          <h4 className="text-lg font-medium text-white mb-1 group-hover:text-orange-400 transition-colors">
                            {feature.title}
                          </h4>
                          <p className="text-neutral-400 text-sm leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Capabilities Tags */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-600 mb-4">
                    {t('mobileApp.stackLabel')}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {capabilities.map((cap, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        viewport={{ once: true }}
                        className="px-4 py-2 border border-neutral-800 rounded-full text-sm text-neutral-400 hover:border-orange-500/50 hover:text-orange-500 transition-colors"
                      >
                        {cap}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <a
                    href="https://wa.me/671810319?text=Hi%20Brad%2C%20I%20want%20to%20discuss%20a%20mobile%20app%20project."
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-widest text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-all duration-300 hover:scale-105"
                  >
                    {t('mobileApp.cta')}
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
