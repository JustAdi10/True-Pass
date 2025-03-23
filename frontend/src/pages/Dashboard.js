import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EventList from '../components/events/EventList';
import Button from '../components/common/Button';
import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');

  const handleAddEvent = () => {
    navigate('/add-event');
  };

  return (
    <div className="dashboard">
      <div className="page-header">
        <h1 className="page-title">Manage Your Events with Ease</h1>
        <p className="page-subtitle">
          Create, publish, and track your events all in one place. Reach more attendees and grow your community.
        </p>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-header">
          <h2 className="section-title">My Events</h2>
          <div className="sort-dropdown">
            <select className="form-select">
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="alphabetical">Alphabetical</option>
            </select>
          </div>
        </div>

        <div className="tab-group">
          <button 
            className={`tab ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All
          </button>
          <button 
            className={`tab ${activeTab === 'upcoming' ? 'active' : ''}`}
            onClick={() => setActiveTab('upcoming')}
          >
            Upcoming
          </button>
          <button 
            className={`tab ${activeTab === 'past' ? 'active' : ''}`}
            onClick={() => setActiveTab('past')}
          >
            Past
          </button>
          <button 
            className={`tab ${activeTab === 'drafts' ? 'active' : ''}`}
            onClick={() => setActiveTab('drafts')}
          >
            Drafts
          </button>
        </div>

        <EventList filter={activeTab} />

        <div className="add-event-container">
          <Button 
            variant="primary" 
            onClick={handleAddEvent} 
            className="add-event-btn"
            icon={<span>+</span>}
          >
            Add New Event
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;