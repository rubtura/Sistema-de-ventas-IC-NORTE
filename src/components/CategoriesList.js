import React from 'react';
import CategoryItem from './CategoryItem';
import './CategoriesList.css';
import { useNavigate } from 'react-router-dom';
import bebidaIcon from '../assets/images/bebida.png';
import lacteosIcon from '../assets/images/lacteos.png';
import limpiezaIcon from '../assets/images/limpieza.png';
import panaderiaIcon from '../assets/images/panaderia.png';
import abarrotesIcon from '../assets/images/abarrotes.png';
import personalIcon from '../assets/images/cuidado_personal.png';
import carnesIcon from '../assets/images/carnes.png';
import mascotasIcon from '../assets/images/mascotas.png';

const categories = [
  { image: bebidaIcon, title: 'Bebidas y Licores', path: '/bebidas-y-licores' },
  { image: lacteosIcon, title: 'Lácteos', path: '/lacteos' },
  { image: limpiezaIcon, title: 'Limpieza del Hogar', path: '/limpieza' },
  { image: panaderiaIcon, title: 'Panadería y Repostería', path: '/panaderia' },
  { image: abarrotesIcon, title: 'Despensa y Abarrotes', path: '/despensa' },
  { image: personalIcon, title: 'Cuidado Personal', path: '/cuidado-personal' },
  { image: carnesIcon, title: 'Carnes, Fiambres y Embutidos', path: '/carnes' },
  { image: mascotasIcon, title: 'Mascotas', path: '/mascotas' },
];

function CategoriesList() {
  const navigate = useNavigate();

  return (
    <div className="categories-list">
      <h2>Categorías Populares</h2>
      <div className="categories-grid">
        {categories.map((category, index) => (
          <CategoryItem 
            key={index} 
            image={category.image} 
            title={category.title} 
            onClick={() => navigate(category.path)} // Navega a la ruta de la categoría
          />
        ))}
      </div>
    </div>
  );
}

export default CategoriesList;
