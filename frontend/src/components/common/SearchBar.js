import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

// Styled Components
const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 16px 12px 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 14px;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
  
  &:focus {
    outline: none;
    background-color: rgba(255, 255, 255, 0.15);
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.6);
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
  
  &:hover {
    color: white;
  }
`;

const DropdownContainer = styled.div`
  position: absolute;
  z-index: 10;
  top: calc(100% + 4px);
  left: 0;
  width: 100%;
  background-color: #1f2937;
  border-radius: 4px;
  border: 1px solid #374151;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  max-height: 300px;
  animation: dropdownFade 0.2s ease-out forwards;
  
  @keyframes dropdownFade {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const ResultsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 300px;
  overflow-y: auto;
`;

const ResultItem = styled.li`
  padding: 10px 16px;
  cursor: pointer;
  animation: itemFade 0.3s ease-out forwards;
  animation-delay: ${props => props.index * 0.05}s;
  opacity: 0;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  ${props => props.isExactMatch && `
    background-color: rgba(59, 130, 246, 0.5);
  `}
  
  @keyframes itemFade {
    from { opacity: 0; transform: translateX(-10px); }
    to { opacity: 1; transform: translateX(0); }
  }
`;

const ResultTitle = styled.div`
  font-weight: 500;
  color: white;
`;

const ResultDetails = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 4px;
`;

const HighlightedText = styled.span`
  background-color: #fde68a;
  color: #1f2937;
  font-weight: 500;
  padding: 0 2px;
  border-radius: 2px;
`;

const SearchBar = ({ placeholder = "Search events..." }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const searchContainerRef = useRef(null);
  
  // Sample event data - replace with your actual events
  const events = [
    { id: 1, title: "Summer Music Festival 2025", date: "2025-06-15", location: "Central Park" },
    { id: 2, title: "Championship Finals", date: "2025-05-22", location: "National Stadium" },
    { id: 3, title: "Neon Night Party", date: "2025-04-28", location: "Club Midnight" },
    { id: 4, title: "Digital Art Exhibition", date: "2025-07-10", location: "Modern Gallery" },
    { id: 5, title: "COLDPLAY INDIA TOUR 2025", date: "2025-08-05", location: "Mumbai Stadium" }
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

  return (
    <SearchContainer ref={searchContainerRef}>
      <SearchIcon>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                onClick={() => {
                  setSearchQuery(event.title);
                  setIsDropdownOpen(false);
                }}
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