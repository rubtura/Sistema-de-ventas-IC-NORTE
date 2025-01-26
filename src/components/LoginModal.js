import React, { useState } from 'react';
import './LoginModal.css';

function LoginModal({ onClose }) {
  const [isRegister, setIsRegister] = useState(false);

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  const handleOverlayClick = (e) => {
    // Cierra el modal solo si el clic fue en el overlay, no en el formulario
    if (e.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <h2>{isRegister ? 'Registrarse' : 'Iniciar Sesión'}</h2>
        <form>
          {isRegister && (
            <>
              <label htmlFor="nombres">Nombres</label>
              <input id="nombres" type="text" placeholder="Nombres" required />

              <label htmlFor="apellidos">Apellidos</label>
              <input id="apellidos" type="text" placeholder="Apellidos" required />

              <label htmlFor="usuario">Usuario</label>
              <input id="usuario" type="text" placeholder="Usuario" required />

              <label htmlFor="carnet">Carnet</label>
              <input id="carnet" type="text" placeholder="Carnet" required />

              <label htmlFor="celular">Celular</label>
              <input id="celular" type="text" placeholder="Celular" required />
            </>
          )}
          <label htmlFor="email">Correo Electrónico</label>
          <input id="email" type="email" placeholder="Correo Electrónico" required />

          <label htmlFor="password">Contraseña</label>
          <input id="password" type="password" placeholder="Contraseña" required />

          <button type="submit">{isRegister ? 'Registrarse' : 'Iniciar Sesión'}</button>
        </form>
        <p onClick={toggleForm} className="toggle-form">
          {isRegister
            ? '¿Ya tienes una cuenta? Inicia sesión'
            : '¿No tienes cuenta? Regístrate'}
        </p>
      </div>
    </div>
  );
}

export default LoginModal;
