import React from 'react';
import './CarnesPage.css'; // Asegúrate de crear este archivo CSS para estilos específicos de esta página

// Componente de Producto de Carnes
function CarneItem({ image, name, description, price }) {
  return (
    <div className="carne-item">
      <img src={image} alt={name} className="carne-image" />
      <h3>{name}</h3>
      <p>{description}</p>
      <span className="carne-price">${price}</span>
      <button className="carne-add-button">Agregar al carrito</button>
    </div>
  );
}

// Lista de productos de carnes de ejemplo
const productosCarnes = [
  {
    image: '/assets/images/carne_vacuna.png', // Asegúrate de que las imágenes estén en la ruta correcta
    name: 'Carne de Res',
    description: 'Carne de res fresca y de alta calidad.',
    price: 10.00,
  },
  {
    image: '/assets/images/fiambre.png',
    name: 'Fiambre de Cerdo',
    description: 'Fiambre de cerdo ideal para sándwiches y bocadillos.',
    price: 5.50,
  },
  {
    image: '/assets/images/chorizo.png',
    name: 'Chorizo',
    description: 'Chorizo artesanal con un toque picante.',
    price: 3.20,
  },
];

function CarnesPage() {
  return (
    <div className="carnes-page">
      <h2>Carnes, Fiambres y Embutidos</h2>
      <p>Explora nuestra variedad de productos de carnes y embutidos.</p>
      
      <div className="carnes-grid">
        {productosCarnes.map((producto, index) => (
          <CarneItem
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

export default CarnesPage;
