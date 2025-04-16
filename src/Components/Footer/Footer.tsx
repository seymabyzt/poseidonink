
import styles from "./Footer.module.css";
import { useTranslation } from 'react-i18next'
import logoTitle from '../../assets/logoTitle.png';
import logo from '../../assets/logoPic.png';
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
                <a target="blank" href="https://wa.me/905537843572" ><i className="fa-brands fa-whatsapp "></i>
                </a>
                <a target="blank" href="https://www.instagram.com/poseidonink_/"> <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
              <div className={styles.mailIcon}>
              <a href="mailto:info@poseidonink.com" target="blank" className={styles.MailMe}>   
              <i className="fa-solid fa-envelope"></i>             
              <span>info@poseidonink.com</span>
              </a>
              </div>
            </div>
            <div>
              <img src={logo} alt="" width={100}/>
            </div>
            <div className={styles.footerContentTopRight}>
              <a className={styles.link} href="/" >{t('home')}</a>
              <a className={styles.link}  href="/aboutus" >{t('aboutus')}</a>
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
