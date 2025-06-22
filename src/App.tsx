import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/layout/WhatsAppButton';
import HomePage from './pages/Home';
import CollectionsPage from './pages/Collections';
import AboutPage from './pages/About';
import OffersPage from './pages/Offers';
import { FilterProvider } from './contexts/FilterContext';

function App() {
  return (
    <Router>
      <FilterProvider>
        <div className="relative min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/collections" element={<CollectionsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/offers" element={<OffersPage />} />
            </Routes>
          </main>
          <WhatsAppButton />
          <Footer />
        </div>
      </FilterProvider>
    </Router>
  );
}

export default App;