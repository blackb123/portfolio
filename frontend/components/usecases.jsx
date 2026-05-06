import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

export default function UseCases() {
  const { t } = useTranslation();
  const useCasesData = t('useCases.items', { returnObjects: true });
  const useCases = Array.isArray(useCasesData) ? useCasesData : [];

  return (
    <motion.section
      id="usecases"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-[#0a0a0a] border-t border-white/5 w-full overflow-hidden"
      style={{ padding: '30px 0' }}
    >
      <div className="px-6 md:px-8 py-32 md:py-48 min-h-[80vh] flex items-center w-full">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 w-full">
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
                // {t('useCases.label')}
              </span>
              <div className="h-px w-12 bg-neutral-800 hidden md:block"></div>
            </div>
          </motion.div>

          {/* Main Content - Stacked Layout */}
          <div className="md:col-span-10 space-y-8">
            {/* Giant Number */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-[20vw] md:text-[10rem] font-bold leading-none text-neutral-800 tracking-tighter select-none"
            >
              {t('useCases.number')}
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-5xl font-medium leading-[1.1] tracking-tighter text-white">
                {t('useCases.title')}{" "}
                <span className="text-orange-600 italic">{t('useCases.titleHighlight')}</span>
              </h3>
            </motion.div>

            {/* Use Cases List */}
            <div className="space-y-2 pt-4">
              {useCases.map((useCase, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 py-2 rounded-lg hover:bg-white/5 transition-all duration-300 group"
                >
                  <span className="text-orange-500 text-xs font-mono opacity-60 group-hover:opacity-100 transition-opacity flex-shrink-0">
                    ✔
                  </span>
                  <span className="text-white/90 group-hover:text-white font-medium tracking-tight group-hover:translate-x-1 transition-transform text-sm md:text-base">
                    {useCase}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <p className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-2xl">
                {t('useCases.cta')}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
