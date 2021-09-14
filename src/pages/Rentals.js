import React, {useState, useRef, useEffect} from 'react';
import styled, {css} from 'styled-components/macro';
import {SliderDataTwo} from '../data/SliderData';
import { Button } from '../components/Button';
import {IoMdArrowRoundForward} from 'react-icons/io';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';
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

const HeroSection = styled.section`
    height: 100vh;
    max-height: 1100px;
    position: relative;
    overflow: hidden;
`;

const HeroWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`;

const HeroSlide = styled.div` z-index: 1; width: 100%; height: 100% `;

const HeroSlider = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
        content: '';
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100vh;
        bottom: 0vh;
        left: 0;
        overflow: hidden;
        opacity: 0.4;
        background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.2) 50%,
            rgba(0, 0, 0, 0.6) 100%
        );
    }
`;

const HeroImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`;

const HeroContent = styled.div`
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    max-width: 1600px;
    width: calc(100% - 100px);
    color: #fff;

    h1{
        font-size: clamp(1rem, 8vw, 2rem);
        font-weight: 400;
        text-transform: uppercase;
        text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    }

    p{
        margin-bottom: 1.2rem;
        text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    }
`;

const Arrow = styled(IoMdArrowRoundForward)``;

const SliderButtons = styled.div`
    position: absolute;
    bottom: 50px;
    right: 50px;
    dispaly: flex;
    z-index: 10;
`;

const arrowButtons = css`
    width: 50px;
    height: 50px;
    color: #fff;
    cursor: pointer;
    background: #000d1a;
    border-radius: 50px;
    padding: 10px;
    margin-right: 1rem;
    user-select: none;
    transition: 0.3s;

    &:hover{ background: #cd8f3f; transform: scale(1.05); }
`;

const NextArrow = styled(IoArrowForward)` ${arrowButtons} `;

const PrevArrow = styled(IoArrowBack)` ${arrowButtons} `;

const Rentals = ({ heading, buttonLabel }) => {
    const [current, setCurrent] = useState (0);
    const length = SliderDataTwo.length;
    const timeOut = useRef(null);

    useEffect(()=> {
        const nextSlide = () => {
            setCurrent(current === length-1 ? 0 : current + 1);
        };

        timeOut.current = setTimeout(nextSlide, 2000);

        return function() {
            if (timeOut.current) {
                clearTimeout(timeOut.current);
            }
        };
    }, [current, length] );

    const nextSlide = () => {
        if (timeOut.current) {
            clearTimeout(timeOut.current);
        }

        setCurrent(current === length-1 ? 0 : current + 1);
        // console.log(current);
    };

    const prevSlide = () => {
        if (timeOut.current) {
            clearTimeout(timeOut.current);
        }
        
        setCurrent(current === 0 ? length - 1 : current - 1);
        // console.log(current);
    };

    if(!Array.isArray(SliderDataTwo) || SliderDataTwo.length <= 0) {
        return null
    }
    
    return (
        <HeroSection>
            <HeroWrapper>
                {SliderDataTwo.map((slide, index) => {
                    return(
                        <HeroSlide key = {index}>
                            {index === current && (
                                <HeroSlider>
                                <HeroImage src={slide.image} alt={slide.alt} />
                                <HeroContent>
                                    <h1>{slide.title}</h1>
                                    <p>{slide.price}</p>
                                    <Button to={slide.path}
                                        primary='true'
                                        css={`max-width: 160px`}>
                                        {slide.label}
                                        <Arrow/>
                                    </Button>
                                </HeroContent>
                            </HeroSlider>
                            )}
                        </HeroSlide>
                    )
                })}
                <SliderButtons>
                    <PrevArrow onClick = {prevSlide}/>
                    <NextArrow onClick = {nextSlide} />
                </SliderButtons>
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
            </HeroWrapper>
        </HeroSection>
    )
}

export default Rentals
