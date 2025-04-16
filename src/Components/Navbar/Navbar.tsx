import { useEffect, useState } from 'react';
import LangButton from '../Atoms/LangButton/langButton';
import styles from './Navbar.module.css';
import logo from '../../assets/logowhite.png';

import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
    const { t } = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <a href="/">
        <img src={logo} width={270} alt="poseidoninklogo" />
        </a>
        <div className={styles.switchWrapper}  data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
        <div>
          <input id="checkbox2" className={styles.checkbox2} type="checkbox" />
          <label className={`${styles.toggle} ${styles.toggle2}`} htmlFor="checkbox2">
            <div id="bar4" className={`${styles.bars} ${styles.bar4}`} />
            <div id="bar5" className={`${styles.bars} ${styles.bar5}`}  />
            <div id="bar6" className={`${styles.bars} ${styles.bar6}`}  />
          </label>
        </div>
      </div>
        <div className="collapse navbar-collapse flex-grow-0" id="navbarNav">
          <ul className={styles.navPoseidon}>
            <li className="nav-item">
            <LangButton />
            </li>
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="/">
                {t('home')}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="/aboutus">
                {t('aboutus')}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/contact">
                {t('contact')}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}