// src/pages/Contact.js

import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <div className="contact-column">
          <h4>CONTACTANOS</h4>
          <p>Atención telefónica</p>
          <p><strong>(591) 3-3419606</strong></p>
          <p>Consultas y reclamos</p>
          <p><strong>consultas@icnorte.com</strong></p>
          <p>Seguinos en:</p>
          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
        <div className="contact-column">
          <h4>AYUDA</h4>
          <p>Preguntas frecuentes</p>
          <p>Medios de pago</p>
          <p>Términos y condiciones</p>
          <p>Política de privacidad</p>
          <p>Formulario de contacto</p>
          <p>Mundo IC Norte</p>
        </div>
        <div className="contact-column">
          <h4>MIS COMPRAS</h4>
          <p>Envíos y entregas</p>
        </div>
      </div>

      <div className="maps-section">
        <h2>Nuestras Ubicaciones</h2>
        <div className="maps-container">
          <div className="map-item">
            <p>Av. America esq. Av. Pando Cochabamba, Bolivia</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.812518484483!2d-66.15367202477871!3d-17.372752183511892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e3755758a1113d%3A0x6b2f5a63b6f126f9!2sIC%20Norte%20Am%C3%A9rica!5e0!3m2!1ses!2sbo!4v1730447790254!5m2!1ses!2sbo"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="IC Norte América"
            ></iframe>
          </div>
          <div className="map-item">
            <p>Av. D'orbign esq. Melchor Perez Olguin Cochabamba, Bolivia</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.4854574996584!2d-66.18458721948807!3d-17.388475240951834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e375f245cceb6d%3A0xaffd3557e583f81f!2sIC%20Norte!5e0!3m2!1ses!2sbo!4v1730447747863!5m2!1ses!2sbo"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="IC Norte D'Orbigni"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
