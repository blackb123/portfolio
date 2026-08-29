import { motion } from "framer-motion";

const skillCategoriesData = [
  {
    category: "Product & web",
    items: [
      { name: "React", level: "01" },
      { name: "Next.js", level: "02" },
      { name: "JavaScript / TypeScript", level: "03" },
      { name: "Tailwind / CSS", level: "04" },
    ]
  },
  {
    category: "Automation & backend",
    items: [
      { name: "n8n", level: "05" },
      { name: "Python", level: "06" },
      { name: "FastAPI", level: "07" },
      { name: "Node.js", level: "08" },
    ]
  },
  {
    category: "Infrastructure",
    items: [
      { name: "VPS setup", level: "09" },
      { name: "Linux & Nginx", level: "10" },
      { name: "Docker", level: "11" },
      { name: "SSL / domain config", level: "12" },
    ]
  },
  {
    category: "DevOps & delivery",
    items: [
      { name: "GitHub Actions", level: "13" },
      { name: "CI / CD pipelines", level: "14" },
      { name: "Monitoring & logs", level: "15" },
      { name: "Deploy automation", level: "16" },
    ]
  }
];

export default function ElegantSkills() {
  return (
    <section className="bg-black text-white py-64 px-12 md:px-24" style={{ padding: '30px 0' }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.5em] text-neutral-600 mb-4"
          >
            Skills
          </motion.p>
          <h2 className="text-5xl md:text-8xl font-light tracking-tighter leading-[0.8]">
            Systems, automations and <span className="opacity-30 italic">deployment workflows</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
          {skillCategoriesData.map((cat, i) => (
            <div key={i} className="flex flex-col">
              <p className="text-neutral-700 text-[10px] uppercase tracking-[0.4em] mb-8 border-b border-neutral-900 pb-3">
                {cat.category}
              </p>

              {cat.items.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
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
                    Live
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