import React from 'react';
import styled from 'styled-components';
import Hero from '../components/sections/Hero';
import CategoryTabs from '../components/sections/CategoryTabs';
import FeaturedEvents from '../components/sections/FeaturedEvents';

const HomeContainer = styled.div`
  min-height: calc(100vh - 64px);
`;

const HomePage = () => {
  return (
    <HomeContainer>
      <Hero />
      <CategoryTabs />
      <FeaturedEvents title="Featured Events" />
    </HomeContainer>
  );
};

export default HomePage;