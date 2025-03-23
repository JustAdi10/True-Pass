import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
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
  position: relative;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: ${props => (props.connected ? 'green' : props.theme.colors.primary)};
  color: ${props => (props.connected ? 'white' : props.theme.colors.dark)};
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.2s ease;
  border: none;
  cursor: pointer;

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

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();

  const connectToMetaMask = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        setWalletConnected(true);
        console.log('Connected account:', accounts[0]);
      } catch (error) {
        console.error('Error connecting to MetaMask:', error);
      }
    } else {
      alert('MetaMask is not installed. Please install it to use this feature.');
    }
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
        <Button connected={walletConnected} onClick={connectToMetaMask}>
          {walletConnected ? 'Wallet Connected' : 'Connect Wallet'}
        </Button>
        <IconButton as={Link} to="/cart">
          <FaShoppingCart size={24} />
        </IconButton>
        <IconButton onClick={() => setMenuOpen(!menuOpen)}>
          <FaUser size={24} />
        </IconButton>
      </NavActions>
    </HeaderContainer>
  );
};

export default Header;
