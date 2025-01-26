import React from 'react';
import './MascotasPage.css'; // Asegúrate de crear este archivo CSS para estilos específicos de esta página

// Componente de Producto para Mascotas
function MascotaItem({ image, name, description, price }) {
  return (
    <div className="mascota-item">
      <img src={image} alt={name} className="mascota-image" />
      <h3>{name}</h3>
      <p>{description}</p>
      <span className="mascota-price">${price}</span>
      <button className="mascota-add-button">Agregar al carrito</button>
    </div>
  );
}

// Lista de productos de mascotas de ejemplo
const productosMascotas = [
  {
    image: '/assets/images/alimento_perro.png', // Asegúrate de que las imágenes estén en la ruta correcta
    name: 'Alimento para Perros',
    description: 'Comida balanceada para perros de todas las edades.',
    price: 15.00,
  },
  {
    image: '/assets/images/alimento_gato.png',
    name: 'Alimento para Gatos',
    description: 'Alimento premium para gatos adultos.',
    price: 12.00,
  },
  {
    image: '/assets/images/juguete_perro.png',
    name: 'Juguete para Perros',
    description: 'Juguete resistente y duradero para perros activos.',
    price: 8.50,
  },
];

function MascotasPage() {
  return (
    <div className="mascotas-page">
      <h2>Productos para Mascotas</h2>
      <p>Descubre nuestra variedad de productos para el cuidado de tus mascotas.</p>
      
      <div className="mascotas-grid">
        {productosMascotas.map((producto, index) => (
          <MascotaItem
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

export default MascotasPage;
