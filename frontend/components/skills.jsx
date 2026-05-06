import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const skillCategoriesData = [
  {
    categoryKey: "dev",
    items: [
      { name: "Python", level: "01" },
      { name: "JavaScript", level: "02" },
      { name: "C# / .NET", level: "03" },
      { name: "PostgreSQL", level: "04" },
    ]
  },
  {
    categoryKey: "arch",
    items: [
      { name: "React / Three.js", level: "05" },
      { name: "FastAPI", level: "06" },
      { name: "n8n Automation", level: "07" },
      { name: "IoT / Arduino", level: "08" },
    ]
  }
];

export default function ElegantSkills() {
  const { t } = useTranslation();
  const categoriesData = t('skills.categories', { returnObjects: true });
  const skillCategories = Array.isArray(categoriesData) ? categoriesData : skillCategoriesData;

  return (
    <section className="bg-black text-white py-64 px-12 md:px-24" style={{ padding: '20px 0' }}>
      <div className="max-w-5xl mx-auto">
        
        {/* Minimal Header */}
        <div className="mb-40">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.5em] text-neutral-600 mb-4"
          >
            {t('skills.label')}
          </motion.p>
          <h2 className="text-6xl md:text-9xl font-light tracking-tighter leading-[0.8]">
            {t('skills.title')}{" "}<span className="opacity-20 italic">{t('skills.titleHighlight')}</span>
          </h2>
        </div>

        {/* The List Layout - No Bars, Just Typography */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-40">
          {skillCategories.map((cat, i) => (
            <div key={i} className="flex flex-col">
              <p className="text-neutral-700 text-[10px] uppercase tracking-widest mb-10 border-b border-neutral-900 pb-2">
                {cat.category || t(`skills.${cat.categoryKey}`)}
              </p>
              
              {cat.items.map((skill, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex items-baseline justify-between py-8 border-b border-neutral-900 hover:border-white transition-colors duration-700"
                >
                  <div className="flex items-baseline gap-6">
                    <span className="text-[10px] font-mono text-neutral-600 group-hover:text-white transition-colors">
                      {skill.level}
                    </span>
                    <h3 className="text-3xl md:text-5xl font-light tracking-tight group-hover:italic transition-all">
                      {skill.name}
                    </h3>
                  </div>
                  <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity text-xs tracking-widest text-neutral-500">
                    {t('skills.available')}
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}