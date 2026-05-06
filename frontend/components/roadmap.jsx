import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from 'react-i18next';


function TreeNode({ data, index }) {
  const isLeft = index % 2 === 0; // Alternate: even indexes on left, odd on right
  
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-50px" }}
      className={`relative flex items-center gap-8 ${isLeft ? "flex-row" : "flex-row-reverse"} w-full`}
    >
      {/* Content Card */}
      <div className={`flex-1 ${isLeft ? "text-right pr-8" : "text-left pl-8"}`}>
        <div className="group inline-block">
          <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.2em]">
            {data.year}
          </span>
          <h3 className="text-white text-xl md:text-2xl font-medium tracking-tight mt-1 group-hover:text-orange-500 transition-colors">
            {data.title}
          </h3>
          <p className="text-neutral-400 text-sm md:text-base font-light leading-relaxed mt-3 max-w-md">
            {data.description}
          </p>
        </div>
      </div>

      {/* Center Node */}
      <div className="relative flex-shrink-0 w-4 h-4">
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border border-orange-500/30 scale-150" />
        {/* Inner dot */}
        <motion.div 
          className="w-full h-full rounded-full bg-orange-500"
          whileInView={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
          viewport={{ once: true }}
        />
        {/* Pulse effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-orange-500"
          animate={{ scale: [1, 2, 2], opacity: [0.5, 0, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        />
      </div>

      {/* Spacer for opposite side */}
      <div className="flex-1" />
    </motion.div>
  );
}

export default function Roadmap() {
  const { t } = useTranslation();
  const containerRef = useRef(null);

  const milestonesData = t('roadmap.milestones', { returnObjects: true });
  const experiencesData = t('roadmap.experiences', { returnObjects: true });
  const journeyMilestones = Array.isArray(milestonesData) ? milestonesData : [];
  const experiences = Array.isArray(experiencesData) ? experiencesData : [];
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const treeHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      id="roadmap"
      className="relative bg-[#0a0a0a] border-t border-white/5 overflow-hidden"
      style={{ padding: '20px 0' }}
    >
      {/* Background gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-neutral-800 to-transparent" />

      {/* Header */}
      <div className="px-8 py-32 md:py-48">
        <div className="max-w-7xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-orange-500 text-xs font-bold uppercase tracking-[0.3em]"
          >
            {t('roadmap.label')}
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-medium tracking-tighter text-white mt-6"
          >
            {t('roadmap.title')}{" "}<span className="text-orange-600 italic">{t('roadmap.titleHighlight')}</span>{" "}{t('roadmap.subtitle')}
          </motion.h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-24 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mt-8"
          />
        </div>
      </div>

      {/* Tree Timeline - Education */}
      <div className="relative px-8 pb-32">
        <div className="max-w-4xl mx-auto">
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-neutral-600 text-xs uppercase tracking-[0.2em]">{t('roadmap.education')}</span>
          </motion.div>

          {/* Tree with animated trunk */}
          <div className="relative">
            {/* Animated vertical line */}
            <motion.div 
              style={{ height: treeHeight }}
              className="absolute left-1/2 -translate-x-1/2 top-0 w-px bg-gradient-to-b from-orange-500 via-orange-500/50 to-transparent z-10"
            />
            
            {/* Static line base */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-full bg-neutral-800" />

            {/* Nodes */}
            <div className="relative space-y-24 md:space-y-32">
              {journeyMilestones.map((milestone, index) => (
                <TreeNode key={index} data={milestone} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Experience Branch */}
      <div className="relative px-8 py-32 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-neutral-600 text-xs uppercase tracking-[0.2em]">{t('roadmap.experience')}</span>
          </motion.div>

          {/* Branch line */}
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-full bg-neutral-800" />
            <motion.div 
              style={{ height: treeHeight }}
              className="absolute left-1/2 -translate-x-1/2 top-0 w-px bg-gradient-to-b from-orange-500 via-orange-500/50 to-transparent z-10"
            />

            {/* Experience Nodes */}
            <div className="relative space-y-24 md:space-y-32">
              {experiences.map((exp, index) => (
                <TreeNode key={index} data={exp} index={index + journeyMilestones.length} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="px-8 py-24 border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-4">
            <div className="h-px w-12 bg-neutral-800" />
            <span className="text-neutral-500 text-sm">{t('roadmap.continued')}</span>
            <div className="h-px w-12 bg-neutral-800" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
