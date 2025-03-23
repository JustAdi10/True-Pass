import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faTicket } from "@fortawesome/free-solid-svg-icons";

const RoleSelection = () => {
  // Animation state
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    // Trigger animations after component mounts
    setLoaded(true);
  }, []);

  return (
    <div className="role-selection-container">
      <div className={`header-content ${loaded ? 'fade-in' : ''}`}>
        <h1 >Welcome to TruePass</h1>
        <p>Please select how you want to continue</p>
      </div>
      
      <div className="role-cards">
        <div className={`role-card organizer-card ${loaded ? 'slide-in-left' : ''}`}>
          <FontAwesomeIcon icon={faCalendarCheck} className="role-icon" />
          <h2>Event Organizer</h2>
          <p>Create and manage your events</p>
          <div className="role-buttons">
            <Link to="/organizer/login" className="role-btn login-btn">Login</Link>
            <Link to="/organizer/signup" className="role-btn signup-btn">Sign Up</Link>
          </div>
        </div>
        
        <div className={`role-card attendee-card ${loaded ? 'slide-in-right' : ''}`}>
          <FontAwesomeIcon icon={faTicket} className="role-icon" />
          <h2>Event Attendee</h2>
          <p>Discover and book event tickets</p>
          <div className="role-buttons">
            <Link to="/attendee/login" className="role-btn login-btn">Login</Link>
            <Link to="/attendee/signup" className="role-btn signup-btn">Sign Up</Link>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        /* Base styles */
        .role-selection-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 2rem;
          background-color:rgb(0, 0, 0);
          color: #333;
        }
        
        /* Header Styles */
        .header-content {
          text-align: center;
          color: white;
          margin-bottom: 3rem;
          opacity: 0;
          transform: translateY(-20px);
        }
        
        .header-content.fade-in {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.8s ease;
        }
        
        h1 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          color: white;
          background: linear-gradient(90deg, #ff6b6b, #5f27cd);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        /* Role Cards Container */
        .role-cards {
          display: flex;
          justify-content: center;
          gap: 2rem;
          width: 100%;
          max-width: 1000px;
        }
        
        /* Role Card Styles */
        .role-card {
          background-color: white;
          border-radius: 12px;
          padding: 2rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          opacity: 0;
          max-width: 350px;
        }
        
        .role-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.15);
        }
        
        .organizer-card {
          border-top: 5px solid #5f27cd;
          transform: translateX(-50px);
        }
        
        .attendee-card {
          border-top: 5px solid #ff6b6b;
          transform: translateX(50px);
        }
        
        .slide-in-left {
          animation: slideInLeft 0.8s forwards;
          animation-delay: 0.2s;
        }
        
        .slide-in-right {
          animation: slideInRight 0.8s forwards;
          animation-delay: 0.2s;
        }
        
        /* Icon Styles */
        .role-icon {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          padding: 1rem;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        
        .organizer-card .role-icon {
          color: #5f27cd;
          background-color: rgba(95, 39, 205, 0.1);
        }
        
        .attendee-card .role-icon {
          color: #ff6b6b;
          background-color: rgba(255, 107, 107, 0.1);
        }
        
        .role-card:hover .role-icon {
          transform: scale(1.1) rotate(5deg);
        }
        
        /* Button Styles */
        .role-buttons {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
          width: 100%;
        }
        
        .role-btn {
          flex: 1;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          text-align: center;
          transition: all 0.3s ease;
        }
        
        .login-btn {
          background-color: transparent;
          border: 2px solid currentColor;
        }
        
        .organizer-card .login-btn {
          color: #5f27cd;
        }
        
        .attendee-card .login-btn {
          color: #ff6b6b;
        }
        
        .signup-btn {
          color: white;
        }
        
        .organizer-card .signup-btn {
          background-color: #5f27cd;
          border: 2px solid #5f27cd;
        }
        
        .attendee-card .signup-btn {
          background-color: #ff6b6b;
          border: 2px solid #ff6b6b;
        }
        
        .role-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .organizer-card .signup-btn:hover {
          background-color: #4c1fa8;
          border-color: #4c1fa8;
        }
        
        .attendee-card .signup-btn:hover {
          background-color: #ff5252;
          border-color: #ff5252;
        }
        
        /* Animations */
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        /* Responsive Styles */
        @media (max-width: 768px) {
          .role-cards {
            flex-direction: column;
            align-items: center;
          }
          
          .role-card {
            width: 100%;
            max-width: 400px;
            margin-bottom: 2rem;
          }
          
          .organizer-card, .attendee-card {
            transform: translateX(0) translateY(50px);
          }
          
          .slide-in-left, .slide-in-right {
            animation: slideInUp 0.8s forwards;
            animation-delay: 0.2s;
          }
          
          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        }
      `}</style>
    </div>
  );
};

export default RoleSelection;