import React from 'react';
import './BebidasPage.css'; // Asegúrate de crear y personalizar este archivo CSS para el estilo específico de esta página

// Componente de Bebida (puedes adaptarlo para incluir imagen, precio y detalles)
function BebidaItem({ image, name, description, price }) {
  return (
    <div className="bebida-item">
      <img src={image} alt={name} className="bebida-image" />
      <h3>{name}</h3>
      <p>{description}</p>
      <span className="bebida-price">${price}</span>
      <button className="bebida-add-button">Agregar al carrito</button>
    </div>
  );
}

// Lista de bebidas de ejemplo (puedes reemplazar esto con datos reales o una API)
const bebidas = [
  {
    image: '/assets/images/cerveza.png', // Asegúrate de que las imágenes estén en la ruta correcta
    name: 'Cerveza Artesanal',
    description: 'Cerveza artesanal premium, perfecta para cualquier ocasión.',
    price: 4.99,
  },
  {
    image: '/assets/images/vino.png',
    name: 'Vino Tinto',
    description: 'Vino tinto de la mejor calidad, ideal para cenas especiales.',
    price: 15.99,
  },
  {
    image: '/assets/images/refresco.png',
    name: 'Refresco de Cola',
    description: 'Refresco clásico, refrescante y delicioso.',
    price: 1.99,
  },
];

function BebidasPage() {
  return (
    <div className="bebidas-page">
      <h2>Bebidas y Licores</h2>
      <p>Explora nuestra amplia variedad de bebidas y licores de alta calidad.</p>
      
      <div className="bebidas-grid">
        {bebidas.map((bebida, index) => (
          <BebidaItem
            key={index}
            image={bebida.image}
            name={bebida.name}
            description={bebida.description}
            price={bebida.price}
          />
        ))}
      </div>
    </div>
  );
}

export default BebidasPage;
