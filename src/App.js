// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import InitialScreen from './components/InitialScreen'; // Importamos InitialScreen
import WelcomeSection from './components/WelcomeSection';
import ProductList from './components/ProductList';
import OfferList from './components/OfferList';
import CategoriesPage from './pages/CategoriesPage';
import Contact from './pages/Contact';
import BebidasPage from './pages/BebidasPage';
import LacteosPage from './pages/LacteosPage';
import LimpiezaPage from './pages/LimpiezaPage';
import PanaderiaPage from './pages/PanaderiaPage';
import AbarrotesPage from './pages/AbarrotesPage';
import PersonalCarePage from './pages/PersonalCarePage';
import CarnesPage from './pages/CarnesPage';
import MascotasPage from './pages/MascotasPage';
import OffersPage from './pages/OffersPage';
import SupermarketMap from './components/SupermarketMap'; // Importamos el componente del mapa
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Pantalla inicial con las opciones */}
        <Route path="/" element={<InitialScreen />} />

        {/* Ruta para la página principal completa */}
        <Route
          path="/home"
          element={
            <>
              <Header />
              <main className="main-content">
                <WelcomeSection />
                <OfferList />
                <ProductList />
              </main>
              <Footer />
            </>
          }
        />

        {/* Ruta para la página del mapa */}
        <Route
          path="/mapa"
          element={
            <>
              <Header /> {/* Si deseas que el mapa tenga el header */}
              <SupermarketMap />
              <Footer /> {/* Si deseas que el mapa tenga el footer */}
            </>
          }
        />

        {/* Otras rutas existentes */}
        <Route path="/categorias" element={<CategoriesPage />} />
        <Route path="/productos" element={<ProductList />} />
        <Route path="/ofertas" element={<OffersPage />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/bebidas-y-licores" element={<BebidasPage />} />
        <Route path="/lacteos" element={<LacteosPage />} />
        <Route path="/limpieza" element={<LimpiezaPage />} />
        <Route path="/panaderia" element={<PanaderiaPage />} />
        <Route path="/despensa" element={<AbarrotesPage />} />
        <Route path="/cuidado-personal" element={<PersonalCarePage />} />
        <Route path="/carnes" element={<CarnesPage />} />
        <Route path="/mascotas" element={<MascotasPage />} />
      </Routes>
    </Router>
  );
}

export default App;
