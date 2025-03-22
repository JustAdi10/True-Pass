import React, { createContext, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (event) => {
    setCart((prevCart) => [...prevCart, event]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

const PageContainer = styled.div`
  min-height: calc(100vh - 64px);
  padding: 32px 24px;
  max-width: 1200px;
  margin: 0 auto;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  margin-bottom: 16px;
`;

const CartTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 24px;
`;

const CartPage = () => {
  const { cart } = useCart();

  return (
    <PageContainer>
      <CartTitle>Shopping Cart</CartTitle>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <CartItem key={index}>
            <span>{item.eventName}</span>
            <span>{item.price}</span>
          </CartItem>
        ))
      )}
      <Link to="/events">Continue Shopping</Link>
    </PageContainer>
  );
};

export default CartPage;
