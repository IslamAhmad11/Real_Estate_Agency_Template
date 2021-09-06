import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';

export const Footer = styled.div`
  padding: 80px 60px;
  background-color: #12161f;
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const FooterRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
  &:hover {
      color: #ff9c00;
      transition: 200ms ease-in;
  }
`;

export const FooterTitle = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;

const FooterContainer = ({ heading, buttonLabel }) => {
    return (
    <Footer>
        <FooterWrapper>
            <FooterRow>
                <h1>{heading}</h1>
                <FooterColumn>
                <FooterTitle>Contact Us</FooterTitle>
                    <FooterLink href="#">FAQ</FooterLink>
                    <FooterLink href="#">Support</FooterLink>
                    <FooterLink href="#">Questions</FooterLink>
                </FooterColumn>
                <FooterColumn>
                <FooterTitle>Offices</FooterTitle>
                    <FooterLink href="#">United States</FooterLink>
                    <FooterLink href="#">Europe</FooterLink>
                    <FooterLink href="#">Canada</FooterLink>
                    <Button
                            style={{background: "#c4741f",
                            color: "#000"}}
                            to='/homes' primary='true'>
                            {buttonLabel}
                    </Button>
                </FooterColumn>
            
            </FooterRow>
        </FooterWrapper>
    </Footer>
    )
}

export default FooterContainer
