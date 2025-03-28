import i18n from "i18next";
import { initReactI18next } from 'react-i18next';
import LanguageDetector from "i18next-browser-languagedetector";
const resources = {
    tr: {
        translation: {
            home: "Anasayfa",
            homeTitle: "Poseidon Dövme Salonu",
            finish: "© 2025 | Sym Dijital Tasarım ve Geliştirme",
            contact: "İletişim",
        }
      
    },
    en: {
        translation: {
            home: "Home",
            homeTitle: "Poseidon Ink Studio",
            finish: "© 2025 | Designed and Developed by Şeyma Bayezit",
            contact: "Contact",
        }
    },
    de: {
        translation: {
            home: "Home",
            homeTitle: "Poseidon Ink Studio",
            finish: "© 2025 | Designed and Developed by Şeyma Bayezit",
            contact: "Contact",
        }
    }
}

i18n
.use(initReactI18next)
.use(LanguageDetector)
.init({
    fallbackLng: 'en',
    resources
})
export default i18n