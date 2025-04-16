import './_services.scss'
import lionTattoo from '../../../Assets/lionTattoo.jpeg';
import piercing from '../../../Assets/piercing.png';
import coverup from '../../../Assets/coverup.jpeg';
import laserremoval from '../../../Assets/laserremoval.png';
import freedesign from '../../../Assets/freedesign.jpg';
import { useTranslation } from 'react-i18next';

const Services = () => {
    const { t } = useTranslation()
    return (
        <div className="container servicesSection">
            <div className='my-5 row justify-content-center gap-3 fade-in'>
                <h1 className='text-center'>{t('services')}</h1>
                <div className='d-flex justify-content-center gap-2'>
                    <i className="fa-solid fa-star-of-life stars"></i>
                    <i className="fa-solid fa-star-of-life stars"></i>
                    <i className="fa-solid fa-star-of-life stars"></i>
                </div>
                <h5 className='text-center'>Poseidon Ink</h5>
            </div>
            <div className='d-flex justify-content-center flex-wrap'>
                <div className="col d-flex m-1 justify-content-center fade-in">
                    <div className="custom-card">
                    <img className="hover-img" src={lionTattoo} width={200} alt="" />
                    <div className="fs-5 fw-bold custom-card-title">Tattoo</div>
                            <div className="hover-content">
                                <div className="hover-bg"></div>
                                <div className="fs-5 fw-bold visibleTattoo">Tattoo</div>
                                <p className="hover-text">{t('tattooText')}</p>
                            </div>
                    </div>
                </div>
                <div className="col m-1 d-flex justify-content-center fade-in">
                <div className="custom-card">
                            <img className="hover-img" src={piercing} alt="" />
                            <div className="fs-5 fw-bold custom-card-title">Piercing</div>
                            <div className="hover-content">
                                <div className="hover-bg"></div>
                                <div className="fs-5 fw-bold visibleTattoo">Piercing</div>
                                <p className="hover-text">{t('piercingText')}</p>
                            </div>
                    </div>

                </div>
                <div className="col m-1 d-flex justify-content-center fade-in">
                <div className="custom-card">
                            <img className="hover-img" src={coverup} width={200} alt="" />
                            <div className="fs-5 fw-bold custom-card-title">{t('coverup')}</div>

                            <div className="hover-content">
                                <div className="hover-bg"></div>
                                <div className="fs-5 fw-bold visibleTattoo">{t('coverup')}</div>
                                <p className="hover-text">{t('coverupText')}</p>
                            </div>
                    </div>
                </div>
                <div className="col m-1 d-flex justify-content-center fade-in">
                <div className="custom-card">
                        <img className="hover-img" src={laserremoval} width={200} alt="" />
                        <div className="fs-5 fw-bold custom-card-title">{t('laser')}</div>

                        <div className="hover-content">
                                <div className="hover-bg"></div>
                                <div className="fs-5 fw-bold visibleTattoo">{t('laser')}</div>
                                <p className="hover-text">{t('laserText')}</p>
                            </div>
                    </div>
                </div>
                <div className="col m-1 d-flex justify-content-center fade-in">
                <div className="custom-card">
                        <img className="hover-img" src={freedesign} width={200} alt="" />
                        <div className="fs-5 fw-bold custom-card-title">{t('freedesign')}</div>
                        <div className="hover-content">
                                <div className="hover-bg"></div>
                                <div className="fs-5 fw-bold visibleTattoo">{t('freedesign')}</div>
                                <p className="hover-text">{t('freedesignText')}</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services