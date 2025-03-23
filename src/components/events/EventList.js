import React from 'react';
import { useEvents } from '../../context/EventContext';
import EventCard from './EventCard';
import './EventList.css';

function EventList({ filter = 'all' }) {
  const { events } = useEvents();
  
  const filteredEvents = events.filter(event => {
    if (filter === 'all') return true;
    if (filter === 'upcoming') {
      // Simple filter for demo purposes - in real app would use proper date comparison
      const eventDate = new Date(event.date.replace(/\./g, '-'));
      return eventDate >= new Date();
    }
    if (filter === 'past') {
      const eventDate = new Date(event.date.replace(/\./g, '-'));
      return eventDate < new Date();
    }
    if (filter === 'drafts') {
      return event.isDraft;
    }
    return true;
  });

  if (filteredEvents.length === 0) {
    return <p className="no-events">No events found. Create your first event!</p>;
  }

  return (
    <div className="event-grid">
      {filteredEvents.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}

export default EventList;