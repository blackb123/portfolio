import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

export default function ElegantSkills() {
  const { t } = useTranslation();
  const groups = t('skills.groups', { returnObjects: true }) || [];

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-black text-white border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <p className="text-[10px] uppercase tracking-[0.5em] text-orange-500 mb-4">
            {t('skills.label')}
          </p>
          <h2 className="text-5xl md:text-8xl font-light tracking-tighter leading-[0.8]">
            {t('skills.headline')} <span className="opacity-30 italic">{t('skills.headlineHighlight')}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
          {groups.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <p className="text-neutral-700 text-[10px] uppercase tracking-[0.4em] mb-8 border-b border-neutral-900 pb-3">
                {cat.category}
              </p>

              {cat.items.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="group flex items-baseline justify-between py-7 border-b border-neutral-900 hover:border-white transition-colors duration-700"
                >
                  <div className="flex items-baseline gap-5">
                    <span className="text-[10px] font-mono text-neutral-600 group-hover:text-white transition-colors">
                      {skill.level}
                    </span>
                    <h3 className="text-2xl md:text-4xl font-light tracking-tight group-hover:italic transition-all">
                      {skill.name}
                    </h3>
                  </div>
                  <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity text-[10px] uppercase tracking-[0.4em] text-neutral-500">
                    {t('skills.liveTag')}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
