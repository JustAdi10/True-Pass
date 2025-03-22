import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
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
        <Button>Host</Button>
        <Button primary>Connect wallet</Button>
      </NavActions>
    </HeaderContainer>
  );
};

export default Header;