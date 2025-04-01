import { useTranslation } from 'react-i18next'
import homepagephoto from '../../../assets/homepagephoto.png'
import '../../../../index.css'
import Services from '../../Organisms/Services/Services'
import Carousel from '../../Organisms/Carousel/Carousel'
import Gallery from '../../Organisms/Gallery/Gallery'

const HomePage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
    <div> 
    <div className='home'>
      <img src={homepagephoto} className='homeImg' alt="" />
      <div className='homeTitle'>
      <h1 className='mb-2'>Poseidon Ink Tattoo</h1>
      <h2 className='mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, cumque.</h2>
      <a href="tel:+905551234567">  <button className='btn btn-lg buttonColor'>{t('ContactUs')}</button></a>
      </div>
    </div>
    <Services/>
    <Carousel/>
    <Gallery/>
    </div>
    </>
  )
}
export default HomePage