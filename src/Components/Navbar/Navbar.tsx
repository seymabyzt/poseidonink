import { useEffect, useState } from 'react';
import LangButton from '../Atoms/LangButton/langButton';
import './Navbar.module.css';
import styles from './Navbar.module.css';
import logo from '../../assets/logoPic.png';
import Switch from '../Atoms/Switch/Switch';
import logoTitle from '../../assets/logoTitle.png';
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
        <img src={logo} width={75} alt="poseidoninklogo" />
        </a>
       
        <div className={styles.centerLogo}>
          <a href="/">
          <img src={logoTitle} width={150} alt="poseidoninklogo" />
          </a>
         
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <Switch />
        </button>
        <div className="collapse navbar-collapse flex-grow-0" id="navbarNav">
          <ul className="navbar-nav">
            <LangButton />
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="/">
                {t('home')}
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