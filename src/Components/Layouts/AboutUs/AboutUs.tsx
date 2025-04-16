import './_aboutus.scss'
import { useTranslation } from 'react-i18next';
// import aboutUsLogo from '../../../assets/aboutUsLogo.png'
const AboutUs = () => {
  const { t } = useTranslation()

  return (
    <div className='aboutUsSection'>
        <div className="container p-sm-2 p-5 aboutUs">
        <h2 className="aboutUsTitle">{t('aboutus')}</h2>

          {/* <img src={aboutUsLogo} alt="poseidonInkTattoo" width={200}/> */}
          <div className="aboutUsContent p-4">
            <p className='aboutUsText'>
              {t('paragraph1')}
              <br />
              <br />
              {t('paragraph2')}
              <br />
              <br />
              {t('paragraph3')}
            </p>
          </div>
          <div className='d-flex justify-content-center flex-wrap m-2'>
            <div className='col-lg-6 col-md-6 col-sm-12 mx-auto'>
              <div className='vision'>
              <h2>{t('ourvision')}</h2>
              <p>{t('vision')}</p>
              </div>
           
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 mx-auto'>
              <div className='vision'>
              <h2>{t('ourmission')}</h2>
              <p>{t('mission')}</p>
              </div>
          
            </div>
          </div>
      </div>
    </div>
  )
}

export default AboutUs