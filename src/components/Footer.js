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
    padding: 3rem ;
    display: block;
    order: 1;

    p {
        margin-bottom: 4rem;
    }
`;

const ColumnLeft = styled.div`
    padding: 3rem;
    display: block;

    h1 {
        font-size: clamp(1.5rem, 6vw, 2rem);
    }

    p{
        margin-top: 4rem;
    }

`;

const Footer = ({
    heading,
    buttonLabel,
    links
}) => {
    return (
        <Section>
            <Container>
                <ColumnRight>
                    <p>Links</p>
                    <Button to='/homes' primary='true'>
                        {buttonLabel}
                    </Button>
                </ColumnRight>
                <ColumnLeft>
                    <h1>{heading}</h1>
                    <p>icons</p>
                </ColumnLeft>
            </Container>
        </Section>
    )
}

export default Footer
