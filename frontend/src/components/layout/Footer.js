import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.dark};
  padding: 40px 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  
  .logo-square {
    width: 24px;
    height: 24px;
    background-color: ${props => props.theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    font-weight: bold;
    color: ${props => props.theme.colors.dark};
    font-size: 12px;
  }
  
  .logo-text {
    font-size: 18px;
    font-weight: bold;
    color: white;
  }
`;

const FooterDescription = styled.p`
  color: ${props => props.theme.colors.secondary};
  font-size: 0.9rem;
  margin-bottom: 16px;
  line-height: 1.5;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 12px;
`;

const SocialIcon = styled.a`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.secondary};
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.dark};
  }
`;

const FooterTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: white;
`;

const FooterLinks = styled.ul`
  list-style: none;
`;

const FooterLink = styled.li`
  margin-bottom: 8px;
  
  a {
    color: ${props => props.theme.colors.secondary};
    font-size: 0.9rem;
    transition: color 0.2s ease;
    
    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  font-size: 0.8rem;
  color: ${props => props.theme.colors.secondary};
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <FooterLogo>
            <div className="logo-square">TP</div>
            <div className="logo-text">TruePass</div>
          </FooterLogo>
          <FooterDescription>
            The ultimate marketplace for digital event tickets and experiences powered by blockchain technology.
          </FooterDescription>
          <SocialLinks>
            <SocialIcon href="#" aria-label="Twitter">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </SocialIcon>
            <SocialIcon href="#" aria-label="Discord">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 11C9 11 9.5 10 11 10C12.5 10 13 11 13 11M21 15V17C21 18.1046 20.1046 19 19 19H18C16.8954 19 16 18.1046 16 17V15M9 15L9 17C9 18.1046 8.10457 19 7 19H6C4.89543 19 4 18.1046 4 17V15M12.5 7C15.5376 7 18 9.46243 18 12.5C18 15.5376 15.5376 18 12.5 18C9.46243 18 7 15.5376 7 12.5C7 9.46243 9.46243 7 12.5 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </SocialIcon>
            <SocialIcon href="#" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61991 14.1902 8.22773 13.4229 8.09406 12.5922C7.9604 11.7615 8.09206 10.9099 8.47033 10.1584C8.84861 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2648 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.5 6.5H17.51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </SocialIcon>
          </SocialLinks>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Marketplace</FooterTitle>
          <FooterLinks>
            <FooterLink><Link to="/events">All Events</Link></FooterLink>
            <FooterLink><Link to="/category/concerts">Concerts</Link></FooterLink>
            <FooterLink><Link to="/category/sports">Sports</Link></FooterLink>
            <FooterLink><Link to="/category/festivals">Festivals</Link></FooterLink>
            <FooterLink><Link to="/category/conferences">Conferences</Link></FooterLink>
          </FooterLinks>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Account</FooterTitle>
          <FooterLinks>
            <FooterLink><a href="#">Profile</a></FooterLink>
            <FooterLink><a href="#">My Tickets</a></FooterLink>
            <FooterLink><a href="#">Favorites</a></FooterLink>
            <FooterLink><a href="#">Settings</a></FooterLink>
          </FooterLinks>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Resources</FooterTitle>
          <FooterLinks>
            <FooterLink><a href="#">Help Center</a></FooterLink>
            <FooterLink><a href="#">Blog</a></FooterLink>
            <FooterLink><a href="#">FAQ</a></FooterLink>
            <FooterLink><a href="#">Contact Us</a></FooterLink>
          </FooterLinks>
        </FooterColumn>
      </FooterContent>
      
      <FooterBottom>
        <div>© 2025 TruePass. All rights reserved.</div>
        <div>
          <a href="#" style={{ marginRight: '16px' }}>Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;