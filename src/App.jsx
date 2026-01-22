import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import FloatingActions from './components/FloatingActions';

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
        <FloatingActions />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
