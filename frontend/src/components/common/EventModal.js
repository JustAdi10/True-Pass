import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
`;

const ModalContent = styled.div`
  background-color: ${props => props.theme.colors.dark};
  border-radius: 12px;
  width: 100%;
  max-width: 500px;
  position: relative;
  overflow: hidden;
  animation: fadeIn 0.3s ease;
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const ModalHeader = styled.div`
  padding: 20px 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.secondary};
  font-size: 1.5rem;
  cursor: pointer;
  
  &:hover {
    color: white;
  }
`;

const ModalBody = styled.div`
  padding: 24px;
`;

const EventDescription = styled.p`
  margin-bottom: 24px;
  line-height: 1.5;
`;

const CountdownContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const CountdownItem = styled.div`
  text-align: center;
`;

const CountdownValue = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${props => props.theme.colors.primary};
`;

const CountdownLabel = styled.div`
  font-size: 0.8rem;
  color: ${props => props.theme.colors.secondary};
  margin-top: 4px;
`;

const EventDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 24px;
`;

const DetailGroup = styled.div``;

const DetailLabel = styled.div`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 4px;
`;

const DetailValue = styled.div`
  font-weight: 500;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const Button = styled.button`
  padding: 10px 24px;
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.2s ease;
  
  &.primary {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.dark};
  }
  
  &.secondary {
    background-color: transparent;
    color: ${props => props.theme.colors.primary};
    border: 1px solid ${props => props.theme.colors.primary};
  }
  
  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
`;

const EventModal = ({ event, onClose }) => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  
  useEffect(() => {
    // Parse the event date
    const eventDate = new Date(event.date);
    
    // Set up countdown
    const timer = setInterval(() => {
      const now = new Date();
      const difference = eventDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        clearInterval(timer);
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setCountdown({ days, hours, minutes, seconds });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [event.date]);
  
return (
    <ModalOverlay onClick={onClose}>
        <ModalContent onClick={e => e.stopPropagation()} style={{ fontFamily: 'Poppins, sans-serif' }}>
            <ModalHeader>
                <ModalTitle>Event Details</ModalTitle>
                <CloseButton onClick={onClose}>×</CloseButton>
            </ModalHeader>
            
            <ModalBody>
                <ModalTitle>{event.title}</ModalTitle>
                <EventDescription>
                    {event.description}. This NFT ticket includes premium seating and exclusive memorabilia.
                </EventDescription>
                
                <CountdownContainer>
                    <CountdownItem>
                        <CountdownValue>{countdown.days}</CountdownValue>
                        <CountdownLabel>Days</CountdownLabel>
                    </CountdownItem>
                    <CountdownItem>
                        <CountdownValue>{countdown.hours}</CountdownValue>
                        <CountdownLabel>Hours</CountdownLabel>
                    </CountdownItem>
                    <CountdownItem>
                        <CountdownValue>{countdown.minutes}</CountdownValue>
                        <CountdownLabel>Minutes</CountdownLabel>
                    </CountdownItem>
                    <CountdownItem>
                        <CountdownValue>{countdown.seconds}</CountdownValue>
                        <CountdownLabel>Seconds</CountdownLabel>
                    </CountdownItem>
                </CountdownContainer>
                
                <EventDetails>
                    <DetailGroup>
                        <DetailLabel>Location</DetailLabel>
                        <DetailValue>{event.location}</DetailValue>
                    </DetailGroup>
                    <DetailGroup>
                        <DetailLabel>Date</DetailLabel>
                        <DetailValue>{event.date}</DetailValue>
                    </DetailGroup>
                    <DetailGroup>
                        <DetailLabel>Floor Price</DetailLabel>
                        <DetailValue>{event.price}</DetailValue>
                    </DetailGroup>
                    <DetailGroup>
                        <DetailLabel>Supply</DetailLabel>
                        <DetailValue>{event.supply}</DetailValue>
                    </DetailGroup>
                </EventDetails>
            </ModalBody>
            
            <ModalFooter>
                <Button className="secondary" onClick={onClose}>Close</Button>
                <Button className="primary">Buy Now</Button>
            </ModalFooter>
        </ModalContent>
    </ModalOverlay>
);
};

export default EventModal;