// src/components/OfferList.js

import React from 'react';
import OfferItem from './OfferItem';
import './OfferList.css';

function OfferList() {
  const offers = [
    { id: 1, name: "Producto en Oferta 1", originalPrice: 30, offerPrice: 15, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Producto en Oferta 2", originalPrice: 50, offerPrice: 25, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Producto en Oferta 3", originalPrice: 80, offerPrice: 40, image: "https://via.placeholder.com/150" },
    { id: 4, name: "Producto en Oferta 4", originalPrice: 60, offerPrice: 30, image: "https://via.placeholder.com/150" },
    { id: 5, name: "Producto en Oferta 5", originalPrice: 70, offerPrice: 35, image: "https://via.placeholder.com/150" },
    { id: 6, name: "Producto en Oferta 6", originalPrice: 90, offerPrice: 45, image: "https://via.placeholder.com/150" },
    { id: 7, name: "Producto en Oferta 7", originalPrice: 100, offerPrice: 50, image: "https://via.placeholder.com/150" },
    { id: 8, name: "Producto en Oferta 8", originalPrice: 40, offerPrice: 20, image: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="offer-list">
      {offers.map((offer) => (
        <OfferItem key={offer.id} offer={offer} />
      ))}
    </div>
  );
}

export default OfferList;
