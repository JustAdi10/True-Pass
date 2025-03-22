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
import CartPage from "./pages/CartPage"; 
import OrgLogin from './pages/OrganizerLogin';
import Login from './pages/AttendeeLogin';
import RoleSelection from './pages/RoleSelection';



//import CartContextObj from './context/cartContext';



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
          <Route path="/cart" element={<CartPage />} />
          <Route path="/organizer/login" element={<OrgLogin />} />
          <Route path="/attendee/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;