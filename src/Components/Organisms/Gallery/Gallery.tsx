import { useRef, useState } from 'react';

import tattoo1 from '../../../assets/tattoo.jpeg';
import tattoo2 from '../../../assets/tattoo2.jpeg';
import tattoo3 from '../../../assets/tattoo3.jpeg';
import tattoo4 from '../../../assets/tattoo4.jpeg';
import tattoo5 from '../../../assets/tattoo5.jpeg';
import tattoo6 from '../../../assets/tattoo6.jpeg';
import tattoo7 from '../../../assets/ıııı.jpg';

import './_gallery.scss';
import { useTranslation } from "react-i18next";

const Gallery = () => {
    const { t } = useTranslation()
    const [activeTab, setActiveTab] = useState("category2");

    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
        console.log(tabId);
    };

    const galleryRef = useRef<HTMLDivElement | null>(null);
    const gridRef = useRef<HTMLDivElement | null>(null);

    const isMobile = window.innerWidth <= 991;

    return (
        <div className='gallerySection'>
            <div className="container">
                <div className='col-sm-10 col-md-10 col-lg-10 text-center justify-content-center mx-auto mb-5'>
                    <h2 className="fw-bold galleryTitle">{t('gallery')}</h2>
                    <p className='galleryText'>{t('galleryText')}</p>
                </div>
                <div className="tab-navigation justify-content-center">
                    <button
                        className={`tab-btn ${activeTab === "category2" ? "active" : ""}`}
                        onClick={() => handleTabClick("category2")}
                        data-tab="category2"
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
                 
                <div className={activeTab == "category2" || isMobile ? "scroll-right" : ""}></div>
                    <div className={`tab-content ${activeTab === "category2" ? "active" : ""}`} id="category2" >
                        <div className="grid-container" ref={gridRef}>
                            <div className="grid-item">
                                <img src={tattoo4} alt="" />
                            </div>
                            <div className="grid-item">
                                <img src={tattoo5} alt="" />
                            </div>
                            <div className="grid-item">
                                <img src={tattoo6} alt="" />
                            </div>
                            <div className="grid-item">
                                <img src={tattoo7} alt="" />
                            </div>
                            <div className="grid-item">
                                <img src={tattoo7} alt="" />
                            </div>
                            <div className="grid-item">
                                <img src={tattoo7} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={`tab-content ${activeTab === "Minimal" ? "active" : ""}`} id="Minimal">
                        <div className="grid-container">
                            <div className="grid-item">
                                <img src={tattoo1} alt="" />
                            </div>
                            <div className="grid-item">
                                <img src={tattoo2} alt="" />
                            </div>
                            <div className="grid-item">
                                <img src={tattoo3} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={`tab-content ${activeTab === "CoverUp" ? "active" : ""}`} id="CoverUp">
                        <div className="grid-container">
                            <div className="grid-item">
                                <img src={tattoo7} alt="" />
                            </div>
                            <div className="grid-item">
                                <img src={tattoo7} alt="" />
                            </div>
                            <div className="grid-item">
                                <img src={tattoo7} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={`tab-content ${activeTab === "WaterColor" ? "active" : ""}`} id="WaterColor">
                        <div className="grid-container">
                            <div className="grid-item">
                                <img src={tattoo7} alt="" />
                            </div>
                            <div className="grid-item">
                                <img src={tattoo7} alt="" />
                            </div>
                            <div className="grid-item">
                                <img src={tattoo7} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={`tab-content ${activeTab === "Colorful" ? "active" : ""}`} id="Colorful">
                        <div className="grid-container">
                            <div className="grid-item">
                                <img src={tattoo7} alt="" />
                            </div>
                            <div className="grid-item">
                                <img src={tattoo7} alt="" />
                            </div>
                            <div className="grid-item">
                                <img src={tattoo7} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={`tab-content ${activeTab === "FineLine" ? "active" : ""}`} id="ColorFineLineful">
                        <div className="grid-container">
                            <div className="grid-item">
                                <img src={tattoo7} alt="" />
                            </div>
                            <div className="grid-item">
                                <img src={tattoo7} alt="" />
                            </div>
                            <div className="grid-item">
                                <img src={tattoo7} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;