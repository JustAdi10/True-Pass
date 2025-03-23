import React from 'react';
import styled from 'styled-components';
import Hero from '../components/sections/Hero';
import CategoryTabs from '../components/sections/CategoryTabs';
import FeaturedEvents from '../components/sections/FeaturedEvents';
import ConcertEvents from '../components/sections/ConcertsEvents';
import PartiesEvents from '../components/sections/PartiesEvents';
import SportsEvents from '../components/sections/SportsEvents';
import OrgLogin from './OrganizerLogin';




const HomeContainer = styled.div`
  min-height: calc(100vh - 64px);
`;

const HomePage = () => {
  return (
    <HomeContainer>
      <Hero />
      <CategoryTabs />
      <FeaturedEvents title="Featured Events" />
      <ConcertEvents title="Concerts"/>
      <PartiesEvents title="Parties"/>
      <SportsEvents title="Sports"/>
    </HomeContainer>
  );
};

export default HomePage;