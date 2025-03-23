import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/layout/HomeNavbar';
import Footer from '../components/layout/HomeFooter';
import Dashboard from './Dashboard';
import AddEvent from './AddEvent';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/host" element={<Dashboard />} /> {/* Add this route */}
            <Route path="/add-event" element={<AddEvent />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;