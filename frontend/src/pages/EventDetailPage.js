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
      id: 1,
      EventTitle:'summer-music-festival-2025',
      name: 'Coldplay India Tour 2025',
      category: 'Concerts',
      description: 'Experience the ultimate summer festival featuring top artists and bands from around the globe. This NFT ticket includes premium seating, backstage access, and exclusive merchandise.',
      date: 'Apr 15, 2025',
      time: '12:00 PM - 11:00 PM',
      location: 'Mumbai, India',
      organizer: 'Festival Productions Inc.',
      image: 'https://www.columbusdirect.com/media/1901/music-festival-2012.jpg?width=800',
      price: 0.01,
      cryptoPrice: 0.01,
      cryptoCurrency: 'ETH',
      totalTickets: 5000,
      availableTickets: 2184
    },
    {
      id: 2,
      EventTitle: 'nba-championship-finals-2025',
      name: 'NBA Championship Finals 2025',
      category: 'Sports',
      description: 'Witness the most thrilling basketball showdown of the year! This NFT ticket grants access to courtside seats, VIP lounges, and a meet-and-greet with players.',
      date: 'Mar 20, 2025',
      time: '07:30 PM - 10:30 PM',
      location: 'Staples Center, Los Angeles',
      organizer: 'NBA Events',
      image: 'https://wtop.com/wp-content/uploads/2024/06/NBA_Finals_Basketball_58619-1880x1254.jpg',
      price: 3500,
      cryptoPrice: 0.02,
      cryptoCurrency: 'ETH',
      totalTickets: 20000,
      availableTickets: 5432
    },
    {
      id: 3,
      EventTitle: 'neon-night-party-2025',
      name: 'Neon Night Party 2025',
      category: 'Parties',
      description: 'Join us for a high-energy neon night party with electrifying DJs, neon-themed drinks, and an immersive dance floor experience.',
      date: 'Apr 02, 2025',
      time: '10:00 PM - 04:00 AM',
      location: 'Sky Lounge, Miami',
      organizer: 'Miami Nightlife Group',
      image: 'https://media.istockphoto.com/id/179477725/photo/glowing.jpg?s=612x612&w=0&k=20&c=3yL7p38-Ueno4EDktwEf_ZYPbEKeB-0mX3Oph6icBvo=',
      price: 500,
      cryptoPrice: 0.01,
      cryptoCurrency: 'ETH',
      totalTickets: 1000,
      availableTickets: 387
    },
    {
      id: 4,
      EventTitle: 'digital-art-exhibition-2025',
      name: 'Digital Art Exhibition 2025',
      category: 'Exhibitions',
      description: 'Explore the future of digital art with exclusive NFT showcases, virtual reality experiences, and interactive installations.',
      date: 'May 10, 2025',
      time: '11:00 AM - 07:00 PM',
      location: 'Modern Gallery, San Francisco',
      organizer: 'Future Art Collectors',
      image: 'https://callforcurators.com/wp-content/uploads/2024/01/Interactive-Exhibition-Design-course_List.png',
      price: 800,
      cryptoPrice: 0.01,
      cryptoCurrency: 'ETH',
      totalTickets: 1500,
      availableTickets: 967
    },
    {
      id: 5,
      EventTitle: 'Badminton-World-Tour-2025',
      name: 'Badminton World Tour 2025',
      category: 'Sports',
      description: 'Badminton world championship tour where top players compete for the title',
      date: 'April 14, 2025',
      time: '11:00 AM - 07:00 PM',
      location: 'Badminton Staiudm, Signapore',
      organizer: 'BAOI',
      image: 'https://as1.ftcdn.net/v2/jpg/03/58/72/12/1000_F_358721200_BzECck84Y9wQVddu1c1kSZ2Gb7vRD93E.jpg',
      price: 800,
      cryptoPrice: 0.01,
      cryptoCurrency: 'ETH',
      totalTickets: 1500,
      availableTickets: 967
    }
];

const EventDetailPage = () => {
  const { eventId } = useParams();
  
  // Convert eventId string to number and find the matching event
  const parsedEventId = parseInt(eventId, 10);
  const event = eventsData.find(e => e.id === parsedEventId) || eventsData[0];
  
  // Alternative approach: You could also look up by EventTitle if that's what you're using in your routes
  // const event = eventsData.find(e => e.EventTitle === eventId) || eventsData[0];
  
  // For debugging - remove this in production
  console.log('Event ID from URL:', eventId);
  console.log('Parsed Event ID:', parsedEventId);
  console.log('Found event:', event);
  
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