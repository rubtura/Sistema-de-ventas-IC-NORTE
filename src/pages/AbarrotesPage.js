import React from 'react';
import './AbarrotesPage.css'; // Asegúrate de crear este archivo CSS para los estilos específicos de esta página

// Componente de Producto de Abarrotes
function AbarrotesItem({ image, name, description, price }) {
  return (
    <div className="abarrotes-item">
      <img src={image} alt={name} className="abarrotes-image" />
      <h3>{name}</h3>
      <p>{description}</p>
      <span className="abarrotes-price">${price}</span>
      <button className="abarrotes-add-button">Agregar al carrito</button>
    </div>
  );
}

// Lista de productos de abarrotes de ejemplo
const productosAbarrotes = [
  {
    image: '/assets/images/arroz.png', // Asegúrate de que las imágenes estén en la ruta correcta
    name: 'Arroz',
    description: 'Arroz blanco de alta calidad, ideal para cualquier plato.',
    price: 1.20,
  },
  {
    image: '/assets/images/fideos.png',
    name: 'Fideos',
    description: 'Fideos enriquecidos, perfectos para tus recetas favoritas.',
    price: 0.90,
  },
  {
    image: '/assets/images/aceite.png',
    name: 'Aceite de Cocina',
    description: 'Aceite vegetal ideal para freír y cocinar.',
    price: 3.50,
  },
];

function AbarrotesPage() {
  return (
    <div className="abarrotes-page">
      <h2>Despensa y Abarrotes</h2>
      <p>Explora nuestra selección de productos de abarrotes esenciales.</p>
      
      <div className="abarrotes-grid">
        {productosAbarrotes.map((producto, index) => (
          <AbarrotesItem
            key={index}
            image={producto.image}
            name={producto.name}
            description={producto.description}
            price={producto.price}
          />
        ))}
      </div>
    </div>
  );
}

export default AbarrotesPage;
