import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { IoArrowForward, IoLogoFacebook, IoLogoYoutube, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5';

const Footer = styled.div`
  padding: 80px 60px;
  background-color: #12161f;
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

const FooterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1000px;
    margin: 0 auto;
`;

const FooterRow1 = styled.div`
display: grid;
justify-content: space-between;
color: #fff;
margin: 0;
h1 { white-space: pre-line; font-size: 60px; }

p{margin-top: 3rem;}

`;

const FooterRow2 = styled.div`
  display: flex;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
  &:hover {
      color: #ff9c00;
      transition: 200ms ease-in;
  }
`;

const FooterTitle = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;

const Icons = styled.div`
  display: flex;
  color: #c4741f;
  margin-top: 3rem;
  `;

const RightArrow = styled(IoArrowForward)` margin-left: 0.5rem; `;
const FacebookIcon = styled(IoLogoFacebook)` margin-right: 1rem; font-size: 25px; `;
const InstagramIcon = styled(IoLogoInstagram)` margin-right: 1rem; font-size: 25px; `;
const YoutubeIcon = styled(IoLogoYoutube)` margin-right: 1rem; font-size: 25px; `;
const LinkedinIcon = styled(IoLogoLinkedin)` margin-right: 1rem; font-size: 25px; `;


const FooterContainer = ({ heading, buttonLabel }) => {
    return (
    <Footer>
        <FooterWrapper>
            <FooterRow1>
                <h1>{heading}</h1>
                <Icons>
                    <FacebookIcon />
                    <InstagramIcon />
                    <YoutubeIcon />
                    <LinkedinIcon />
                </Icons>    
            </FooterRow1>
            <FooterRow2>
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
                            < RightArrow />
                    </Button>
                </FooterColumn>
            
            </FooterRow2>
        </FooterWrapper>
    </Footer>
    )
}

export default FooterContainer
