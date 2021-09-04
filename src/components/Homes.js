import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { IoArrowForward } from 'react-icons/io5';

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

const RightArrow = styled(IoArrowForward)` margin-left: 0.5rem; `;


const Homes = ({
        heading,
        paragraphOne,
        paragraphTwo,
        buttonLabel,
        image1,
        image2
    }) => {
    return (
        <Section>
            <Container>
                <ColumnLeft>
                    <h1>{heading}</h1>
                    <img src={image1} alt='home' />
                    <p>{paragraphOne}</p>
                    <Button
                        style = {{marginLeft: -40,
                        fontSize: 17}}
                        to='/Homes' >
                        {buttonLabel}
                        < RightArrow />
                    </Button>
                </ColumnLeft>
                
                <ColumnRight>
                    <img src={image2} alt='home' />
                    <p>{paragraphTwo}</p>
                    <Button 
                    style = {
                        {marginLeft: -40,
                        fontSize: 17 }}
                        to='/Homes' >
                        {buttonLabel}
                        < RightArrow />
                    </Button>
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default Homes
