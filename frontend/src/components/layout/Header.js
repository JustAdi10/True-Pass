import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import SearchBar from '../common/SearchBar';
import OrgLogin from '../../pages/OrganizerLogin';
import Login from '../../pages/AttendeeLogin';
import RoleSelection from '../../pages/RoleSelection';

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
  position: relative;
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
  position: relative;
  
  &:hover {
    opacity: 0.7;
    transform: translateY(-1px);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  background-color: white;
  box-shadow: ${props => props.theme.shadows.medium};
  border-radius: 4px;
  overflow: hidden;
  width: 160px;
  animation: ${fadeIn} 0.2s ease;
  display: ${props => (props.open ? 'block' : 'none')};
  z-index: 10;
`;

const itemHover = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const DropdownItem = styled.div`
  display: block;
  padding: 10px 16px;
  color: black;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
  &:hover {
    background: linear-gradient(90deg, ${props => props.theme.colors.lightGray}, white, ${props => props.theme.colors.lightGray});
    background-size: 200% 100%;
    animation: ${itemHover} 1.5s ease infinite;
    transform: translateX(5px);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${props => props.theme.colors.primary};
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  padding: 10px 16px;
  color: black;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    background: linear-gradient(90deg, ${props => props.theme.colors.lightGray}, white, ${props => props.theme.colors.lightGray});
    background-size: 200% 100%;
    animation: ${itemHover} 1.5s ease infinite;
    transform: translateX(5px);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${props => props.theme.colors.primary};
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setMenuOpen(false);
    navigate('/role-selection');
  };

  return (
    <HeaderContainer>
      <Link to="/home">
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
        <IconButton onClick={() => setMenuOpen(!menuOpen)}>
          <FaUser size={24} />
        </IconButton>
        
        {/* Animated Dropdown menu */}
        {menuOpen && (
          <DropdownMenu open={menuOpen}>
            <StyledLink to="/profile">Profile</StyledLink>
            <StyledLink to="/settings">Settings</StyledLink>
            <DropdownItem onClick={handleLogin}>Login</DropdownItem>
          </DropdownMenu>
        )}
      </NavActions>
    </HeaderContainer>
  );
};

export default Header;