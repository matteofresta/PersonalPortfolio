import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import de from "./language/de/common.json";
import en from "./language/en/common.json";
import it from "./language/it/common.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      de: {
        translation: de,
      },
      en: {
        translation: en,
      },
      it: {
        translation: it,
      },
    },
    supportedLngs: ["de", "en", "it"],
    fallbackLng: "de",
    interpolation: {
      escapeValue: false,
    },
  });

export { i18n };
