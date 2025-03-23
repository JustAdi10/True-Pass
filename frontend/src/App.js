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
import RoleSelection from './pages/RoleSelection';
import AttendeeLogin from './pages/AttendeeLogin'; // Import AttendeeLogin
import OrganizerLogin from './pages/OrganizerLogin'; // Import OrganizerLogin

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
    loadScript("https://files.bpcontent.cloud/2025/03/22/16/20250322163818-GEG8L1FS.js");
  }, []); // Runs only once when the component mounts

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<RoleSelection />} /> {/* Set RoleSelection as the default route */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/event/:eventId" element={<EventDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/attendee/login" element={<AttendeeLogin />} /> {/* Attendee Login route */}
          <Route path="/organizer/login" element={<OrganizerLogin />} /> {/* Organizer Login route */}
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;