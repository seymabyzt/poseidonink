import { useTranslation } from 'react-i18next';
import './_carousel.scss'
import apostrophe from '../../../assets/apostrophe.png';

const Carousel = () => {

  const { t } = useTranslation()

  return (
    <>
      <div className='container'>
        <h2 className="text-center fw-bold mb-4">{t('customerComments')}</h2>
        <div className='d-flex justify-content-center gap-2 stars'>
          <i className="fa-solid fa-star-of-life"></i>
          <i className="fa-solid fa-star-of-life"></i>
          <i className="fa-solid fa-star-of-life"></i>
        </div>
        <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner relative">
            <div className='apostrophe1'> 
              <img src={apostrophe} alt="" className='apostropheImg'/>
            </div>
            <div className="carousel-item active">
              <div className="testimonial-card row justify-content-center text-center p-4">
                <h5 className="my-3">isim</h5>
                <p className="comment mt-2">"İlk dövmemi burada yaptırdım ve sonuç harika! Hem hijyen hem de ilgi mükemmeldi. Gönül rahatlığıyla herkese tavsiye ederim"</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="testimonial-card row justify-content-center text-center p-4">
                <h5 className="my-3">isim</h5>
                <p className="comment mt-2">"Hayal ettiğim dövmeyi birebir tasarlayıp uyguladılar. Profesyonellik ve samimiyet bir arada! Gerçekten sanatlarını konuşturuyorlar."</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="testimonial-card row justify-content-center text-center p-4">
                <h5 className="my-3">isim</h5>
                <p className="comment mt-2">"Eski dövmemi kapattırmak için geldim, sonuç beklentimin çok üzerinde oldu. İyi ki sizi tercih etmişim, emeğinize sağlık!"</p>
              </div>
            </div>
            <div className='apostrophe2 '>
            <img src={apostrophe}  alt="" className='apostropheImg' />
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
    </>
  );
};

export default Carousel;