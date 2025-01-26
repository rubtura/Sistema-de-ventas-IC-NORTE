// src/components/OfferItem.js

import React from 'react';
import './OfferItem.css';

function OfferItem({ offer }) {
  return (
    <div className="offer-item">
      <div className="offer-tag">Oferta</div>
      <img src={offer.image} alt={offer.name} />
      <h3>{offer.name}</h3>
      <p>Precio Original: <span className="original-price">${offer.originalPrice}</span></p>
      <p>Precio de Oferta: <span className="offer-price">${offer.price}</span></p>
      <button>Comprar Ahora</button>
    </div>
  );
}

export default OfferItem;
