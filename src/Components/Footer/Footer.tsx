
import styles from "./Footer.module.css";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useTranslation } from 'react-i18next'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import logoTitle from '../../assets/logoTitle.png';

export default function Footer() {
  const {t} = useTranslation();

  return (
    <>
      <footer className={styles.footer}>
      <div className="container">
          <div className={styles.footerContentTop}>
            <div className={styles.footerContentTopLeft}>
              <a href="/"  className={styles.logo}>
                <img src={logoTitle} width={200} alt="" />
              </a>
              <div className={styles.footerIcon}>
                <a target="blank" href="https://wa.me/905525279096"> <WhatsAppIcon />
                </a>
                <a target="blank" href="https://wa.me/905525279096"> instagram
                </a>
              </div>
              <div className={styles.mailIcon}>
              <a href="mailto:info@seymabayezit.com" className={styles.MailMe}>   
                <MailOutlineIcon></MailOutlineIcon> 
                <span>info@poseidonink.com</span></a>
              </div>
            </div>
            <div className={styles.footerContentTopRight}>
              <a className={styles.link} href="/" >{t('home')}</a>
              <a className={styles.link}  href="/contact" >{t('contact')}</a>
              </div>
          </div>
          <div className={styles.footerContentBottom}>
            <p className={styles.bottomText}>{t('finish')}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
