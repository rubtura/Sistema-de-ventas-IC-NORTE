import React from "react";
import "./SupermarketMap.css";

const SupermarketMap = () => {
  return (
    <div className="map-container">
      <h1 className="map-title">Mapa del Supermercado</h1>
      <div className="supermarket-layout">
        {/* Pasillo 1 */}
        <div className="aisle aisle-vertical">
          <span className="aisle-label">Frutas</span>
        </div>
        <div className="aisle aisle-vertical">
          <span className="aisle-label">Verduras</span>
        </div>

        {/* Pasillo 2 */}
        <div className="aisle aisle-horizontal">
          <span className="aisle-label">Panadería</span>
        </div>
        <div className="aisle aisle-horizontal">
          <span className="aisle-label">Snacks</span>
        </div>

        {/* Pasillo 3 */}
        <div className="aisle aisle-vertical">
          <span className="aisle-label">Limpieza</span>
        </div>
        <div className="aisle aisle-vertical">
          <span className="aisle-label">Carnes</span>
        </div>

        {/* Zona de Cajas */}
        <div className="checkout">
          <span className="checkout-label">Cajas</span>
        </div>
      </div>
    </div>
  );
};

export default SupermarketMap;
