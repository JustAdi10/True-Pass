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

const PartiesEvents = ({ title }) => {
  // Sample event data
  const events = [
    {
      id: 3,
      title: 'Neon Night Party',
      description: 'The ultimate VIP clubbing experience',
      image: 'https://media.istockphoto.com/id/179477725/photo/glowing.jpg?s=612x612&w=0&k=20&c=3yL7p38-Ueno4EDktwEf_ZYPbEKeB-0mX3Oph6icBvo=',
      category: 'Parties',
      date: 'Apr 02, 2025',
      price: '0.01 ETH',
      location: 'Sky Lounge, Miami',
      supply: 300,
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

export default PartiesEvents;