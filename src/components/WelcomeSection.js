// src/components/WelcomeSection.js

import React from 'react';
import './WelcomeSection.css';
import welcomeImage from '../assets/images/welcome-image.jpg'; // Asegúrate de tener la imagen en esta ruta

function WelcomeSection() {
  return (
    <section className="welcome-section">
      <div className="welcome-content">
        <span className="discount-tag">Descuento de Apertura 50%</span>
        <h1 className="welcome-title">Supermercado Fresco Diario</h1>
        <p className="welcome-subtitle">
          Hemos introducido un nuevo modelo para compras de supermercado en línea y entrega conveniente a domicilio.
        </p>
        <button className="shop-now-button">Compra Ahora</button>
      </div>
      <div className="welcome-image">
        <img src={welcomeImage} alt="Productos frescos" />
      </div>
    </section>
  );
}

export default WelcomeSection;
