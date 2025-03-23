import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeroContainer = styled.div`
  text-align: center;
  padding: 60px 20px;
  background-color: ${props => props.theme.colors.dark};
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 16px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 32px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
`;

const Button = styled.button`
  padding: 12px 24px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 1rem;
  background-color: ${props => props.primary ? props.theme.colors.primary : 'transparent'};
  color: ${props => props.primary ? props.theme.colors.dark : props.theme.colors.primary};
  border: ${props => props.primary ? 'none' : `1px solid ${props.theme.colors.primary}`};
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.small};
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroTitle>Discover, Collect, and Trade Event NFTs</HeroTitle>
      <HeroSubtitle>
        The ultimate marketplace for digital event tickets and experiences powered by blockchain technology
      </HeroSubtitle>
      <ButtonGroup>
        <Link to="/events">
          <Button primary>Explore Events</Button>
        </Link>
        <Button>Learn More</Button>
      </ButtonGroup>
    </HeroContainer>
  );
};

export default Hero;