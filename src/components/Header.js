import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/images/logo.png';
import { FaShoppingCart, FaUser, FaHands } from 'react-icons/fa'; // Importamos el ícono de manos
import LoginModal from './LoginModal';

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignModalOpen, setIsSignModalOpen] = useState(false); // Estado para la pantalla de señas

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenSignModal = () => {
    setIsSignModalOpen(true);
  };

  const handleCloseSignModal = () => {
    setIsSignModalOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="IC Norte" />
        </Link>
      </div>
      <nav className="nav">
        <Link to="/" className="nav-link">Inicio</Link>
        <Link to="/categorias" className="nav-link">Categorías</Link>
        <Link to="/productos" className="nav-link">Productos</Link>
        <Link to="/ofertas" className="nav-link">Ofertas</Link>
        <Link to="/contacto" className="nav-link">Contacto</Link>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Buscar productos..." />
        <button>Buscar</button>
      </div>
      <div className="icons">
        <div className="cart-icon">
          <span className="cart-count">0</span>
          <FaShoppingCart />
        </div>
        <div className="user-icon" onClick={handleOpenModal}>
          <FaUser />
        </div>
        <div className="sign-icon" onClick={handleOpenSignModal}>
          <FaHands title="Reconocimiento de Lenguaje de Señas" />
        </div>
      </div>
      {isModalOpen && <LoginModal onClose={handleCloseModal} />}
      {isSignModalOpen && (
        <div className="modal-overlay" onClick={handleCloseSignModal}>
          <div className="sign-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleCloseSignModal}>
              X
            </button>
            <h2>Reconocimiento de Lenguaje de Señas</h2>
            <div className="video-container">
              {/* Integración de la cámara */}
              <video autoPlay playsInline muted id="camera-stream"></video>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
