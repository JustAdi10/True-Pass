import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const PageContainer = styled.div`
  min-height: calc(100vh - 64px);
  padding: 32px 24px;
  max-width: 1200px;
  margin: 0 auto;
`;

const EventGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const EventImage = styled.div`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 12px;
  overflow: hidden;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
`;

const EventInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const CategoryBadge = styled.div`
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.1);
  color: ${props => props.theme.colors.primary};
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 0.8rem;
  margin-bottom: 16px;
`;

const EventTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 16px;
`;

const EventDescription = styled.p`
  color: ${props => props.theme.colors.secondary};
  line-height: 1.6;
  margin-bottom: 24px;
`;

const EventStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 32px;
`;

const StatItem = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  padding: 16px;
  border-radius: 8px;
`;

const StatLabel = styled.div`
  color: ${props => props.theme.colors.secondary};
  font-size: 0.9rem;
  margin-bottom: 8px;
`;

const StatValue = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
`;

const PriceContainer = styled.div`
  background-color: rgba(204, 204, 255, 0.1);
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 24px;
`;

const PriceLabel = styled.div`
  color: ${props => props.theme.colors.secondary};
  font-size: 0.9rem;
  margin-bottom: 4px;
`;

const PriceValue = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
`;

const Button = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.dark};
  font-weight: 600;
  padding: 14px 0;
  border-radius: 8px;
  font-size: 1rem;
  width: 100%;
  margin-top: auto;
  transition: all 0.2s ease;
  
  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;

const EventDetailPage = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // In a real app, you would fetch the event data from an API
    // For this example, we'll simulate with static data
    setTimeout(() => {
      const mockEvent = {
        id: eventId,
        title: 'Summer Music Festival 2025',
        description: 'Experience the ultimate summer festival featuring top artists and bands from around the globe. This NFT ticket includes premium seating, backstage access, and exclusive merchandise. Join thousands of music lovers for three days of non-stop entertainment in a beautiful outdoor setting.',
        image: 'https://via.placeholder.com/600x600/292966/CCCCFF?text=Music+Festival',
        category: 'Concerts',
        date: 'Apr 15, 2025',
        time: '12:00 PM - 11:00 PM',
        price: '0.8 ETH',
        location: 'Central Park, New York',
        organizer: 'Festival Productions Inc.',
        supply: 5000,
        available: 2184,
        featured: true,
      };
      
      setEvent(mockEvent);
      setLoading(false);
    }, 500);
  }, [eventId]);
  
  if (loading) {
    return (
      <PageContainer>
        <div style={{ textAlign: 'center', padding: '100px 0' }}>
          Loading event details...
        </div>
      </PageContainer>
    );
  }
  
  if (!event) {
    return (
      <PageContainer>
        <div style={{ textAlign: 'center', padding: '100px 0' }}>
          Event not found.
        </div>
      </PageContainer>
    );
  }
  
  return (
    <PageContainer>
      <EventGrid>
        <EventImage src={event.image} />
        
        <EventInfo>
          <CategoryBadge>{event.category}</CategoryBadge>
          <EventTitle>{event.title}</EventTitle>
          <EventDescription>{event.description}</EventDescription>
          
          <EventStats>
            <StatItem>
              <StatLabel>Date</StatLabel>
              <StatValue>{event.date}</StatValue>
            </StatItem>
            <StatItem>
              <StatLabel>Time</StatLabel>
              <StatValue>{event.time}</StatValue>
            </StatItem>
            <StatItem>
              <StatLabel>Location</StatLabel>
              <StatValue>{event.location}</StatValue>
            </StatItem>
            <StatItem>
              <StatLabel>Organizer</StatLabel>
              <StatValue>{event.organizer}</StatValue>
            </StatItem>
          </EventStats>
          
          <PriceContainer>
            <PriceLabel>Floor Price</PriceLabel>
            <PriceValue>{event.price}</PriceValue>
          </PriceContainer>
          
          <div style={{ marginBottom: '16px', fontSize: '0.9rem', color: '#A3A3CC' }}>
            {event.available} of {event.supply} tickets available
          </div>
          
          <Button>Purchase Ticket</Button>
        </EventInfo>
      </EventGrid>
    </PageContainer>
  );
};

export default EventDetailPage;