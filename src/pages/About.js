import React from 'react'
import { Button } from '../components/Button'
import styled, {css} from 'styled-components';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn, FaArrowRight } from 'react-icons/fa';

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

const FooterLink = styled(Link)`
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

const IconsWrapper = styled.div`
  display: flex;
  color: #c4741f;
  margin-top: 3rem;
`;

const Icons = css`
    margin-right: 1rem;
    font-size: 25px;
    cursor: pointer;
    &:hover {
      color: #ff9c00;
      transition: 200ms ease-in;
  }
`;

const RightArrow = styled(FaArrowRight)` margin-left: 0.5rem; `;
const FacebookIcon = styled(FaFacebookF)` ${Icons} `;
const InstagramIcon = styled(FaInstagram)` ${Icons} `;
const YoutubeIcon = styled(FaYoutube)` ${Icons} `;
const LinkedinIcon = styled(FaLinkedinIn)` ${Icons} `;


const Section = styled.section`
    width: 100%;
    height: 100%;
    background-color: #12161f;
    color: #fff;
    padding: 4rem 0rem;
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 800px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const ColumnRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 100%;
        height: 70%;
        @media screen and (max-width: 768px) {
            width: 90%;
            height: 90%;
        }
    }
`;

const ColumnLeft = styled.div`
    height: 50%;
    padding: 4rem;
    background-color: #fff;
    color: #000;
    margin-top: 12rem;

    h1 {
        margin-bottom: 1.5rem;
        font-size: clamp(1.5rem, 6vw, 2rem);
    }

    p {
        margin-bottom: 2rem;
    }
`;

const About = ({
    heading,
    paragraphOne,
    paragraphTwo,
    buttonLabel,
    image
}) => {
    return (
        <Section>
            <Container>
                <ColumnLeft>
                    <h1>{heading}</h1>
                    <p>{paragraphOne}</p>
                    <p>{paragraphTwo}</p>
                    <Button
                        style={{background: "#c4741f",
                        color: "#000"}}
                        to='/homes' primary='true'>
                        {buttonLabel}
                    </Button>
                </ColumnLeft>
                <ColumnRight>
                    <img src={image} alt='home' />
                </ColumnRight>
                <Footer>
                    <FooterWrapper>
                        <FooterRow1>
                            <h1>{heading}</h1>
                            <IconsWrapper>
                                <YoutubeIcon />
                                <InstagramIcon />
                                <FacebookIcon />
                                <LinkedinIcon />
                            </IconsWrapper>    
                        </FooterRow1>
                        <FooterRow2>
                            <FooterColumn>
                            <FooterTitle>Contact Us</FooterTitle>
                                <FooterLink to="#">FAQ</FooterLink>
                                <FooterLink to="#">Support</FooterLink>
                                <FooterLink to="#">Questions</FooterLink>
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
            </Container>
        </Section>
    )
}

export default About
