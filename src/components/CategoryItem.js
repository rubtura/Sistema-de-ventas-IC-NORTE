import React from 'react';
import './CategoryItem.css';

function CategoryItem({ image, title, onClick }) {
  return (
    <div className="category-item" onClick={onClick} role="button" tabIndex="0">
      <img src={image} alt={title} />
      <span>{title}</span>
    </div>
  );
}

export default CategoryItem;
