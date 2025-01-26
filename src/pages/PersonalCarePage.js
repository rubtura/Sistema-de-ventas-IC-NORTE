import React from 'react';
import './PersonalCarePage.css'; // Asegúrate de crear este archivo CSS para estilos específicos de esta página

// Componente de Producto de Cuidado Personal
function PersonalCareItem({ image, name, description, price }) {
  return (
    <div className="personal-care-item">
      <img src={image} alt={name} className="personal-care-image" />
      <h3>{name}</h3>
      <p>{description}</p>
      <span className="personal-care-price">${price}</span>
      <button className="personal-care-add-button">Agregar al carrito</button>
    </div>
  );
}

// Lista de productos de cuidado personal de ejemplo
const productosPersonalCare = [
  {
    image: '/assets/images/shampoo.png', // Asegúrate de que las imágenes estén en la ruta correcta
    name: 'Shampoo',
    description: 'Shampoo hidratante para todo tipo de cabello.',
    price: 5.00,
  },
  {
    image: '/assets/images/jabon.png',
    name: 'Jabón Corporal',
    description: 'Jabón suave con fragancia fresca para uso diario.',
    price: 1.50,
  },
  {
    image: '/assets/images/crema.png',
    name: 'Crema Hidratante',
    description: 'Crema hidratante para el cuidado de la piel.',
    price: 4.20,
  },
];

function PersonalCarePage() {
  return (
    <div className="personal-care-page">
      <h2>Cuidado Personal</h2>
      <p>Descubre nuestra gama de productos de cuidado personal.</p>
      
      <div className="personal-care-grid">
        {productosPersonalCare.map((producto, index) => (
          <PersonalCareItem
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

export default PersonalCarePage;
