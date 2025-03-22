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

const ConcertEvents = ({ title }) => {
  // Sample event data
  const events = [
    {
      id: 1,
      title: 'COLDPLAY INDIA TOUR 2025',
      description: 'Featuring top artists and bands',
      image: 'https://via.placeholder.com/300x200/292966/CCCCFF?text=Music+Festival',
      category: 'Concerts',
      date: 'Apr 15, 2025',
      price: '0.8 ETH',
      location: 'Mumbai, India',
      supply: 5000,
      featured: true,
    },
    {
      id: 2,
      title: 'Championship Finals',
      description: 'Season finale basketball championship',
      image: 'https://via.placeholder.com/300x200/292966/CCCCFF?text=NBA+Finals',
      category: 'Sports',
      date: 'Mar 20, 2025',
      price: '1.2 ETH',
      location: 'Stadium Arena, Los Angeles',
      supply: 3000,
      featured: false,
      live: true
    },
    {
      id: 3,
      title: 'Neon Night Party',
      description: 'The ultimate VIP clubbing experience',
      image: 'https://via.placeholder.com/300x200/292966/CCCCFF?text=Neon+Party',
      category: 'Parties',
      date: 'Apr 02, 2025',
      price: '0.5 ETH',
      location: 'Sky Lounge, Miami',
      supply: 300,
      featured: false,
    },
    {
      id: 4,
      title: 'Digital Art Exhibition',
      description: 'Showcasing the future of digital art',
      image: 'https://via.placeholder.com/300x200/292966/CCCCFF?text=Digital+Art',
      category: 'Exhibitions',
      date: 'May 10, 2025',
      price: '0.3 ETH',
      location: 'Modern Gallery, San Francisco',
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

export default ConcertEvents;