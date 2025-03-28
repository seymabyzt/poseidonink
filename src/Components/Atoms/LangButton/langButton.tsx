import { useTranslation } from 'react-i18next';
import { Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import styles from './langButton.module.css'
export default function LangButton() {

  const { i18n } = useTranslation();
  
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const clickHandle = async (lang: string | undefined) => {
    await i18n.changeLanguage(lang);
    handleMenuClose();
  };

  return (
    <>
      <button
        aria-label="menu"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenuOpen}
        className={styles.langButton}
      >
       {(i18n.language === "tr" ? "TR" : "EN").toUpperCase()}
      </button>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
        disableScrollLock
      >
        <MenuItem onClick={() => clickHandle('en')}>EN</MenuItem>
        <MenuItem onClick={() => clickHandle('tr')}>TR</MenuItem>
        <MenuItem onClick={() => clickHandle('de')}>DE</MenuItem>
      </Menu>
    </>
  );
}
