import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { useTranslation } from 'react-i18next';

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function Services() {
  const { t } = useTranslation();
  const servicesData = t('services.items', { returnObjects: true });
  const services = Array.isArray(servicesData) ? servicesData : [];
  const plansData = t('services.plans', { returnObjects: true });
  const solutions = Array.isArray(plansData) ? plansData : [];
  const icons = ["◎", "◉", "◈", "◆", "◇", "⟲"];

  const getPlanLink = (planName) => {
    const message = encodeURIComponent(`Hi Brad, I want to discuss the ${planName} solution for my project.`);
    return `https://wa.me/671810319?text=${message}`;
  };

  return (
    <>
      {/* Services List Section */}
      <motion.section
        id="services"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-black border-t border-white/10 w-full"
      >
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
          <div className="mb-16 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-orange-500">{t('services.label')}</p>
              <h3 className="mt-4 text-4xl md:text-6xl font-medium leading-[1.1] tracking-tighter text-white">
                {t('services.title')} <span className="text-orange-600 italic">{t('services.titleHighlight')}</span>
              </h3>
            </div>

            <a
              href="https://wa.me/671810319?text=Hi%20Brad%2C%20I%20want%20to%20discuss%20a%20custom%20digital%20solution%20for%20my%20business."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-orange-500/40 bg-orange-500/10 px-6 py-3 text-[10px] uppercase tracking-[0.3em] text-orange-200 transition-all duration-300 hover:bg-orange-500 hover:text-black hover:scale-105"
            >
              {t('services.whatsappCta')}
            </a>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-start md:gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="md:col-span-3"
            >
              <div className="flex flex-col gap-3 md:sticky md:top-10">
                <span className="text-orange-500 font-bold text-xs uppercase tracking-[0.3em]">
                  {t('services.label')}
                </span>
                <div className="h-px w-12 bg-neutral-800" />
                <div className="text-[12vw] md:text-[8rem] font-bold leading-none text-neutral-800 tracking-tighter select-none">
                  {t('services.number')}
                </div>
              </div>
            </motion.div>

            <div className="md:col-span-9">
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-1 text-base md:text-lg"
              >
                {services.map((service, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + idx * 0.08 }}
                    viewport={{ once: true }}
                    className="group flex items-start gap-4 py-5 px-4 -mx-4 rounded-lg hover:bg-white/5 transition-all duration-300 cursor-default"
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
      </motion.section>

      {/* Solutions / Plans Section — full width, no sidebar indentation */}
      <motion.section
        id="solutions-plans"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-black border-t border-white/10 w-full"
      >
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-24"
          >
            <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.3em]">
              {t('services.solutionsLabel')}
            </span>
            <h3 className="mt-4 text-4xl md:text-7xl font-medium leading-[1.1] tracking-tighter text-white">
              {t('services.solutionsTitle')}{" "}
              <span className="text-orange-600 italic">{t('services.solutionsTitleHighlight')}</span>
            </h3>
            <p className="mt-6 text-lg text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
              {t('services.solutionsSubtitle')}
            </p>
          </motion.div>

          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            centerInsufficientSlides={true}
            initialSlide={Math.floor(solutions.length / 2)}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 20,
              depth: 40,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="solutionsSwiper"
            style={{ paddingBottom: "4rem", paddingTop: "1rem" }}
          >
            {solutions.map((plan, idx) => (
              <SwiperSlide
                key={`${plan.name}-${idx}`}
                className="solution-slide"
                style={{ width: "320px", height: "auto" }}
              >
                <motion.a
                  href={getPlanLink(plan.name)}
                  target="_blank"
                  rel="noreferrer"
                  className="solution-card solution-card-link"
                  aria-label={`Discuss ${plan.name}`}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="solution-top-row">
                    <span className="solution-tag">{plan.tag}</span>
                    <span className="solution-badge">{plan.highlight}</span>
                  </div>

                  <div className="solution-header">
                    <h5>{plan.name}</h5>
                    <p>{t('services.priceLabel')}</p>
                  </div>

                  <p className="solution-description">{plan.description}</p>

                  <ul>
                    {plan.features.map((feature, featureIndex) => (
                      <li key={`${plan.name}-${featureIndex}`}>
                        <span>◆</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <span className="solution-cta">{t('services.discussPlan')}</span>
                </motion.a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.section>
    </>
  );
}
