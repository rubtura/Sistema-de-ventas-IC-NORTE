import React from 'react';
import './LacteosPage.css'; // Asegúrate de crear y personalizar este archivo CSS para el estilo específico de esta página

// Componente de Lácteo (puedes adaptarlo para incluir imagen, precio y detalles)
function LacteoItem({ image, name, description, price }) {
  return (
    <div className="lacteo-item">
      <img src={image} alt={name} className="lacteo-image" />
      <h3>{name}</h3>
      <p>{description}</p>
      <span className="lacteo-price">${price}</span>
      <button className="lacteo-add-button">Agregar al carrito</button>
    </div>
  );
}

// Lista de lácteos de ejemplo (puedes reemplazar esto con datos reales o una API)
const lacteos = [
  {
    image: '/assets/images/leche.png', // Asegúrate de que las imágenes estén en la ruta correcta
    name: 'Leche Entera',
    description: 'Leche entera de alta calidad, ideal para toda la familia.',
    price: 1.99,
  },
  {
    image: '/assets/images/yogurt.png',
    name: 'Yogurt Natural',
    description: 'Yogurt natural sin azúcares añadidos, perfecto para tus desayunos.',
    price: 0.99,
  },
  {
    image: '/assets/images/queso.png',
    name: 'Queso Cheddar',
    description: 'Queso cheddar suave y cremoso, ideal para sandwiches.',
    price: 2.99,
  },
];

function LacteosPage() {
  return (
    <div className="lacteos-page">
      <h2>Lácteos</h2>
      <p>Descubre nuestra variedad de productos lácteos frescos y de alta calidad.</p>
      
      <div className="lacteos-grid">
        {lacteos.map((lacteo, index) => (
          <LacteoItem
            key={index}
            image={lacteo.image}
            name={lacteo.name}
            description={lacteo.description}
            price={lacteo.price}
          />
        ))}
      </div>
    </div>
  );
}

export default LacteosPage;
