import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import SearchBar from '../common/SearchBar';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background-color: ${props => props.theme.colors.dark};
  box-shadow: ${props => props.theme.shadows.small};
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  
  .logo-square {
    width: 32px;
    height: 32px;
    background-color: ${props => props.theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    font-weight: bold;
    color: ${props => props.theme.colors.dark};
  }
  
  .logo-text {
    font-size: 20px;
    font-weight: bold;
    color: white;
  }
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: ${props => props.primary ? props.theme.colors.primary : 'transparent'};
  color: ${props => props.primary ? props.theme.colors.dark : 'white'};
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.2s ease;
  border: ${props => props.primary ? 'none' : `1px solid ${props.theme.colors.primary}`};
  
  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
`;

const IconButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  transition: all 0.2s ease;
  
  &:hover {
    opacity: 0.7;
    transform: translateY(-1px);
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo>
          <div className="logo-square">TP</div>
          <div className="logo-text">TruePass</div>
        </Logo>
      </Link>
      
      <SearchBar placeholder="Search events, collections, and accounts" />
      
      <NavActions>
        <Button primary>Connect wallet</Button>
        <IconButton as={Link} to="/cart">
          <FaShoppingCart size={24} />
        </IconButton>
        <IconButton as={Link} to="/profile">
          <FaUser size={24} />
        </IconButton>
      </NavActions>
    </HeaderContainer>
  );
};

export default Header;