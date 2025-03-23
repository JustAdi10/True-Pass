import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEvents } from '../../context/EventContext';
import Input from '../common/Input';
import Select from '../common/Select';
import TextArea from '../common/TextArea';
import Button from '../common/Button';
import './EventForm.css';

function EventForm() {
  const navigate = useNavigate();
  const { addEvent } = useEvents();
  
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    capacity: '',
    date: '',
    time: '',
    location: '',
    description: '',
  });

  const categoryOptions = [
    { value: 'conference', label: 'Conference' },
    { value: 'workshop', label: 'Workshop' },
    { value: 'networking', label: 'Networking' },
    { value: 'seminar', label: 'Seminar' },
    { value: 'webinar', label: 'Webinar' },
  ];

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e, isDraft = false) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.title || !formData.category || !formData.date) {
      alert('Please fill in all required fields');
      return;
    }
    
    const newEvent = {
      ...formData,
      id: Date.now().toString(),
      isDraft
    };
    
    addEvent(newEvent);
    
    if (isDraft) {
      alert('Event saved as draft');
    } else {
      alert('Event published successfully');
    }
    
    navigate('/');
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Your changes will be lost.')) {
      navigate('/');
    }
  };

  return (
    <div className="event-form-container">
      <form className="event-form">
        <Input
          label="Event Title"
          id="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter event title"
          required
        />
        
        <Select
          label="Category"
          id="category"
          value={formData.category}
          onChange={handleChange}
          options={categoryOptions}
          placeholder="Select a category"
          required
        />
        
        <Input
          label="Capacity"
          id="capacity"
          type="number"
          value={formData.capacity}
          onChange={handleChange}
          placeholder="Number of attendees"
          required
        />
        
        <Input
          label="Date"
          id="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        
        <Input
          label="Time"
          id="time"
          type="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
        
        <Input
          label="Location"
          id="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Enter event location"
          hint="Physical address or virtual meeting link"
          required
        />
        
        <TextArea
          label="Description"
          id="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe your event"
          rows={5}
        />
        
        <div className="form-notice">
          Events will be reviewed for compliance with our community guidelines before being published.
        </div>
        
        <div className="form-actions">
          <Button variant="outline" onClick={handleCancel}>
            Cancel
          </Button>
          
          <div className="action-buttons">
            <Button 
              variant="outline" 
              onClick={(e) => handleSubmit(e, true)}
            >
              Save as Draft
            </Button>
            <Button 
              type="submit" 
              variant="primary" 
              onClick={(e) => handleSubmit(e, false)}
            >
              Publish Event
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EventForm;