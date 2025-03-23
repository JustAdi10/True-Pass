import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaTrash, FaArrowLeft, FaMinus, FaPlus } from 'react-icons/fa';

// Styled components (same as before)
const CartContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 24px;
  
`;

const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  
`;

const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const CartTitle = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: ${props => props.theme.colors.text};
  
`;

const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 64px 0;
  text-align: center;
`;

const EmptyCartMessage = styled.p`
  font-size: 18px;
  color: ${props => props.theme.colors.textLight};
  margin-bottom: 24px;
`;

const CartList = styled.div`
  margin-bottom: 32px;
  
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  
  border-bottom: 1px solid ${props => props.theme.colors.border};
  
  &:last-child {
    border-bottom: none;
    color: orange ${props => props.theme.colors.text};
  }
`;

const ItemDetails = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const ItemImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.background};
  overflow: ;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ItemName = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.theme.colors.text};
`;

const ItemMeta = styled.div`
  font-size: 14px;
  color: ${props => props.theme.colors.textLight};
`;

const ItemPrice = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.theme.colors.text};
`;

const ItemActions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const DeleteButton = styled.button`
  background: white;
    border: 2px solid ${props => props.theme.colors.border};
  color: ${props => props.theme.colors.danger};
  width: 35px;
  height: 35px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    opacity: 0.8;
  }
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const QuantityButton = styled.button`
  background: white ;
  border: 2px solid ${props => props.theme.colors.border};
  border-radius: 4px;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.backgroundLight};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const QuantityText = styled.span`
  font-size: 20px;
  font-weight: 550;
  min-width: 24px;
  text-align: center;
`;

const CartSummary = styled.div`
  background-color: ${props => props.theme.colors.backgroundLight};
  border-radius: 8px;
  color: orange ${props => props.theme.colors.text};
  padding: 24px;
`;

const SummaryTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: orange ${props => props.theme.colors.text};
  margin-bottom: 16px;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  
  &:last-of-type {
    margin-bottom: 24px;
    padding-bottom: 12px;
    border-bottom: 1px solid ${props => props.theme.colors.border};
  }
`;

const SummaryLabel = styled.span`
  font-size: 16px;
  color: ${props => props.theme.colors.textLight};
`;

const SummaryValue = styled.span`
  font-size: 16px;
  font-weight: ${props => props.bold ? '600' : '400'};
  color: white ${props => props.theme.colors.text};
`;

const TotalItem = styled(SummaryItem)`
  font-weight: 600;
  font-size: 18px;
  margin-top: 16px;
  
`;

const CheckoutButton = styled.button`
  width: 100%;
  padding: 14px;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.dark};
  border: none;
  border-radius: 4px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
  
  &:disabled {
    background-color: ${props => props.theme.colors.border};
    cursor: not-allowed;
    transform: none;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ContinueShoppingButton = styled(Link)`
  display: block;
  text-align: center;
  padding: 14px;
  background-color: transparent;
  color: ${props => props.theme.colors.primary};
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 4px;
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

// Create a Cart utility module
// In a real application, this would be in a separate file like utils/cartUtils.js
const CartUtils = {
  // Get cart from localStorage
  getCart: () => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  },
  
  // Save cart to localStorage
  saveCart: (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
  },
  
  // Add item to cart
  addToCart: (item) => {
    const cart = CartUtils.getCart();
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    
    let updatedCart;
    if (existingItem) {
      // If item exists, update quantity
      updatedCart = cart.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: (cartItem.quantity || 1) + 1 } 
          : cartItem
      );
    } else {
      // Add new item with quantity 1
      updatedCart = [...cart, { ...item, quantity: 1 }];
    }
    
    CartUtils.saveCart(updatedCart);
    return updatedCart;
  },
  
  // Remove item from cart
  removeFromCart: (id) => {
    const cart = CartUtils.getCart();
    const updatedCart = cart.filter(item => item.id !== id);
    CartUtils.saveCart(updatedCart);
    return updatedCart;
  },
  
  // Update item quantity
  updateQuantity: (id, newQuantity) => {
    const cart = CartUtils.getCart();
    
    if (newQuantity <= 0) {
      return CartUtils.removeFromCart(id);
    }
    
    const updatedCart = cart.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    
    CartUtils.saveCart(updatedCart);
    return updatedCart;
  },
  
  // Get total item count
  getItemCount: () => {
    const cart = CartUtils.getCart();
    return cart.reduce((count, item) => count + (item.quantity || 1), 0);
  }
};

// Create a custom hook for cart management
const useCart = () => {
  const [cart, setCart] = useState([]);
  
  // Load cart from localStorage on initial render
  useEffect(() => {
    setCart(CartUtils.getCart());
  }, []);
  
  // Add item to cart
  const addToCart = (item) => {
    const updatedCart = CartUtils.addToCart(item);
    setCart(updatedCart);
  };
  
  // Remove item from cart
  const removeFromCart = (id) => {
    const updatedCart = CartUtils.removeFromCart(id);
    setCart(updatedCart);
  };
  
  // Update item quantity
  const updateQuantity = (id, newQuantity) => {
    const updatedCart = CartUtils.updateQuantity(id, newQuantity);
    setCart(updatedCart);
  };
  
  // Get total item count
  const getItemCount = () => {
    return CartUtils.getItemCount();
  };
  
  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    getItemCount
  };
};

// Component for the Purchase Ticket button (to be used in event detail pages)
export const PurchaseTicketButton = ({ event }) => {
  const navigate = useNavigate();
  
  const handlePurchase = () => {
    // Add event to cart
    CartUtils.addToCart(event);
    
    // Navigate to cart page
    navigate('/cart');
  };
  
  return (
    <button 
      onClick={handlePurchase}
      style={{
        width: '100%',
        padding: '14px',
        backgroundColor: '#D2691E', // Use your theme color
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        fontWeight: '600',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'all 0.2s ease'
      }}
    >
      Purchase Ticket
    </button>
  );
};

// CartPage component
const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, getItemCount } = useCart();
  
  // Calculate cart totals
  const subtotal = cart.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);
  const serviceFee = subtotal * 0.005; // 5% service fee
  const total = subtotal + serviceFee;
  
  // Calculate total number of items
  const itemCount = getItemCount();
  
  return (
    <CartContainer>
      <CartHeader>
        <BackButton to="/">
          <FaArrowLeft />
          Continue Shopping
        </BackButton>
        <CartTitle>Your Cart ({itemCount} items)</CartTitle>
      </CartHeader>
      
      {cart.length === 0 ? (
        <EmptyCart>
          <EmptyCartMessage>Your cart is empty</EmptyCartMessage>
          <ContinueShoppingButton to="/">Browse Events</ContinueShoppingButton>
        </EmptyCart>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '32px' }}>
          <CartList>
            {cart.map(item => (
              <CartItem key={item.id}>
                <ItemDetails>
                  <ItemImage>
                    <img src={item.image || "./images/fest_1.jpeg"} alt={item.name} />
                  </ItemImage>
                  <ItemInfo>
                    <ItemName>{item.name}</ItemName>
                    <ItemMeta>{item.date || 'No date'} • {item.venue || 'No venue'}</ItemMeta>
                    {item.cryptoPrice && (
                      <ItemMeta>Price: {item.cryptoPrice} {item.cryptoCurrency || 'USD'}</ItemMeta>
                    )}
                  </ItemInfo>
                </ItemDetails>
                <ItemActions>
                  <QuantityControl>
                    <QuantityButton 
                      onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                      disabled={(item.quantity || 1) <= 1}
                    >
                      <FaMinus size={12} />
                    </QuantityButton>
                    <QuantityText>{item.quantity || 1}</QuantityText>
                    <QuantityButton onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}>
                      <FaPlus size={12} />
                    </QuantityButton>
                  </QuantityControl>
                  <ItemPrice>
                    {item.cryptoPrice 
                      ? `${(item.cryptoPrice * (item.quantity || 1)).toFixed(2)} ${item.cryptoCurrency || 'USD'}`
                      : `$${((item.price || 0) * (item.quantity || 1)).toFixed(2)}`
                    }
                  </ItemPrice>
                  <DeleteButton onClick={() => removeFromCart(item.id)}>
                    <FaTrash size={18} />
                  </DeleteButton>
                </ItemActions>
              </CartItem>
            ))}
          </CartList>
          
          <CartSummary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryLabel>Subtotal</SummaryLabel>
              <SummaryValue>
                {cart[0]?.cryptoPrice 
                  ? `${subtotal.toFixed(2)} ${cart[0]?.cryptoCurrency || 'USD'}`
                  : `$${subtotal.toFixed(2)}`
                }
              </SummaryValue>
            </SummaryItem>
            <SummaryItem>
              <SummaryLabel>Service Fee (5%)</SummaryLabel>
              <SummaryValue>
                {cart[0]?.cryptoPrice 
                  ? `${serviceFee.toFixed(2)} ${cart[0]?.cryptoCurrency || 'USD'}`
                  : `$${serviceFee.toFixed(2)}`
                }
              </SummaryValue>
            </SummaryItem>
            <TotalItem>
              <SummaryLabel>Total</SummaryLabel>
              <SummaryValue bold>
                {cart[0]?.cryptoPrice 
                  ? `${total.toFixed(2)} ${cart[0]?.cryptoCurrency || 'USD'}`
                  : `$${total.toFixed(2)}`
                }
              </SummaryValue>
            </TotalItem>
            
            <ButtonsContainer>
              <CheckoutButton onClick={() => window.location.href = '../payment.html'}>
                Proceed to Checkout
              </CheckoutButton>
              <ContinueShoppingButton to="/">Continue Shopping</ContinueShoppingButton>
            </ButtonsContainer>
          </CartSummary>
        </div>
      )}
    </CartContainer>
  );
};

export default CartPage;