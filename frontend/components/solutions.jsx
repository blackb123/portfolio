import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

export default function Solutions() {
  const { t } = useTranslation();

  // Get solutions from translations
  const solutionsData = t('solutions.items', { returnObjects: true });
  const solutions = Array.isArray(solutionsData) ? solutionsData : [];

  // Icons for each solution (visual elements, not translated)
  const icons = ["◎", "◉", "◈", "◆", "◇", "◈", "◈", "◈"];

  return (
    <motion.section
      id="solutions"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-[#0a0a0a] border-t border-white/5"
      style={{ padding: '30px 0' }}
    >
      <div className="px-8 py-32 md:py-48 min-h-[80vh] flex items-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 w-full">
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
                // {t('solutions.label')}
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
                {t('solutions.number')}
              </motion.div>

              <div className="flex-1 space-y-12">
                {/* Main Statement */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-4xl md:text-6xl font-medium leading-[1.1] tracking-tighter text-white">
                    {t('solutions.title')}{" "}
                    <span className="text-orange-600 italic">{t('solutions.titleHighlight')}</span>
                  </h3>
                </motion.div>

                {/* Solutions Grid */}
                <div className="space-y-8">
                  {solutions.map((solution, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                      viewport={{ once: true }}
                      className="group rounded-xl shadow-md p-6 md:p-8 hover:shadow-lg active:bg-red-500/10 transition-all duration-300 cursor-pointer"
                      style={{ padding: '20px', marginBottom: '20px' }}
                    >
                      <div className="flex items-start gap-4 pb-4 border-b border-neutral-800/50">
                        <span className="text-orange-500 text-sm font-mono opacity-60 group-hover:opacity-100 transition-opacity">
                          {icons[idx] || "◎"}
                        </span>
                        <div className="flex-1">
                          <h4 className="text-xl md:text-2xl font-medium text-white mb-2">
                            {solution.title}
                          </h4>
                          <p className="text-neutral-400 text-sm md:text-base mb-4">
                            {solution.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {solution.items.map((item, itemIdx) => (
                          <span
                            key={itemIdx}
                            className="text-xs font-mono text-neutral-500 bg-neutral-900/50 px-3 py-1 rounded-full"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
