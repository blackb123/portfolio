import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  const skills = [
    "HTML5 / CSS3",
    "JavaScript (ES6+)",
    "React & Vite",
    "Bootstrap 5",
    "Framer Motion",
    "Node.js",
    "REST APIs",
    "Git"
  ];

  const details = [
    { label: t('about.details.email'), value: t('about.details.emailValue') },
    { label: t('about.details.location'), value: t('about.details.locationValue') },
    { label: t('about.details.experience'), value: t('about.details.experienceValue') },
    { label: t('about.details.focus'), value: t('about.details.focusValue') }
  ];

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-[#0a0a0a] border-t border-white/5"
      style={{ padding: '20px 0' }}
    >
      {/* Main About Section */}
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
                // {t('about.label')}
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
                {t('about.number')}
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
                    {t('about.title')}{" "}
                    <span className="text-orange-600 italic">{t('about.titleHighlight')}</span>{" "}
                    {t('about.titleEnd')}{" "}
                    <span className="text-neutral-500">
                      {t('about.titleEndHighlight')}
                    </span>
                  </h3>
                </motion.div>

                {/* Positioning Statement */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  viewport={{ once: true }}
                  className="text-lg md:text-xl text-orange-400 font-medium leading-relaxed max-w-2xl"
                >
                  {t('about.positioning')}
                </motion.p>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed max-w-2xl"
                >
                  {t('about.description')}
                </motion.p>

                {/* Additional Positioning */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.45 }}
                  viewport={{ once: true }}
                  className="text-lg md:text-xl text-neutral-300 font-medium leading-relaxed max-w-2xl"
                >
                  {t('about.positioning2')}
                </motion.p>

                {/* Skills List */}
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      viewport={{ once: true }}
                      className="px-4 py-2 border border-neutral-800 rounded-full text-sm text-neutral-400 hover:border-orange-500/50 hover:text-orange-500 transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{ padding: '20px 0' }}
        className="px-8 py-24 md:py-32 border-t border-white/5 mt-24 md:mt-32"
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
                // {t('about.details.label')}
              </span>
              <div className="h-px w-12 bg-neutral-800 hidden md:block"></div>
            </div>
          </motion.div>

          {/* Details Grid */}
          <div className="md:col-span-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {details.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <span className="text-xs uppercase tracking-[0.2em] text-neutral-600">
                    {item.label}
                  </span>
                  <p className="text-white font-medium">{item.value}</p>
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-24 pt-12 border-t border-neutral-800"
            >
              <p className="text-2xl md:text-3xl text-neutral-500 font-light leading-relaxed max-w-3xl">
                {t('about.quote')}
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}