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
      id: 1,
      title: 'Summer Music Festival 2025',
      description: 'Featuring top artists and bands',
      image: 'https://www.columbusdirect.com/media/1901/music-festival-2012.jpg?width=800',
      category: 'Concerts',
      date: 'Apr 15, 2025',
      price: '0.8 ETH',
      location: 'Central Park, New York',
      supply: 5000,
      featured: true,
    },
    {
      id: 2,
      title: 'Championship Finals',
      description: 'Season finale basketball championship',
      image: 'https://wtop.com/wp-content/uploads/2024/06/NBA_Finals_Basketball_58619-1880x1254.jpg',
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
      image: 'https://media.istockphoto.com/id/179477725/photo/glowing.jpg?s=612x612&w=0&k=20&c=3yL7p38-Ueno4EDktwEf_ZYPbEKeB-0mX3Oph6icBvo=',
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
      image: 'https://callforcurators.com/wp-content/uploads/2024/01/Interactive-Exhibition-Design-course_List.png',
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

export default PartiesEvents;