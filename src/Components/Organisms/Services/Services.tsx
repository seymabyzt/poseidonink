import './_services.scss'
import lionTattoo from '../../../Assets/lionTattoo.jpeg';
import piercing from '../../../Assets/piercing.png';
import coverup from '../../../Assets/coverup.jpeg';
import { useTranslation } from 'react-i18next';

const Services = () => {
      const { t } = useTranslation()
    return (
        <div className="container servicesSection">
            <div className='my-5 row justify-content-center gap-3'> 
                <h1 className='text-center'>{t('services')}</h1>
                <div className='d-flex justify-content-center gap-2 stars'>
                    <i className="fa-solid fa-star-of-life"></i>
                    <i className="fa-solid fa-star-of-life"></i>
                    <i className="fa-solid fa-star-of-life"></i>
                </div>
                <h5 className='text-center'>Poseidon Ink</h5>
            </div>
            <div className='d-flex justify-content-center flex-wrap'>
                <div className="col-sm-10 col-md-5 col-lg-2 col-xl-2 m-3 d-flex justify-content-center">
                    <div className="card">
                        <div className="first-content">
                        <img className="heading" src={lionTattoo} width={200} alt="" />
                        </div>
                        <div className="second-content">
                            <h3>Tattoo</h3>
                        </div>
                    </div>
                </div>
                <div className="col-sm-10 col-md-5 col-lg-2 col-xl-2 m-3 d-flex justify-content-center">
                <div className="card">
                        <div className="first-content">
                        <img className="heading" src={piercing} width={200} alt="" />
                        </div>
                        <div className="second-content">
                            <h3>Piercing</h3>
                        </div>
                    </div>
                </div>
                <div className="col-sm-10 col-md-5 col-lg-2 col-xl-2 m-3 d-flex justify-content-center">
                <div className="card">
                        <div className="first-content">
                        <img className="heading" src={coverup} width={200} alt="" />
                        </div>
                        <div className="second-content">
                            <h3>{t('coverup')}</h3>
                        </div>
                    </div>
                </div>
                <div className="col-sm-10 col-md-5 col-lg-2 col-xl-2 m-3 d-flex justify-content-center">
                <div className="card">
                        <div className="first-content">
                        <img className="heading" src={lionTattoo} width={200} alt=""/>
                        </div>
                        <div className="second-content">
                            <h3>{t('laser')}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services