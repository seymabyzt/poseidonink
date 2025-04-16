import { useTranslation } from "react-i18next";
import './_locations.scss'
import tattoo4 from '../../../assets/subephoto.jpeg'
import tattoo5 from '../../../assets/sube3photo.jpeg'
import tattoo6 from '../../../assets/sube1photo.jpeg'
const Locations = () => {
    const { t } = useTranslation();
  return (
    <div className="container servicesSection">
            <div className='my-5 row justify-content-center gap-3 fade-in'>
                <h1 className='text-center'>{t('locations')}</h1>
                <div className='d-flex justify-content-center gap-2'>
                    <i className="fa-solid fa-star-of-life stars"></i>
                    <i className="fa-solid fa-star-of-life stars"></i>
                    <i className="fa-solid fa-star-of-life stars"></i>
                </div>
                <h5 className='text-center'>Poseidon Ink</h5>
            </div>
            <div className="row justify-content-center gap-3">
                <a className=" fade-in col-lg-4 col-md-10 col-sm-10 row justify-content-center p-3 text-decoration-none" href="https://g.co/kgs/UL1b1Hs" target="blank">
                    <div className="tattooStudioTitle">
                    <h3 className="text-center ">Aquasis studio 
                    </h3>
                    <p className="text-center ">Çamlık, Üç Mevsim Cd. No:50, 09270 Didim/Aydın - Aquasis De-Luxe Resort Hotel & Spa</p>
                    </div>
                    <div className="tattooStudio">
                    <img src={tattoo4} alt="" className="w-100"/>
                    </div>
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.829443102356!2d27.23360507606206!3d37.34654637209641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14be809d0695e8af%3A0x6301dd29b110b93!2sAquasis%20De%20Luxe%20Resort%20%26%20Spa!5e0!3m2!1str!2str!4v1743717294614!5m2!1str!2str" width="300" height="250"  style={{ borderRadius: '10px' }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
                </a>
                <a className="fade-in col-lg-4 col-md-10 col-sm-10 row justify-content-center p-3 text-decoration-none" href="https://g.co/kgs/P6Cwpv3" target="blank"> 
                    <div className="tattooStudioTitle">
                    <h3 className="text-center">Esra Family Suite</h3>
                    <p className="text-center">Çamlık, Barbaros Cd. No:3, 09270 Didim/Altınkum/Didim/Aydın</p>
                    </div>
                    <div className="tattooStudio">
                    <img src={tattoo5} alt="" className="w-100"/>
                    </div>
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1962.6771878872719!2d27.266544386770132!3d37.350978170286304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14be87248ed1c075%3A0xc7a7f341f6a61d09!2sEsra%20Family%20Suite%20Hotel!5e0!3m2!1str!2str!4v1743717096111!5m2!1str!2str" width="300" height="250" style={{ borderRadius: '10px' }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
                </a>
                <a className="fade-in col-lg-4 col-md-10 col-sm-10 row justify-content-center p-3 text-decoration-none" href="https://maps.app.goo.gl/gmR34B6FNQPS1TXV8" target="blank">
                    <div className="tattooStudioTitle">
                    <h3 className="text-center">Venosa Beach Resort & Spa</h3>
                    <p className="text-center">Altınkum, İnönü Blv. No:4, 09270 Didim/Aydın</p>
                    </div>
                    <div className="tattooStudio">
                    <img src={tattoo6} alt="" className="w-100"/>
                    </div> 
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.6495836170643!2d27.326479476062218!3d37.350803872095305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14be87a555a25ac3%3A0x153aa152db2be5dd!2sVenosa%20Beach%20Resort%20%26%20Spa!5e0!3m2!1str!2str!4v1743717391067!5m2!1str!2str" width="300" height="250" style={{ borderRadius: '10px' }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
                </a>
            </div>
        </div>
  )
}

export default Locations