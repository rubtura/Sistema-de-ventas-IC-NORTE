import React from 'react';
import './LimpiezaPage.css'; // Crea este archivo CSS para los estilos específicos de esta página

// Componente de Producto de Limpieza (puedes adaptarlo para incluir imagen, precio y detalles)
function LimpiezaItem({ image, name, description, price }) {
  return (
    <div className="limpieza-item">
      <img src={image} alt={name} className="limpieza-image" />
      <h3>{name}</h3>
      <p>{description}</p>
      <span className="limpieza-price">${price}</span>
      <button className="limpieza-add-button">Agregar al carrito</button>
    </div>
  );
}

// Lista de productos de limpieza de ejemplo
const productosLimpieza = [
  {
    image: '/assets/images/detergente.png', // Asegúrate de que las imágenes estén en la ruta correcta
    name: 'Detergente en Polvo',
    description: 'Detergente de alta eficiencia para ropa.',
    price: 3.49,
  },
  {
    image: '/assets/images/jabon.png',
    name: 'Jabón Líquido',
    description: 'Jabón líquido para manos con aroma refrescante.',
    price: 1.99,
  },
  {
    image: '/assets/images/desinfectante.png',
    name: 'Desinfectante Multiusos',
    description: 'Elimina el 99.9% de bacterias, ideal para superficies.',
    price: 2.49,
  },
];

function LimpiezaPage() {
  return (
    <div className="limpieza-page">
      <h2>Limpieza del Hogar</h2>
      <p>Explora nuestra gama de productos para mantener tu hogar limpio y fresco.</p>
      
      <div className="limpieza-grid">
        {productosLimpieza.map((producto, index) => (
          <LimpiezaItem
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

export default LimpiezaPage;
