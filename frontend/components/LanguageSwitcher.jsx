import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
  };

  const isEnglish = i18n.language === 'en' || i18n.language.startsWith('en');

  return (
    <motion.button
      onClick={toggleLanguage}
      className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-neutral-700 bg-transparent hover:border-orange-500/50 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={t('language.switch')}
    >
      <span
        className={`text-xs font-medium transition-colors ${
          isEnglish ? 'text-orange-500' : 'text-neutral-500'
        }`}
      >
        {t('language.en')}
      </span>
      <span className="text-neutral-600 text-xs">/</span>
      <span
        className={`text-xs font-medium transition-colors ${
          !isEnglish ? 'text-orange-500' : 'text-neutral-500'
        }`}
      >
        {t('language.fr')}
      </span>
    </motion.button>
  );
}
