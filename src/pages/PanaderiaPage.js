import React from 'react';
import './PanaderiaPage.css'; // Asegúrate de crear este archivo CSS para los estilos específicos de esta página

// Componente de Producto de Panadería (puedes adaptarlo para incluir imagen, precio y detalles)
function PanaderiaItem({ image, name, description, price }) {
  return (
    <div className="panaderia-item">
      <img src={image} alt={name} className="panaderia-image" />
      <h3>{name}</h3>
      <p>{description}</p>
      <span className="panaderia-price">${price}</span>
      <button className="panaderia-add-button">Agregar al carrito</button>
    </div>
  );
}

// Lista de productos de panadería de ejemplo
const productosPanaderia = [
  {
    image: '/assets/images/pan.png', // Asegúrate de que las imágenes estén en la ruta correcta
    name: 'Pan de Molde',
    description: 'Pan suave y fresco, ideal para sándwiches.',
    price: 1.50,
  },
  {
    image: '/assets/images/donas.png',
    name: 'Donas Glaseadas',
    description: 'Deliciosas donas con glaseado de azúcar.',
    price: 0.99,
  },
  {
    image: '/assets/images/pastel.png',
    name: 'Pastel de Chocolate',
    description: 'Pastel esponjoso con cobertura de chocolate.',
    price: 3.99,
  },
];

function PanaderiaPage() {
  return (
    <div className="panaderia-page">
      <h2>Panadería y Repostería</h2>
      <p>Descubre nuestra selección de productos frescos de panadería y repostería.</p>
      
      <div className="panaderia-grid">
        {productosPanaderia.map((producto, index) => (
          <PanaderiaItem
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

export default PanaderiaPage;
