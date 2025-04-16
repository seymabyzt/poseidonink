import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import styles from './langButton.module.css';

export default function LangButton() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  const changeLanguage = async (lang: string) => {
    await i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className={`dropdown ${styles.langDropdown}`}>
      <button
        className={`btn btn-secondary dropdown-toggle ${styles.langButton}`}
        type="button"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
      >
        {(i18n.language === "tr" ? "TR" : i18n.language === "en" ? "EN" : "DE").toUpperCase()}
      </button>
      <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
        <li><button className="dropdown-item" onClick={() => changeLanguage('en')}>EN</button></li>
        <li><button className="dropdown-item" onClick={() => changeLanguage('tr')}>TR</button></li>
        <li><button className="dropdown-item" onClick={() => changeLanguage('de')}>DE</button></li>
      </ul>
    </div>
  );
}