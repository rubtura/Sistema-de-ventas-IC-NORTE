// src/components/ProductItem.js

import React from 'react';
import './ProductItem.css';

function ProductItem({ product }) {
  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>Precio: ${product.price}</p>
    </div>
  );
}

export default ProductItem;
