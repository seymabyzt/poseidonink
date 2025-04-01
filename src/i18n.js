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
            customerComments: "Müşteri Yorumları",
            ContactUs: 'Hemen Ara!',
            gallery: "Galeri",
            contact: "İletişim",
            Telephone: 'Telefon',
            email: 'E-posta',
            contactus: 'Bizimle İletişime Geç!',
            message: 'MESAJINIZ',
            Send: 'Gönder',
            laser: 'Laser Removel',
            services: 'Hizmetlerimiz',
            coverup: 'Dövme Kapatma'
        }
    },
    en: {
        translation: {
            home: "Home",
            homeTitle: "Poseidon Ink Studio",
            finish: "© 2025 | Designed and Developed by Şeyma Bayezit",
            contact: "Contact",
            customerComments: "Customer Comments",
            ContactUs: 'Contact Us!',
            gallery: "Gallery",
            contact: "Contact",
            phone:  'Phone',
            email: 'Email',
            contactus: 'Contact Us!',
            message: 'Your Message',
            Send: 'Send',
            laser: 'Laser Removel',
            services: 'Our Services',
            coverup: 'Tattoo Cover Up'

        }
    },
    de: {
        translation: {
                home: "Startseite",
                homeTitle: "Poseidon Ink Studio",
                finish: "© 2025 | Gestaltet und entwickelt von Şeyma Bayezit",
                contact: "Kontakt",
                customerComments: "Kundenbewertungen",
                ContactUs: "Kontaktiere uns!",
                gallery: "Galerie",
                phone: "Telefon",
                email: "E-Mail",
                contactus: "Kontaktiere uns!",
                message: "DEINE NACHRICHT",
                Send: "Senden",
                laser: "Laserentfernung",
                services: "Unsere Leistungen",
                coverup: "Tattoo Cover Up"
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