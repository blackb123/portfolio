import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useTranslation } from 'react-i18next';

function FaqItem({ item, index, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
      viewport={{ once: true }}
      className="border-b border-neutral-800"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-6 py-6 text-left group"
      >
        <span className="text-white text-lg md:text-xl font-medium tracking-tight group-hover:text-orange-400 transition-colors">
          {item.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-orange-500 text-2xl font-light flex-shrink-0"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-neutral-400 text-base leading-relaxed pb-6 max-w-3xl">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Contact() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(0);
  const faqItems = t('faq.items', { returnObjects: true }) || [];
  const waMessage = encodeURIComponent(t('whatsapp.message'));

  const contactDetails = [
    { label: t('contact.emailLabel'), value: t('contact.email'), href: `mailto:${t('contact.email')}` },
    { label: t('contact.locationLabel'), value: t('contact.location') },
    { label: t('contact.whatsappLabel'), value: t('contact.whatsapp'), href: `https://wa.me/671810319?text=${waMessage}` }
  ];

  return (
    <section id="contact" className="bg-[#0a0a0a] border-t border-white/10">
      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="px-6 md:px-8 py-16 md:py-24"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 w-full">
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
                {t('contact.label')}
              </span>
              <div className="h-px w-12 bg-neutral-800 hidden md:block"></div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="md:col-span-10">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
              {/* Giant Number */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-[15vw] md:text-[12rem] font-bold leading-none text-neutral-800 tracking-tighter select-none"
              >
                {t('contact.number')}
              </motion.div>

              <div className="flex-1 space-y-12">
                {/* Title */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-4xl md:text-6xl font-medium leading-[1.1] tracking-tighter text-white">
                    {t('contact.title')}{" "}
                    <span className="text-orange-600 italic">{t('contact.titleHighlight')}</span>{" "}
                    {t('contact.titleEnd')}
                  </h3>
                  <p className="mt-6 text-lg text-neutral-400 font-light leading-relaxed max-w-2xl">
                    {t('contact.subtitle')}
                  </p>
                </motion.div>

                {/* Contact Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {contactDetails.map((detail, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <span className="text-xs uppercase tracking-[0.2em] text-neutral-600">
                        {detail.label}
                      </span>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          target={detail.href.startsWith('mailto') ? undefined : '_blank'}
                          rel="noreferrer"
                          className="text-white font-medium hover:text-orange-400 transition-colors block"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{detail.value}</p>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-4"
                >
                  <motion.a
                    href={`https://wa.me/671810319?text=${waMessage}`}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-widest text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-all"
                  >
                    {t('contact.whatsappCta')}
                  </motion.a>
                  <motion.a
                    href={`mailto:${t('contact.email')}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-widest text-white border border-neutral-800 rounded-full hover:border-orange-500/50 transition-all"
                  >
                    {t('contact.emailCta')}
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="px-6 md:px-8 pt-20 pb-16 md:pt-24 md:pb-20 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.3em]">
              {t('faq.label')}
            </span>
            <h3 className="mt-4 text-4xl md:text-6xl font-medium leading-[1.1] tracking-tighter text-white">
              {t('faq.title')}{" "}
              <span className="text-orange-600 italic">{t('faq.titleHighlight')}</span>
            </h3>
            <p className="mt-4 text-lg text-neutral-400 font-light">
              {t('faq.subtitle')}
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {faqItems.map((item, idx) => (
              <FaqItem
                key={idx}
                item={item}
                index={idx}
                isOpen={openIndex === idx}
                onToggle={() => setOpenIndex(openIndex === idx ? -1 : idx)}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
