// src/components/InitialScreen.js

import React, { useEffect } from "react";
import "./InitialScreen.css";

const InitialScreen = () => {
  useEffect(() => {
    const particleContainer = document.getElementById("particle-container");

    for (let i = 0; i < 50; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";

      const size = Math.random() * 10 + 5; // Tamaño aleatorio
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      particle.style.left = `${Math.random() * 100}%`; // Posición aleatoria
      particle.style.animationDuration = `${Math.random() * 5 + 5}s`; // Duración aleatoria
      particle.style.animationDelay = `${Math.random() * 10}s`; // Retraso aleatorio

      particleContainer.appendChild(particle);
    }
  }, []);

  return (
    <div className="initial-screen">
      <div id="particle-container" className="particle-background"></div>
      <div className="overlay">
        <div className="content">
          <h1 className="initial-title">Bienvenido a IC Norte</h1>
          <p className="initial-subtitle">
            Descubre una experiencia única de compras en línea.
          </p>
          <div className="initial-options">
            <a href="/home" className="initial-button">
              Entrar a la Página
            </a>
            <a href="/mapa" className="initial-button secondary">
              Ver Mapa
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InitialScreen;
