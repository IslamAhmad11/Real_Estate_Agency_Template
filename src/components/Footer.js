import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'

const Section = styled.section`
    width: 100%;
    background-color: #12161f;
    color: #fff;
    padding: 0rem 4rem;
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 3rem;
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const ColumnRight = styled.div`
    dispaly: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 1.4;
    margin-top: 12rem;

    h1 {
        margin-bottom: 1rem;
        font-size: clamp(1.5rem, 6vw, 2rem);
    }

    p {
        margin-bottom: 2rem;
    }
`;

const ColumnLeft = styled.div`
    padding: 4rem;
    display: block;
    justify-content: center;
    align-items: center;
`;

const Footer = ({
    buttonLabel,
}) => {
    return (
        <Section>
            <Container>
                <ColumnRight>
                    <h1>Let's find your Dream Home</h1>
                    <p>icons</p>
                </ColumnRight>
                <ColumnLeft>
                    <p>Links</p>
                    <Button to='/homes' primary='true'>
                        {buttonLabel}
                    </Button>
                </ColumnLeft>
            </Container>
        </Section>
    )
}

export default Footer
