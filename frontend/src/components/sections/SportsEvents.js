// Updated src/components/sections/FeaturedEvents.js
import React from 'react';
import styled from 'styled-components';
import EventCard from '../common/EventCard';

const SectionContainer = styled.section`
  padding: 32px 24px;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 3px;
    background-color: ${props => props.theme.colors.primary};
  }
`;

const ViewAllLink = styled.a`
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
  font-size: 0.9rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
`;

const SportsEvents = ({ title }) => {
  // Sample event data
  const events = [
    {
      id: 2,
      title: 'Championship Finals',
      description: 'Season finale basketball championship',
      image: 'https://wtop.com/wp-content/uploads/2024/06/NBA_Finals_Basketball_58619-1880x1254.jpg',
      category: 'Sports',
      date: 'Mar 20, 2025',
      price: '0.01 ETH',
      location: 'Stadium Arena, Los Angeles',
      supply: 3000,
      featured: false,
      live: true
    },
    {
      id: 5,
      title: 'Badminton World Tour 2025',
      description: 'Badminton world championship tour where top players compete for the title', 
      image: 'https://as1.ftcdn.net/v2/jpg/03/58/72/12/1000_F_358721200_BzECck84Y9wQVddu1c1kSZ2Gb7vRD93E.jpg',
      category: 'Sports',
      date: 'April 14, 2025',
      price: '0.01 ETH',
      location: 'Badminton Stadium, Signapore',
      supply: 1000,
      featured: false,
    },
  ];
  
  return (
    <SectionContainer>
      <SectionHeader>
        <SectionTitle>{title}</SectionTitle>
        <ViewAllLink href="#">View All</ViewAllLink>
      </SectionHeader>
      
      <EventsGrid>
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </EventsGrid>
    </SectionContainer>
  );
};

export default SportsEvents;