import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { PurchaseTicketButton } from './CartPage'; // Import the PurchaseTicketButton

const EventDetailContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom, ${props => props.theme.colors.dark}, #1a174d);
  color: white;
`;

const EventContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const EventImage = styled.div`
  width: 100%;
  height: 400px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const EventInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const EventCategory = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.colors.secondary};
`;

const EventTitle = styled.h1`
  font-size: 40px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
`;

const EventDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: ${props => props.theme.colors.secondary};
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 16px;
`;

const InfoBox = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  padding: 16px;
  border-radius: 8px;
`;

const InfoLabel = styled.div`
  font-size: 14px;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 8px;
`;

const InfoValue = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

const PriceBox = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  padding: 24px;
  border-radius: 8px;
  margin-top: 24px;
`;

const PriceLabel = styled.div`
  font-size: 14px;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 8px;
`;

const PriceValue = styled.div`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 16px;
`;

const TicketInfo = styled.div`
  font-size: 14px;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 24px;
`;

// Sample events data (would typically come from an API or database)
const eventsData = [
  {
    id: 'summer-music-festival-2025',
    name: 'Summer Music Festival 2025',
    category: 'Concerts',
    description: 'Experience the ultimate summer festival featuring top artists and bands from around the globe. This NFT ticket includes premium seating, backstage access, and exclusive merchandise. Join thousands of music lovers for three days of non-stop entertainment in a beautiful outdoor setting.',
    date: 'Apr 15, 2025',
    time: '12:00 PM - 11:00 PM',
    location: 'Central Park, New York',
    organizer: 'Festival Productions Inc.',
    image: '/images/summer-festival.jpg',
    price: 2400, // USD price
    cryptoPrice: 0.8, // Crypto price
    cryptoCurrency: 'ETH', // Cryptocurrency type
    totalTickets: 5000,
    availableTickets: 2184
  }
];

const EventDetailPage = () => {
  const { eventId } = useParams();
  
  // In a real app, you would fetch event data based on eventId
  // For demo, we'll just find it in our sample data
  const event = eventsData.find(e => e.id === eventId) || eventsData[0]; // Default to first event if not found
  
  return (
    <EventDetailContainer>
      <EventContent>
        <EventImage>
          <img src={event.image || '/placeholder-event.jpg'} alt={event.name} />
        </EventImage>
        
        <EventInfo>
          <EventCategory>{event.category}</EventCategory>
          <EventTitle>{event.name}</EventTitle>
          <EventDescription>{event.description}</EventDescription>
          
          <InfoGrid>
            <InfoBox>
              <InfoLabel>Date</InfoLabel>
              <InfoValue>{event.date}</InfoValue>
            </InfoBox>
            <InfoBox>
              <InfoLabel>Time</InfoLabel>
              <InfoValue>{event.time}</InfoValue>
            </InfoBox>
            <InfoBox>
              <InfoLabel>Location</InfoLabel>
              <InfoValue>{event.location}</InfoValue>
            </InfoBox>
            <InfoBox>
              <InfoLabel>Organizer</InfoLabel>
              <InfoValue>{event.organizer}</InfoValue>
            </InfoBox>
          </InfoGrid>
          
          <PriceBox>
            <PriceLabel>Floor Price</PriceLabel>
            <PriceValue>{event.cryptoPrice} {event.cryptoCurrency}</PriceValue>
            <TicketInfo>{event.availableTickets} of {event.totalTickets} tickets available</TicketInfo>
            
            {/* Purchase Ticket Button */}
            <PurchaseTicketButton event={event} />
          </PriceBox>
        </EventInfo>
      </EventContent>
    </EventDetailContainer>
  );
};

export default EventDetailPage;