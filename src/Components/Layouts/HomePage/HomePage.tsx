import { useTranslation } from 'react-i18next'
import '../../../../index.css'
import Services from '../../Organisms/Services/Services'
import Carousel from '../../Organisms/Carousel/Carousel'
import Gallery from '../../Organisms/Gallery/Gallery'
import homeVideo from '../../../assets/0403.mp4'
import Locations from '../../Organisms/Locations/Locations'

interface HomePageProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onClick }) => {
  const { t } = useTranslation()

  return (
    <>
    <div className='home'>
      <div className='overlay'> </div>
      <video src={homeVideo} className='homeImg' autoPlay muted loop />
      <div className='fade-in homeTitle col-lg-8 col-md-10 col-sm-10 col-10'>
      <h1 className='homePageTitle'>Poseidon Ink Tattoo</h1>
      <h2 className='my-4 homePageSubTitle'>{t('homeText')}</h2>
     <button onClick={onClick} className='btn btn-lg btnHome'>{t('ContactUs')}</button>
      </div>
    </div>
    <Services/>
    <Carousel/>
    <Gallery/>
    <Locations/>
    </>
  )
}
export default HomePage