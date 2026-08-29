import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { useTranslation } from 'react-i18next';

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const solutions = [
  {
    name: 'Ecommerce Systems',
    tag: 'Build & scale',
    priceLabel: 'Devis sur mesure',
    description: 'Online stores, product flows, checkout logic, inventory sync, CRM automation and sales tracking.',
    features: ['Shopify / custom storefront', 'Payment + VAT setup', 'Inventory and order automation', 'Marketing funnels'],
    highlight: 'Most requested'
  },
  {
    name: 'Mobile Apps',
    tag: 'Launch fast',
    priceLabel: 'Devis sur mesure',
    description: 'Native-feeling mobile experiences for service businesses, internal tools and customer portals.',
    features: ['iOS / Android MVP', 'User login and dashboard', 'Push & notification flows', 'App maintenance'],
    highlight: 'MVP ready'
  },
  {
    name: 'Automation',
    tag: 'Operational gain',
    priceLabel: 'Devis sur mesure',
    description: 'Use n8n, webhooks and integrations to remove repetitive work across teams and tools.',
    features: ['n8n workflows', 'CRM + ERP sync', 'WhatsApp automations', 'Task routing'],
    highlight: 'ROI focused'
  },
  {
    name: 'ERP & Internal Tools',
    tag: 'Control your ops',
    priceLabel: 'Devis sur mesure',
    description: 'Dashboards, admin tools, reporting panels and operational systems built around your workflow.',
    features: ['Internal dashboards', 'Role-based access', 'Reporting and exports', 'Alerts & notifications'],
    highlight: 'Business logic'
  },
  {
    name: 'Maintenance',
    tag: 'Keep it live',
    priceLabel: 'Devis sur mesure',
    description: 'Support, monitoring, deployment fixes, updates and performance tuning for production systems.',
    features: ['Bug fixes', 'Hosting monitoring', 'Deployments', 'Security updates'],
    highlight: 'Always online'
  },
  {
    name: 'AI + Process Ideas',
    tag: 'New revenue',
    priceLabel: 'Devis sur mesure',
    description: 'Concept validation, smart workflows and rapid prototypes for ideas that need a clear technical roadmap.',
    features: ['Discovery sprint', 'Prototype design', 'Architecture plan', 'Growth automation'],
    highlight: 'Ideas to product'
  }
];

export default function Services() {
  const { t } = useTranslation();
  const servicesData = t('services.items', { returnObjects: true });
  const services = Array.isArray(servicesData) ? servicesData : [];
  const icons = ["◎", "◉", "◈", "◆", "◇", "⟲"];

  const getPlanLink = (planName) => {
    const message = encodeURIComponent(`Hi Brad, I want to discuss the ${planName} solution for my project.`);
    return `https://wa.me/671810319?text=${message}`;
  };

  return (
    <motion.section
      id="services"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-[#0a0a0a] border-t border-white/5"
      style={{ padding: '30px 0' }}
    >
      <div className="px-8 py-32 md:py-48 min-h-[80vh] flex items-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 w-full">
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

          <div className="md:col-span-10">
            <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
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
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-4xl md:text-6xl font-medium leading-[1.1] tracking-tighter text-white">
                    {t('services.title')} {" "}
                    <span className="text-orange-600 italic">{t('services.titleHighlight')}</span>
                  </h3>
                </motion.div>

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

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="pt-8"
                >
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-500">Solution plans</p>
                      <h4 className="mt-3 text-3xl md:text-5xl font-medium tracking-tighter text-white">
                        Built for growth, ops, and automation.
                      </h4>
                    </div>
                    <a
                      href="https://wa.me/671810319?text=Hi%20Brad%2C%20I%20want%20to%20discuss%20a%20custom%20digital%20solution%20for%20my%20business."
                      target="_blank"
                      rel="noreferrer"
                      className="hidden md:inline-flex items-center rounded-full border border-orange-500/40 bg-orange-500/10 px-5 py-2.5 text-[10px] uppercase tracking-[0.3em] text-orange-200 transition hover:bg-orange-500 hover:text-black"
                    >
                      WhatsApp CTA
                    </a>
                  </div>

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
                        <a
                          href={getPlanLink(plan.name)}
                          target="_blank"
                          rel="noreferrer"
                          className="solution-card solution-card-link"
                          aria-label={`Discuss ${plan.name}`}
                        >
                          <div className="solution-top-row">
                            <span className="solution-tag">{plan.tag}</span>
                            <span className="solution-badge">{plan.highlight}</span>
                          </div>

                          <div className="solution-header">
                            <h5>{plan.name}</h5>
                            <p>{plan.priceLabel}</p>
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

                          <span className="solution-cta">Discuss this plan</span>
                        </a>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
