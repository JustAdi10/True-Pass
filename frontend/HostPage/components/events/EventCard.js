/* src/components/events/EventCard.js */
import React from 'react';
import { useEvents } from '../../context/EventContext';
import Button from '../common/Button';
import './EventCard.css';

function EventCard({ event }) {
  const { deleteEvent } = useEvents();

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete "${event.title}"?`)) {
      deleteEvent(event.id);
    }
  };

  return (
    <div className="event-card">
      <div className="event-header">
        <h3 className="event-title">{event.title}</h3>
        <span className="tag">{event.category}</span>
      </div>
      
      <div className="event-details">
        <div className="event-detail">
          <i className="event-icon">📅</i>
          <span>Date: {event.date}</span>
        </div>
        <div className="event-detail">
          <i className="event-icon">⏰</i>
          <span>Time: {event.time}</span>
        </div>
        <div className="event-detail">
          <i className="event-icon">📍</i>
          <span>Location: {event.location}</span>
        </div>
        <div className="event-detail">
          <i className="event-icon">👥</i>
          <span>Capacity: {event.capacity} attendees</span>
        </div>
      </div>
      
      <p className="event-description">{event.description}</p>
      
      <div className="event-actions">
        <Button 
          variant="danger" 
          onClick={handleDelete}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

export default EventCard;