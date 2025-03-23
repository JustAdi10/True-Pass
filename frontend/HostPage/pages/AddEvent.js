import React from 'react';
import EventForm from '../components/events/EventForm';
import './AddEvent.css';

function AddEvent() {
  return (
    <div className="add-event-page">
      <div className="page-header">
        <h1 className="page-title">Add New Event</h1>
      </div>
      <EventForm />
    </div>
  );
}

export default AddEvent;