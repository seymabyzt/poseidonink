import { useState } from "react";
import tattoo1 from '../../../assets/tattoo.jpeg';
import tattoo2 from '../../../assets/tattoo2.jpeg';
import tattoo3 from '../../../assets/tattoo3.jpeg';
import tattoo4 from '../../../assets/tattoo4.jpeg';
import tattoo5 from '../../../assets/tattoo5.jpeg';
import tattoo6 from '../../../assets/tattoo6.jpeg';
import tattoo7 from '../../../assets/ıııı.jpg';
import tattoo8 from '../../../assets/sad.jpeg';
import tattoo9 from '../../../assets/tattoo7.jpeg';
import tattoo10 from '../../../assets/tattoo10.jpeg';

import './_gallery.scss';
import { useTranslation } from "react-i18next";

const Gallery = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const { t } = useTranslation()

  const images = [
    { src: tattoo1, alt: "Photo 1" },
    { src: tattoo2, alt: "Photo 2" },
    { src: tattoo3, alt: "Photo 3" },
    { src: tattoo4, alt: "Photo 4" },
    { src: tattoo5, alt: "Creative Children's Workshop" },
    { src: tattoo6, alt: "Family Counseling Didim" },
    { src: tattoo7, alt: "Children's Workshop Didim" },
    { src: tattoo8, alt: "Children's Workshop Didim" },
    { src: tattoo9, alt: "Photo 1" },
    {src: tattoo10 , alt: ""}
  ];

  return (
    <div className="container text-center gallerySection">
      <h2 className="fw-bold mb-4">{t('gallery')}</h2>
      {/* Buton - Sadece Mobilde Görünsün */}
      <div className="d-md-none mb-3">
        <button
          className="animated-button btn btn-primary"
          type="button"
          onClick={() => setIsGalleryOpen(!isGalleryOpen)}
        ><i className="bi bi-image me-2"></i>
          {isGalleryOpen ? "Galeriyi Gizle" : "Galeriyi Gör"}
        </button>
      </div>

      {/* Galeri Bölümü - Masaüstünde her zaman açık, mobilde butona bağlı */}
      <div className={`row ${isGalleryOpen ? "d-block" : "d-none d-md-flex"}`}>
        <div className="col-lg-4 col-md-4 mb-lg-0">
          <img
            src={images[0].src}
            className="w-100 fade-in shadow-1-strong rounded mb-4"
            alt={images[0].alt}
          />
          <img
            src={images[3].src}
            className="w-100 fade-in shadow-1-strong rounded mb-4"
            alt={images[3].alt}
          />
          <img
            src={images[7].src}
            className="w-100 fade-in shadow-1-strong rounded mb-4"
            alt={images[7].alt}
          />
        </div>

        <div className="col-lg-4 col-md-4 mb-lg-0">
          <img
            src={images[5].src}
            className="w-100 fade-in shadow-1-strong rounded mb-4"
            alt={images[5].alt}
          />
          <img
            src={images[6].src}
            className="w-100 fade-in shadow-1-strong rounded mb-4"
            alt={images[6].alt}
          />
          <img
            src={images[1].src}
            className="w-100 fade-in shadow-1-strong rounded mb-4"
            alt={images[1].alt}
          />
        </div>

        <div className="col-lg-4 col-md-4 mb-lg-0">
          <img
            src={images[4].src}
            className="w-100 fade-in shadow-1-strong rounded mb-4"
            alt={images[4].alt}
          />
          <img
            src={images[2].src}
            className="w-100 fade-in shadow-1-strong rounded mb-4"
            alt={images[2].alt}
          />
           <img
            src={images[9].src}
            className="w-100 fade-in shadow-1-strong rounded mb-4"
            alt={images[9].alt}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;