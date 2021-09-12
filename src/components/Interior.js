import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'

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

const Interior = ({
    heading,
    paragraphOne,
    paragraphTwo,
    buttonLabel,
    image
}) => {
    return (
        <Section id='Interior'>
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
            </Container>
        </Section>
    )
}

export default Interior
