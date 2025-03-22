import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TabsContainer = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding: 16px 24px;
  background-color: ${props => props.theme.colors.dark};
  scrollbar-width: none; /* Firefox */
  
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Edge */
  }
`;

const Tab = styled(Link)`
  padding: 8px 20px;
  border-radius: 50px;
  font-weight: 500;
  font-size: 0.9rem;
  background-color: ${props => props.active ? props.theme.colors.primary : 'rgba(255, 255, 255, 0.1)'};
  color: ${props => props.active ? props.theme.colors.dark : 'white'};
  transition: all 0.2s ease;
  white-space: nowrap;
  
  &:hover {
    background-color: ${props => props.active ? props.theme.colors.primary : 'rgba(255, 255, 255, 0.15)'};
  }
`;

const CategoryTabs = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'concerts', name: 'Concerts' },
    { id: 'parties', name: 'Parties' },
    { id: 'sports', name: 'Sports' },
    { id: 'festivals', name: 'Festivals' },
    { id: 'theater', name: 'Theater' },
    { id: 'exhibitions', name: 'Exhibitions' },
    { id: 'conferences', name: 'Conferences' },
  ];
  
  return (
    <TabsContainer>
      {categories.map(category => (
        <Tab
          key={category.id}
          to={category.id === 'all' ? '/' : `/category/${category.id}`}
          active={activeTab === category.id ? 1 : 0}
          onClick={() => setActiveTab(category.id)}
        >
          {category.name}
        </Tab>
      ))}
    </TabsContainer>
  );
};

export default CategoryTabs;