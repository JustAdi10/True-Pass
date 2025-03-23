import React, { createContext, useContext, useState, useEffect } from 'react';

const EventContext = createContext();

export const useEvents = () => useContext(EventContext);

export const EventProvider = ({ children }) => {
  // Initialize with sample data
  const initialEvents = [
    {
      id: '1',
      title: 'Tech Conference 2025',
      category: 'conference',
      capacity: '500',
      date: '2025-04-15',
      time: '09:00',
      location: 'Convention Center, San Francisco',
      description: 'Join us for the biggest tech conference of the year featuring keynotes, workshops, and networking opportunities.',
      isDraft: false
    },
    {
      id: '2',
      title: 'Networking Mixer',
      category: 'networking',
      capacity: '75',
      date: '2025-02-10',
      time: '18:00',
      location: 'Downtown Business Hub, Electronics City, Bangalore, India',
      description: 'Connect with professionals in your industry over drinks and appetizers.',
      isDraft: false
    }
  ];

  const [events, setEvents] = useState(() => {
    const savedEvents = localStorage.getItem('events');
    return savedEvents ? JSON.parse(savedEvents) : initialEvents;
  });

  // Save to localStorage whenever events change
  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  const addEvent = (event) => {
    setEvents(prev => [...prev, event]);
  };

  const updateEvent = (updatedEvent) => {
    setEvents(prev => 
      prev.map(event => 
        event.id === updatedEvent.id ? updatedEvent : event
      )
    );
  };

  const deleteEvent = (id) => {
    setEvents(prev => prev.filter(event => event.id !== id));
  };

  const value = {
    events,
    addEvent,
    updateEvent,
    deleteEvent
  };

  return (
    <EventContext.Provider value={value}>
      {children}
    </EventContext.Provider>
  );
};