// Updated src/components/common/EventCard.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled(Link)`
  background-color: rgba(92, 92, 153, 0.2);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: block;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.medium};
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: 180px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  position: relative;
`;

const FeaturedBadge = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.dark};
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
`;

const LiveBadge = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  background-color: #ff3e3e;
  color: white;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 4px;
  
  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: white;
  }
`;

const CardContent = styled.div`
  padding: 16px;
`;

const CardTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 4px;
  font-weight: 600;
`;

const CardDescription = styled.p`
  color: ${props => props.theme.colors.secondary};
  font-size: 0.9rem;
  margin-bottom: 12px;
`;

const CardMeta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  font-size: 0.85rem;
`;

const MetaItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const MetaLabel = styled.span`
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 4px;
`;

const MetaValue = styled.span`
  font-weight: 500;
`;

const EventCard = ({ event }) => {
return (
    <Card to={`/event/${event.id}`}>
        <CardImage src={event.image}>
            {event.featured && <FeaturedBadge>Featured</FeaturedBadge>}
            {event.live && <LiveBadge>LIVE</LiveBadge>}
        </CardImage>
        <CardContent>
            <CardTitle>{event.title}</CardTitle>
            <CardDescription>{event.description}</CardDescription>
            
            <CardMeta>
                <MetaItem>
                    <MetaLabel>Floor Price</MetaLabel>
                    <MetaValue>{event.price}</MetaValue>
                </MetaItem>
                <MetaItem>
                    <MetaLabel>Date</MetaLabel>
                    <MetaValue>{event.date}</MetaValue>
                </MetaItem>
            </CardMeta>
        </CardContent>
    </Card>
);
};

export default EventCard;