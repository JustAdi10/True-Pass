import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // Import for redirection

// Enhanced Styled Components with futuristic design
const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  transition: all 0.3s ease;
  
  &:focus-within {
    transform: scale(1.02);
    box-shadow: 0 0 20px rgba(78, 168, 222, 0.3);
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 14px 16px 14px 48px;
  background-color: rgba(18, 24, 38, 0.8);
  border: 1px solid rgba(78, 168, 222, 0.4);
  border-radius: 8px;
  color: white;
  font-size: 14px;
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
  
  &:focus {
    outline: none;
    background-color: rgba(25, 32, 48, 0.9);
    border-color: rgba(78, 168, 222, 0.8);
    box-shadow: 0 0 0 2px rgba(78, 168, 222, 0.3);
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(78, 168, 222, 0.8);
  transition: all 0.3s ease;
  
  ${SearchContainer}:focus-within & {
    color: rgba(78, 168, 222, 1);
  }
`;

const ClearButton = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    color: rgba(78, 168, 222, 1);
    transform: translateY(-50%) rotate(90deg);
  }
`;

const DropdownContainer = styled.div`
  position: absolute;
  z-index: 10;
  top: calc(100% + 8px);
  left: 0;
  width: 100%;
  background-color: rgba(18, 24, 38, 0.95);
  border-radius: 8px;
  border: 1px solid rgba(78, 168, 222, 0.6);
  box-shadow: 
    0 8px 20px rgba(0, 0, 0, 0.3),
    0 0 15px rgba(78, 168, 222, 0.2),
    inset 0 1px 1px rgba(255, 255, 255, 0.1);
  overflow: hidden;
  max-height: 320px;
  backdrop-filter: blur(10px);
  animation: dropdownFade 0.3s cubic-bezier(0.19, 1, 0.22, 1) forwards;
  
  &:before {
    content: '';
    position: absolute;
    top: -6px;
    left: 20px;
    width: 12px;
    height: 12px;
    background-color: rgba(18, 24, 38, 0.95);
    border-left: 1px solid rgba(78, 168, 222, 0.6);
    border-top: 1px solid rgba(78, 168, 222, 0.6);
    transform: rotate(45deg);
  }
  
  @keyframes dropdownFade {
    from { opacity: 0; transform: translateY(-15px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const ResultsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 320px;
  overflow-y: auto;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: rgba(78, 168, 222, 0.6);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-track {
    background-color: rgba(18, 24, 38, 0.4);
  }
`;

const ResultItem = styled.li`
  padding: 12px 16px;
  cursor: pointer;
  position: relative;
  border-bottom: 1px solid rgba(78, 168, 222, 0.2);
  transition: all 0.2s ease;
  animation: itemFade 0.4s cubic-bezier(0.19, 1, 0.22, 1) forwards;
  animation-delay: ${props => props.index * 0.07}s;
  opacity: 0;
  
  &:hover {
    background-color: rgba(78, 168, 222, 0.15);
    transform: translateX(4px);
  }
  
  &:last-child {
    border-bottom: none;
  }
  
  ${props => props.isExactMatch && `
    background-color: rgba(78, 168, 222, 0.2);
    
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 3px;
      background: linear-gradient(to bottom, #4ea8de, #38bdf8);
    }
  `}
  
  @keyframes itemFade {
    from { opacity: 0; transform: translateX(-20px); }
    to { opacity: 1; transform: translateX(0); }
  }
`;

const ResultTitle = styled.div`
  font-weight: 500;
  color: white;
  display: flex;
  align-items: center;
  
  &:after {
    content: '';
    display: inline-block;
    margin-left: 8px;
    width: 5px;
    height: 5px;
    border-top: 2px solid rgba(78, 168, 222, 0.8);
    border-right: 2px solid rgba(78, 168, 222, 0.8);
    transform: rotate(45deg);
    opacity: 0;
    transition: all 0.3s ease;
  }
  
  ${ResultItem}:hover &:after {
    opacity: 1;
    margin-left: 12px;
  }
`;

const ResultDetails = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 4px;
`;

const HighlightedText = styled.span`
  background: linear-gradient(to right, rgba(78, 168, 222, 0.2), rgba(56, 189, 248, 0.2));
  color: rgba(78, 168, 222, 1);
  font-weight: 500;
  padding: 0 3px;
  border-radius: 3px;
  box-shadow: 0 0 0 1px rgba(78, 168, 222, 0.3);
`;

const SearchBar = ({ placeholder = "Search events..." }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const searchContainerRef = useRef(null);
  const navigate = useNavigate(); // Hook for navigation
  
  // Sample event data - replace with your actual events
  const events = [
    { id: 1, title: "Badminton World Tour ", date: "2025-04-15", location: "Singapore Badminton Stadium,", path: "/event/6" },
    { id: 2, title: "Championship Finals", date: "2025-05-22", location: "National Stadium", path: "/event/2" },
    { id: 3, title: "Neon Night Party", date: "2025-04-28", location: "Club Midnight", path: "/event/3" },
    { id: 4, title: "Digital Art Exhibition", date: "2025-07-10", location: "Modern Gallery", path: "/event/4" },
    { id: 5, title: "COLDPLAY INDIA TOUR 2025", date: "2025-08-05", location: "Mumbai Stadium", path: "/event/1" }
  ];
  
  // Filter events based on search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredEvents([]);
      return;
    }
    
    const lowerQuery = searchQuery.toLowerCase();
    const results = events.filter(event => 
      event.title.toLowerCase().includes(lowerQuery) || 
      event.location.toLowerCase().includes(lowerQuery) ||
      event.date.includes(lowerQuery)
    );
    
    setFilteredEvents(results);
    setIsDropdownOpen(results.length > 0);
  }, [searchQuery]);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);
  
  // Highlight matching text in search results
  const highlightMatch = (text, query) => {
    if (!query.trim()) return text;
    
    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? 
        <HighlightedText key={index}>{part}</HighlightedText> : 
        part
    );
  };

  // Handle result selection with redirection
  const handleResultSelect = (event) => {
    setSearchQuery(event.title);
    setIsDropdownOpen(false);
    
    // Navigate to the event page
    navigate(event.path);
  };

  return (
    <SearchContainer ref={searchContainerRef}>
      <SearchIcon>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </SearchIcon>
      
      <SearchInput 
        type="text" 
        placeholder={placeholder} 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => filteredEvents.length > 0 && setIsDropdownOpen(true)}
      />
      
      {searchQuery && (
        <ClearButton onClick={() => setSearchQuery("")}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </ClearButton>
      )}
      
      {isDropdownOpen && filteredEvents.length > 0 && (
        <DropdownContainer>
          <ResultsList>
            {filteredEvents.map((event, index) => (
              <ResultItem 
                key={event.id} 
                index={index}
                isExactMatch={event.title.toLowerCase() === searchQuery.toLowerCase()}
                onClick={() => handleResultSelect(event)}
              >
                <ResultTitle>
                  {highlightMatch(event.title, searchQuery)}
                </ResultTitle>
                <ResultDetails>
                  <span>{highlightMatch(event.date, searchQuery)}</span>
                  <span>{highlightMatch(event.location, searchQuery)}</span>
                </ResultDetails>
              </ResultItem>
            ))}
          </ResultsList>
        </DropdownContainer>
      )}
    </SearchContainer>
  );
};

export default SearchBar;