import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { useTranslation } from 'react-i18next';

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function Projects() {
  const { t } = useTranslation();
  const projectsData = t('projects.items', { returnObjects: true });
  const projects = Array.isArray(projectsData) ? projectsData : [];

  return (
    <motion.section
      id="project"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-black border-t border-white/10"
    >
      <div className="site-container section-padding">
        <div className="site-grid">
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
                {t('projects.label')}
              </span>
              <div className="h-px w-12 bg-neutral-800 hidden md:block"></div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="md:col-span-10 min-w-0">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
              {/* Giant Number */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-[15vw] md:text-[12rem] font-bold leading-none text-neutral-800 tracking-tighter select-none"
              >
                {t('projects.number')}
              </motion.div>

              <div className="flex-1 space-y-8">
                {/* Main Statement */}
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-6xl font-medium leading-[1.1] tracking-tighter text-white"
                >
                  {t('projects.title')}{" "}
                  <span className="text-orange-600 italic">{t('projects.titleHighlight')}</span>{" "}
                  {t('projects.subtitle')}{" "}
                  <span className="text-neutral-500">
                    {t('projects.subtitleHighlight')}
                  </span>
                </motion.h3>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed max-w-2xl"
                >
                  {t('projects.description')}
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="site-container section-padding-compact border-t border-white/10"
      >
        <div className="w-full min-w-0">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 20,
              stretch: 30,
              depth: 120,
              modifier: 1.2,
              slideShadows: true,
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="projectsSwiper"
            style={{ paddingBottom: "5rem", paddingTop: "2rem" }}
          >
            {projects.map((item) => (
              <SwiperSlide
                key={item.id}
                className="swiper-slide-responsive"
                style={{ width: "320px", height: "440px" }}
              >
                <motion.div
                  className="relative w-full h-full overflow-hidden group cursor-pointer rounded-xl border border-white/10 transition-all duration-500 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10"
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Full background image */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={item.path}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                  </div>

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />

                  {/* Content */}
                  <div className="relative z-20 h-full flex flex-col justify-between p-6 md:p-7">
                    {/* Top: Tech tags */}
                    <div className="flex flex-wrap gap-2">
                      {item.tech.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-[11px] font-mono font-medium text-orange-300 bg-black/50 backdrop-blur-sm rounded-full border border-orange-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                      {item.tech.length > 3 && (
                        <span className="px-3 py-1 text-[11px] font-mono text-white/70 bg-black/50 backdrop-blur-sm rounded-full">
                          +{item.tech.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Bottom: Role, Title, summary, and action */}
                    <div className="space-y-4">
                      {item.role && (
                        <span className="inline-block text-[10px] font-mono uppercase tracking-wider text-orange-300/90 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 border border-orange-500/20">
                          {item.role}
                        </span>
                      )}
                      <h3 className="text-white text-2xl md:text-3xl font-bold tracking-tight leading-tight drop-shadow-lg">
                        {item.title}
                      </h3>

                      <p className="text-white/80 text-sm md:text-base leading-relaxed line-clamp-2 max-w-[90%] drop-shadow">
                        {item.summary}
                      </p>

                      {/* Action button */}
                      <div className="pt-1">
                        {item.liveLink && !item.liveLink.startsWith('TODO') ? (
                          <a
                            href={item.liveLink}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 text-[10px] font-semibold uppercase tracking-wider text-orange-400 bg-black/60 rounded-full border border-orange-500/40 hover:bg-orange-500 hover:text-white transition-all duration-300"
                          >
                            {t('projects.viewProject')}
                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </a>
                        ) : (
                          <span className="inline-flex items-center gap-2 px-6 py-3 text-[10px] font-semibold uppercase tracking-wider text-neutral-500 bg-black/40 rounded-full border border-neutral-700 cursor-not-allowed">
                            {t('projects.viewProject')}
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Hover border glow */}
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-orange-500/30 transition-all duration-500 pointer-events-none z-30" />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>

      {/* Custom pagination styling */}
      <style>{`
        .projectsSwiper .swiper-pagination-bullet {
          background: #525252 !important;
          opacity: 0.5;
          width: 6px;
          height: 6px;
          transition: all 0.3s ease;
        }
        .projectsSwiper .swiper-pagination-bullet-active {
          opacity: 1;
          background: #f97316 !important;
          width: 20px;
          border-radius: 4px;
        }
        .projectsSwiper .swiper-slide-shadow {
          background: rgba(10, 10, 10, 0.8) !important;
        }
        @media (max-width: 640px) {
          .projectsSwiper {
            padding-top: 1rem !important;
            padding-bottom: 3rem !important;
          }
          .swiper-slide-responsive {
            width: 280px !important;
            height: 380px !important;
          }
        }
      `}</style>
    </motion.section>
  );
}
