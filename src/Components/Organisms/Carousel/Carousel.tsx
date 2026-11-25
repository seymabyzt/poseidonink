import { useTranslation } from 'react-i18next';
import './_carousel.scss'
import apostrophe from '../../../assets/apostrophe.png';
import homeimg from '../../../assets/homepagephoto.png';
const Carousel = () => {

  const { t } = useTranslation()

  return (
    <>
    <div className='carouselSection'>
    <img src={homeimg} alt="" className='bg-img'/>
  
      <div className='container carouselContainer'>
        <div>
        <h2 className="text-center fw-bold mb-4">{t('customerCommentsTitle')}</h2>
        <div className='d-flex justify-content-center gap-2 stars'>
          <i className="fa-solid fa-star-of-life"></i>
          <i className="fa-solid fa-star-of-life"></i>
          <i className="fa-solid fa-star-of-life"></i>
            <i className="fa-solid fa-star-of-life"></i>
              <i className="fa-solid fa-star-of-life"></i>
        </div>
        <div id="testimonialCarousel" className="carousel slide" data-bs-interval="3000" data-bs-ride="carousel">
          <div className="carousel-inner relative">
            <div className='apostrophe1'> 
              <img src={apostrophe} alt="" className='apostropheImg'/>
            </div>
            <div className="carousel-item active">
  <div className="testimonial-card row justify-content-center text-center p-4">
    <h5 className="my-3">Andreas Roll</h5>
    <p className="comment mt-2">{t('customerComments.andreasRoll')}</p>
  </div>
</div>

<div className="carousel-item">
  <div className="testimonial-card row justify-content-center text-center p-4">
    <h5 className="my-3">Ömer Yılmaz</h5>
    <p className="comment mt-2">{t('customerComments.omerYilmaz')}</p>
  </div>
</div>

<div className="carousel-item">
  <div className="testimonial-card row justify-content-center text-center p-4">
    <h5 className="my-3">Duygu Ece</h5>
    <p className="comment mt-2">{t('customerComments.duyguEce')}</p>
  </div>
</div>

<div className="carousel-item">
  <div className="testimonial-card row justify-content-center text-center p-4">
    <h5 className="my-3">Ceylin Taslak</h5>
    <p className="comment mt-2">{t('customerComments.ceylinTaslak')}</p>
  </div>
</div>

<div className="carousel-item">
  <div className="testimonial-card row justify-content-center text-center p-4">
    <h5 className="my-3">Alex Nedeljkovic</h5>
    <p className="comment mt-2">{t('customerComments.alexNedeljkovic')}</p>
  </div>
</div>

<div className="carousel-item">
  <div className="testimonial-card row justify-content-center text-center p-4">
    <h5 className="my-3">Melike Sultan Yılmaz</h5>
    <p className="comment mt-2">{t('customerComments.melikeSultanYilmaz')}</p>
  </div>
</div>

<div className="carousel-item">
  <div className="testimonial-card row justify-content-center text-center p-4">
    <h5 className="my-3">Natasha Oguntade</h5>
    <p className="comment mt-2">{t('customerComments.natashaOguntade')}</p>
  </div>
</div>

<div className="carousel-item">
  <div className="testimonial-card row justify-content-center text-center p-4">
    <h5 className="my-3">milhan</h5>
    <p className="comment mt-2">{t('customerComments.milhan')}</p>
  </div>
</div>

<div className="carousel-item">
  <div className="testimonial-card row justify-content-center text-center p-4">
    <h5 className="my-3">Harrison Brake</h5>
    <p className="comment mt-2">{t('customerComments.harrisonBrake')}</p>
  </div>
</div>

<div className="carousel-item">
  <div className="testimonial-card row justify-content-center text-center p-4">
    <h5 className="my-3">Kylie Summers</h5>
    <p className="comment mt-2">{t('customerComments.kylieSummers')}</p>
  </div>
</div>
            <div className='apostrophe2 '>
            <img src={apostrophe}  alt="" className='apostropheImg'/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
            <i className="fa-solid fa-arrow-left" aria-hidden="true"></i>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
            <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
        </div>
      
      </div>
      </div>
    </>
  );
};

export default Carousel;