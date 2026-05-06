import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from 'react-i18next';

export default function CurrentWork() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <motion.section
      ref={sectionRef}
      id="current"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative w-full min-h-screen overflow-hidden"
      style={{ padding: '20px 20px' }}
    >
      {/* Full Background Image */}
      <div className="absolute inset-0 w-screen z-0" >
        <div className="relative h-full overflow-hidden">
          <motion.img
            src="/src/assets/lastest_project.png"
            alt="Current Project"
            className="absolute inset-0 object-cover w-full h-full"
            style={{ y: backgroundY, scale: 1.1 }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/20" />
          <div className="absolute inset-0 bg-black/40 ur-2xl opacity-0 scroll-m-10 scroll-b-0" />
        </div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full min-h-screen flex items-center px-6 md:px-8">
        <div className="w-full max-w-5xl mx-auto py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
            
            {/* Left Content - Label & Title */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:col-span-5"
            >
              <span className="text-orange-500 font-bold text-xs uppercase tracking-[0.3em] mb-4 block">
                // Currently Building
              </span>
              
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-white leading-[1.1] mb-6">
                Vendor
                <span className="text-orange-600 italic block">Management System</span>
              </h2>
              
              <div className="w-16 h-px bg-orange-500 mb-8" />
            </motion.div>

            {/* Right Content - Description */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="md:col-span-7"
            >
              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-4">
                A web-based platform that allows vendors to manage their daily operations including products, orders, and customer requests in a structured and efficient way.
              </p>
              
              <p className="text-base text-white/70 leading-relaxed mb-4">
                The system provides a centralized dashboard where vendors can track activity in real time, update inventory, and handle order workflows from request to completion.
              </p>

              <p className="text-base text-white/70 leading-relaxed mb-6">
                Built with a modular architecture separating frontend, backend, and services for scalability and maintainability.
              </p>

              <div className="mb-6">
                <p className="text-sm text-orange-500 font-semibold uppercase tracking-wider mb-4">Core Features:</p>
                <div className="grid grid-cols-1 gap-2">
                  {[
                    { icon: "◉", text: "Vendor dashboard with live activity tracking" },
                    { icon: "◈", text: "Product and inventory management" },
                    { icon: "◎", text: "Order processing and status tracking" },
                    { icon: "◆", text: "Queue/ticket handling system (for service flow)" },
                    { icon: "◇", text: "Role-based access (staff, admin)" }
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 py-2 px-3 rounded-lg bg-white/5 border border-white/10 hover:border-orange-500/30 hover:bg-white/10 transition-all duration-300">
                      <span className="text-orange-500 text-sm">{feature.icon}</span>
                      <span className="text-white/90 text-sm font-medium">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm text-orange-500 font-semibold uppercase tracking-wider mb-2">Tech Stack:</p>
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-3 mb-8">
                {["React", "Python (FastAPI)", "PostgreSQL", "Redis", "Docker"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-xs uppercase tracking-wider text-white/80 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA Button */}
              <motion.a
                href="#project"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-8 py-3 my-3 bg-orange-600 text-white text-sm font-semibold uppercase tracking-wider hover:bg-orange-500 transition-colors"
                style={{ padding: "0px 1rem", textDecoration: "none" }}
              >
                View All Projects
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>
          </div>

          {/* Bottom Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 md:mt-24 pt-8 border-t border-white/10 w-full"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              <div>
                <span className="text-3xl md:text-4xl font-bold text-white">85%</span>
                <p className="text-sm text-white/60 mt-1">Completed</p>
              </div>
              <div>
                <span className="text-3xl md:text-4xl font-bold text-orange-500">12+</span>
                <p className="text-sm text-white/60 mt-1">APIs Integrated</p>
              </div>
              <div>
                <span className="text-3xl md:text-4xl font-bold text-white">3mo</span>
                <p className="text-sm text-white/60 mt-1">Development Time</p>
              </div>
              <div>
                <span className="text-3xl md:text-4xl font-bold text-orange-500">Beta</span>
                <p className="text-sm text-white/60 mt-1">Launch Status</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
