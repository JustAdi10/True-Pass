// Updated src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import CategoryPage from './pages/CategoryPage';
import EventDetailPage from './pages/EventDetailPage';
import GlobalStyle from './styles/GlobalStyle';
import { theme } from './styles/theme';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/event/:eventId" element={<EventDetailPage />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;