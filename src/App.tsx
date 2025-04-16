
import { Route, Routes } from 'react-router'
import Footer from './Components/Footer/Footer'
import Contact from './Components/Layouts/Contact/Contact'
import HomePage from './Components/Layouts/HomePage/HomePage'
import Navbar from './Components/Navbar/Navbar'
import { useTranslation } from 'react-i18next'
import Modal from './Components/Molecules/Modal'
import { useEffect, useState } from 'react'
import AboutUs from './Components/Layouts/AboutUs/AboutUs'

function App() {
  const { t } = useTranslation()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showButton, setShowButton] = useState(false); 

  useEffect(() => {
    const openedBefore = sessionStorage.getItem("ModalOpened");
    if (!openedBefore) {
      const timer = setTimeout(() => {
        setIsModalOpen(true);
        sessionStorage.setItem("ModalOpened", "true");
      }, 30000);

      return () => clearTimeout(timer);
    }
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const screenHeight = window.innerHeight;

      if (scrollY > screenHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleOpenModal = (event: any) => {
    event.preventDefault();
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
    <div className='App'>
   {showButton && (
          <button
            type='button'
            className='mainButton'
            data-is-modal-open={true}
            onClick={handleOpenModal}
          >
            {t('contactus')}
          </button>
        )}
    <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<HomePage onClick={handleOpenModal}/>} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer></Footer>
    </div>
      <Modal isModalOpen={isModalOpen}
        onClose={handleCloseModal}></Modal>
    </>
  )
}

export default App
