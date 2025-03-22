import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import CategoryTabs from '../components/sections/CategoryTabs';
import FeaturedEvents from '../components/sections/FeaturedEvents';
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>
const PageContainer = styled.div`
  min-height: calc(100vh - 64px);
`;

const PageHeader = styled.div`
    padding: 32px 24px;
    background-color: ${props => props.theme.colors.dark};
    font-family: 'Poppins', sans-serif;
`;

const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 8px;
`;

const PageDescription = styled.p`
  color: ${props => props.theme.colors.secondary};
  max-width: 600px;
`;

const CategoryPage = () => {
  const { categoryName } = useParams();
  
  // Format category name for display
  const formatCategoryName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };
  
  // Get category description
  const getCategoryDescription = (name) => {
    const descriptions = {
      concerts: 'Live music performances featuring top artists from around the world.',
      parties: 'Exclusive nightlife experiences and VIP club events.',
      sports: 'Professional and amateur sporting events and competitions.',
      festivals: 'Multi-day celebrations featuring music, art, and culture.',
      theater: 'Broadway shows, plays, and theatrical performances.',
      exhibitions: 'Art galleries, museums, and cultural exhibitions.',
      conferences: 'Professional gatherings, workshops, and industry events.',
    };
    
    return descriptions[name] || 'Discover and collect NFT tickets for upcoming events.';
  };
  
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>{formatCategoryName(categoryName || 'Events')}</PageTitle>
        <PageDescription>{getCategoryDescription(categoryName)}</PageDescription>
      </PageHeader>
      
      <CategoryTabs />
      <FeaturedEvents title={`${formatCategoryName(categoryName || 'Featured')} Events`} />
    </PageContainer>
  );
};

export default CategoryPage;