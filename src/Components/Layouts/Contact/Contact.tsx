import { useState } from "react";
import tattoo from '../../../assets/tattoo10.jpeg';
import './_contact.scss'
import { useTranslation } from "react-i18next";

const Contact = () => {
    const { t } = useTranslation()
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setStatusMessage("Gönderiliyor...");

    try {
      const response = await fetch("https://poseidonink.com/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData),
        mode: "cors",
      });

      const result = await response.json();
      setStatusMessage(result.message);

      if (result.success) {
        setFormData({ name: "", email: "", phone: "", message: "" });
      }
    } catch (error) {
      setStatusMessage("❌ Mesaj gönderilirken hata oluştu. Lütfen tekrar deneyin.");
    }
  };

  return (
    <div className="container sectionContact">
        <h2 className="text-center mb-5">{t('contact')}</h2>
        <div className="contactPageTop row justify-content-center">
        <div className="fade-in col-5 col-sm-5 col-md-3 col-lg-3">
          <div className="row">
            <div className="row justify-content-center">
            <div className="rounded-circle bg-info p-3 d-flex justify-content-center align-items-center mb-2 contactPageCard">
            <i className="fa-solid fa-location-dot"></i>
            </div>
            <p className="text-center contactPageCardFont">Aydın / Didim
            </p>
            </div>
          </div>
        </div>
        <div className="fade-in col-5 col-sm-5 col-md-3 col-lg-3">
          <div className="row">
            <div className="row justify-content-center">
            <div className="rounded-circle bg-info p-3 d-flex justify-content-center align-items-center mb-2 contactPageCard" >
            <i className="fa-solid fa-phone-volume"></i>            
            </div>
            <p className="text-center contactPageCardFont">{t('phone')}<br />
            <a target="_blank" className="text-white fw-bold" href="tel:+905551234567">+90 555 123 45 67</a>
            </p>
            </div>
          </div>
        </div>
        <div className="fade-in col-5 col-sm-5 col-md-3 col-lg-3">
          <div className="row">
            <div className="row justify-content-center">
            <div className="rounded-circle bg-info p-3 d-flex justify-content-center align-items-center mb-2 contactPageCard" >
            <i className="fa-solid fa-envelope"></i>            
            </div>
            <p className="text-center text-break contactPageCardFont">{t('email')} <br />
              <a className="text-white unstyled fw-bold text-break" target="_blank" href="mailto:info@poseidonink.com">info@poseidonink.com</a> 
            </p>
            </div>
          </div>
        </div>
        <div className="fade-in col-5 col-sm-5 col-md-3 col-lg-3">
          <div className="row">
            <div className="row justify-content-center">
            <div className="rounded-circle bg-info p-3 d-flex justify-content-center align-items-center mb-2 contactPageCard">
            <i className="fa-brands fa-square-instagram"></i>            </div>
            <p className="text-center contactPageCardFont">Instagram<br />
              <a target="_blank"className="text-black fw-bold text-break"  href="https://www.instagram.com/poseidonink/">&nbsp;@poseidonink
              </a> 
            </p>
            </div>
          </div>
        </div>
        </div>
        <div className="shadow p-0 contactPageContact d-flex flex-wrap justify-content-center">
        <div className="fade-in p-5 col-lg-5 col-md-6 col-sm-12 d-flex align-items-center bg-white">
          <div className="w-100">
          <h2 className="mb-5 text-secondary">{t('contactus')}</h2>
          {statusMessage && (
            <div className={`alert ${statusMessage.includes("başarıyla") ? "alert-success" : "alert-danger"}`}>
              {statusMessage}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="d-flex flex-wrap gap-2">
            <div className="mb-3 col-lg-4 col-md-12 col-sm-12">
              <label className="fw-bold mb-2 text-secondary">ADINIZ SOYADINIZ:</label>
              <input 
              type="text" 
              name="name" 
              className="form-control border-0 border-bottom" 
              value={formData.name} 
              placeholder="Adınız"
              onChange={handleChange} 
              required />
            </div>
            <div className="mb-3 col-lg-4 col-md-12 col-sm-12">
              <label className="fw-bold mb-2 text-secondary">TELEFON NUMARASI:</label>
              <input 
              type="tel" 
              name="phone" 
              className="form-control border-0 border-bottom" 
              value={formData.phone} 
              onChange={handleChange} 
              placeholder="+90 555 123 45 67"
              required />
            </div>
            </div>
            <div className="mb-3">
              <label className="fw-bold mb-2 text-secondary text-uppercase">{t('email')}:</label>
              <input type="email" 
              name="email" 
              className="form-control border-0 border-bottom" 
              value={formData.email} 
              placeholder="info@poseidonink.com"
              onChange={handleChange} required />
            </div>
            <div className="mb-5">
              <label className="fw-bold mb-2 text-secondary">{t('message')}:</label>
              <textarea name="message" className="form-control border-0 border-bottom" rows={4} value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="animated-button btn btn-info d-flex btn-lg align-items-center">{t('Send')}</button>
          </form>
          </div>
        </div>
        <div className="fade-in col-lg-4 col-md-6 col-sm-12 d-flex overflow-hidden ">
          <img src={tattoo} width={400} alt="" className="contactImg img-fluid rounded-end rounded-right"/>
        </div>
        </div>
    </div>
  );
};

export default Contact;
