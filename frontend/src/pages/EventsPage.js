import React from 'react';
import styled from 'styled-components';
import CategoryTabs from '../components/sections/CategoryTabs';
import FeaturedEvents from '../components/sections/FeaturedEvents';

const PageContainer = styled.div`
  min-height: calc(100vh - 64px);
`;

const PageHeader = styled.div`
  padding: 32px 24px;
  background-color: ${props => props.theme.colors.dark};
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

const EventsPage = () => {
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>All Events</PageTitle>
        <PageDescription>
          Discover and collect NFT tickets for all upcoming events across categories.
        </PageDescription>
      </PageHeader>
      
      <CategoryTabs />
      <FeaturedEvents title="All Events" />
    </PageContainer>
  );
};

export default EventsPage;