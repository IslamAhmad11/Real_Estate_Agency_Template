import React from 'react';
import styled, {css} from 'styled-components';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn, FaArrowRight } from 'react-icons/fa';
import { InfoDataTwo, InfoDataFive } from "../data/InfoData";
import { Button } from '../components/Button';

const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 4rem 0rem;
`;

const Container = styled.div`
    padding: 3rem calc((100vw - 1300px) / 2);
    display: grid;
    grid-gap: 30px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 900px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const ColumnRight = styled.div`
    margin-top: 11rem;
    img{ width: 100%; }

    p { 
        margin-top: 1rem;
        font-size: 1.5rem;
        margin-left: -2px;
     }
`;

const ColumnLeft = styled.div`
    h1 {
        margin-bottom: 4rem;
        font-size: clamp(1.5rem, 6vw, 2rem);
    }

    img{width: 100%;}

    p { 
        margin-top: 1rem;
        font-size: 1.5rem;
        margin-left: -2px;
     }
`;

const RightArrow = styled(FaArrowRight)` margin-left: 0.5rem; `;

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

const RightArrow2 = styled(FaArrowRight)` margin-left: 0.5rem; `;
const FacebookIcon = styled(FaFacebookF)` ${Icons} `;
const InstagramIcon = styled(FaInstagram)` ${Icons} `;
const YoutubeIcon = styled(FaYoutube)` ${Icons} `;
const LinkedinIcon = styled(FaLinkedinIn)` ${Icons} `;

const HomesPage = () => {
    return (
        <Section id='Home'>
            <Container>
                {InfoDataTwo.map((item, index) => {
                    return(
                        <>
                            <ColumnLeft key={index}>
                                <h1>{item.heading}</h1>
                                <img src={item.image1} alt='home' />
                                <p>{item.paragraphOne}</p>
                                <Button
                                    style = {{marginLeft: -40,
                                    fontSize: 17}}
                                    to='/Homes' >
                                    {item.buttonLabel}
                                    < RightArrow />
                                </Button>
                            </ColumnLeft>
                            
                            <ColumnRight>
                                <img src={item.image2} alt='home' />
                                <p>{item.paragraphTwo}</p>
                                <Button 
                                style = {
                                    {marginLeft: -40,
                                    fontSize: 17 }}
                                    to='/Homes' >
                                    {item.buttonLabel}
                                    < RightArrow2 />
                                </Button>
                            </ColumnRight>
                        </>
                    )
                })}

                <Footer>
                    <FooterWrapper>
                        {InfoDataFive.map((item,index) => {
                            return(
                                <>
                                    <FooterRow1 key={index}>
                                        <h1>{item.heading}</h1>
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
                                                {item.buttonLabel}
                                                < RightArrow />
                                            </Button>
                                        </FooterColumn>
                                    </FooterRow2>
                                </>
                            )
                        })}
                        
                    </FooterWrapper>
                </Footer>  
            </Container>
        </Section>
    )
}

export default HomesPage
