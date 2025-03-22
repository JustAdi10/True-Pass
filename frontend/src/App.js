import React, { useEffect } from 'react';
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
import CartPage from "./pages/CartPage";

function App() {
  useEffect(() => {
    // Function to inject a script dynamically
    const loadScript = (src) => {
      if (!document.querySelector(`script[src="${src}"]`)) {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        document.body.appendChild(script);
      }
    };

    // Inject BotPress scripts
    loadScript("https://cdn.botpress.cloud/webchat/v2.2/inject.js");
    loadScript("https://files.bpcontent.cloud/2025/03/09/14/20250309140752-2BXBGDP5.js");
  }, []); // Runs only once when the component mounts

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
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
