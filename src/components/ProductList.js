// src/components/ProductList.js

import React from 'react';
import ProductItem from './ProductItem';
import './ProductList.css';

function ProductList() {
  const products = [
    { id: 1, name: "Producto 1", price: 10, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Producto 2", price: 20, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Producto 3", price: 30, image: "https://via.placeholder.com/150" },
    { id: 4, name: "Producto 4", price: 40, image: "https://via.placeholder.com/150" },
    { id: 5, name: "Producto 5", price: 50, image: "https://via.placeholder.com/150" },
    { id: 6, name: "Producto 6", price: 60, image: "https://via.placeholder.com/150" },
    { id: 7, name: "Producto 7", price: 70, image: "https://via.placeholder.com/150" },
    { id: 8, name: "Producto 8", price: 80, image: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="product-list">
      <h2>Productos</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
