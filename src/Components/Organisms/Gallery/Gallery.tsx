import { useRef, useState } from 'react';

import pic1 from '../../../assets/realism/1.jpg';
import pic2 from '../../../assets/realism/2.jpg';
import pic3 from '../../../assets/realism/3.jpg';
import pic4 from '../../../assets/realism/4.jpg';
import pic5 from '../../../assets/realism/6.jpg';
import pic6 from '../../../assets/realism/7.jpg';
import pic7 from '../../../assets/realism/photo_2023-05-16_22-04-01.jpg';
import pic8 from '../../../assets/realism/photo_2023-05-27_16-37-35.jpg';
import pic9 from '../../../assets/realism/photo_2023-07-22_22-01-53.jpg';
import picture1 from '../../../assets/minimal/photo_2023-06-14_20-21-58.jpg';
import picture2 from '../../../assets/minimal/photo_2023-06-29_16-21-18.jpg';
import picture3 from '../../../assets/minimal/photo_2023-06-29_16-21-20.jpg';
import picture4 from '../../../assets/minimal/photo_2023-08-06_20-35-56.jpg';
import picture5 from '../../../assets/minimal/photo_2023-08-09_21-23-31.jpg';
import picture6 from '../../../assets/minimal/photo_2023-08-12_21-27-21.jpg';
import picture7 from '../../../assets/minimal/photo_2023-08-18_00-56-47.jpg';
import picture11 from '../../../assets/fineLine/1.jpg';
import picture22 from '../../../assets/fineLine/2.jpg';
import picture33 from '../../../assets/fineLine/3.jpg';
import picture44 from '../../../assets/fineLine/4.jpg';
import picture55 from '../../../assets/fineLine/5.jpg';
import picture66 from '../../../assets/fineLine/photo_2023-05-22_18-30-53.jpg';
import picture77 from '../../../assets/fineLine/photo_2023-05-29_15-48-41.jpg';
import picture88 from '../../../assets/fineLine/photo_2023-07-26_17-45-13.jpg';
import picture111 from '../../../assets/color/3.jpg';
import picture222 from '../../../assets/color/color1.jpg';
import picture333 from '../../../assets/color/color2.jpg';
import picture444 from '../../../assets/color/photo_2023-05-21_17-17-55.jpg';
import picture555 from '../../../assets/color/photo_2023-06-18_11-42-59.jpg';
import picture666 from '../../../assets/color/photo_2023-08-17_19-51-55.jpg';
import pic11 from '../../../assets/watercolor/1.jpg';
import pic22 from '../../../assets/watercolor/photo_2023-05-14_18-21-15.jpg';
import pic33 from '../../../assets/watercolor/photo_2023-05-19_22-40-43.jpg';
import pic44 from '../../../assets/watercolor/photo_2023-06-24_22-50-56.jpg';
import pic55 from '../../../assets/watercolor/photo_2023-07-04_21-01-54.jpg';
import pic66 from '../../../assets/watercolor/photo_2023-07-16_21-30-43.jpg';
import pict1 from '../../../assets/coverUp/1.png';
import pict2 from '../../../assets/coverUp/2.png';
import pict3 from '../../../assets/coverUp/3.png';
import pict4 from '../../../assets/coverUp/4.png';
import pict5 from '../../../assets/coverUp/5.png';
import pict6 from '../../../assets/coverUp/6.png';
import './_gallery.scss';
import { useTranslation } from "react-i18next";

const Gallery = () => {
    const { t } = useTranslation()
    const [activeTab, setActiveTab] = useState("realism");

    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
        console.log(tabId);
    };

    const galleryRef = useRef<HTMLDivElement | null>(null);
    const gridRef = useRef<HTMLDivElement | null>(null);
    const realism = [
        pic1,
        pic2,
        pic3,
        pic4,
        pic5,
        pic6,
        pic7,
        pic8,
        pic9,
    ]
    const minimal = [
        picture1,
        picture2,
        picture3,
        picture4,
        picture5,
        picture6,
        picture7,
    ];
      const fineLine = [
        picture11,
        picture22,
        picture33,
        picture44,
        picture55,
        picture66,
        picture77,
        picture88,
    ];
    const color = [
        picture111,
        picture222,
        picture333,
        picture444,
        picture555,
        picture666,
    ];
    const watercolor = [
        pic11,
        pic22,
        pic33,
        pic44,
        pic55,
        pic66,
    ];
    const coverUp = [
        pict1,
        pict2,
        pict3,
        pict4,
        pict5,
        pict6
    ]
    return (
        <div className='gallerySection'>
            <div className="container">
                <div className='col-sm-10 col-md-10 col-lg-10 text-center justify-content-center mx-auto mb-5'>
                    <h2 className="fw-bold galleryTitle">{t('gallery')}</h2>
                    <p className='galleryText'>{t('galleryText')}</p>
                </div>
                <div className="tab-navigation justify-content-center">
                    <button
                        className={`tab-btn ${activeTab === "realism" ? "active" : ""}`}
                        onClick={() => handleTabClick("realism")}
                        data-tab="realism"
                    >{t('Realistic')}
                    </button>
                    <button
                        className={`tab-btn ${activeTab === "Minimal" ? "active" : ""}`}
                        data-tab="category1"
                        onClick={() => handleTabClick("Minimal")}
                    >Minimal</button>
                    <button
                        className={`tab-btn ${activeTab === "CoverUp" ? "active" : ""}`}
                        onClick={() => handleTabClick("CoverUp")}
                        data-tab="CoverUp"
                    >{t('CoverUp')}</button>
                    <button
                        className={`tab-btn ${activeTab === "WaterColor" ? "active" : ""}`}
                        onClick={() => handleTabClick("WaterColor")}
                        data-tab="WaterColor"
                    >{t('WaterColor')}</button>
                    <button
                        className={`tab-btn ${activeTab === "Colorful" ? "active" : ""}`}
                        onClick={() => handleTabClick("Colorful")}
                        data-tab="Colorful"
                    >{t('Colorful')}</button>
                    <button
                        className={`tab-btn ${activeTab === "FineLine" ? "active" : ""}`}
                        onClick={() => handleTabClick("FineLine")}
                        data-tab="FineLine"
                    >{t('FineLine')}</button>
                </div>
                <div className='tab-content-container' ref={galleryRef}>
                <div className="scroll-right"></div>
                    <div className={`tab-content ${activeTab === "realism" ? "active" : ""}`} id="realism" >
                        <div className="grid-container" ref={gridRef}>
                            {realism.map((item, index) => (
                                <div className="grid-item" key={index}>
                                    <img src={item} alt="" />
                                </div>
                            ))}
                            <div className="grid-item">
                                <img src={pic1} alt="" />
                            </div>
                         
                        </div>
                    </div>
                    <div className={`tab-content ${activeTab === "Minimal" ? "active" : ""}`} id="Minimal">
                        <div className="grid-container">
                            {minimal.map((item, index) => (
                          <div className="grid-item" key={index}>
                                <img src={item} alt="" />
                            </div> ))}
                        </div>
                    </div>
                    <div className={`tab-content ${activeTab === "CoverUp" ? "active" : ""}`} id="CoverUp">
                      
                        <div className="grid-container">
                        {coverUp.map((item, index) => ( 
                            <div className="grid-item" key={index}>
                                <img src={item} alt="" />
                            </div>
                                   ))}
                        </div>
                   
                    </div>
                    <div className={`tab-content ${activeTab === "WaterColor" ? "active" : ""}`} id="WaterColor">
                        <div className="grid-container">
                            {watercolor.map((item, index) => (
                            <div className="grid-item" key={index}>
                                <img src={item} alt="" />
                            </div>))}
                        </div>
                    </div>
                    <div className={`tab-content ${activeTab === "Colorful" ? "active" : ""}`} id="Colorful">
                        <div className="grid-container">
                            {color.map((item, index) => (
                            <div className="grid-item" key={index}>
                                <img src={item} alt="" />
                            </div>))}
                        </div>
                    </div>
                    <div className={`tab-content ${activeTab === "FineLine" ? "active" : ""}`} id="ColorFineLineful">
                        <div className="grid-container">
                            {fineLine.map((item, index) => (
                            <div className="grid-item" key={index}>
                                <img src={item} alt="" />
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;