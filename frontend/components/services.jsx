import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

export default function Services() {
  const { t } = useTranslation();
  const servicesData = t('services.items', { returnObjects: true });
  const services = Array.isArray(servicesData) ? servicesData : [];
  const icons = ["◎", "◉", "◈", "◆", "◇", "⟲"];

  return (
    <motion.section
      id="services"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-[#0a0a0a] border-t border-white/5"
      style={{ padding: '20px 0' }}

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
                // {t('services.label')}
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
                {t('services.number')}
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
                    {t('services.title')}{" "}
                    <span className="text-orange-600 italic">{t('services.titleHighlight')}</span>
                  </h3>
                </motion.div>

                {/* Services List */}
                <motion.ul
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="space-y-1 text-base md:text-lg"
                >
                  {services.map((service, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + idx * 0.08 }}
                      viewport={{ once: true }}
                      className="group flex items-start gap-4 py-4 px-4 -mx-4 rounded-lg hover:bg-white/5 transition-all duration-300 cursor-default"
                    >
                      <span className="text-orange-500 text-sm font-mono opacity-60 group-hover:opacity-100 transition-opacity mt-1">
                        {icons[idx] || "◎"}
                      </span>
                      <div className="flex-1">
                        <span className="text-white/90 group-hover:text-white font-medium tracking-tight group-hover:translate-x-1 transition-transform block mb-1">
                          {service.title}
                        </span>
                        <span className="text-neutral-500 text-sm md:text-base leading-relaxed">
                          {service.description}
                        </span>
                      </div>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
