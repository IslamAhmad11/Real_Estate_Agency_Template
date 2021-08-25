import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'

const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 4rem 0rem;
`;

const Container = styled.div`
    padding: 3rem calc((100vw - 1300px) / 2);
    dispaly: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 800px;
    
    @media screen and (max-width: 768){
        grid-template-columns: 1fr;
    }
`;

const ColumnRight = styled.div``;
const ColumnLeft = styled.div`
    dispaly: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 1.4;
    padding: 1rem 2rem;
    order: ${({reverse}) => (reverse ? '2' : '1')};
`;

const InfoSection = ({
    heading,
    paragraphOne,
    paragraphTwo,
    buttonLabel,
    reverse,
    image
}) => {
    return (
        <Section>
            <Container>
                <ColumnLeft>
                    <h1>{heading}</h1>
                    <p>{paragraphOne}</p>
                    <p>{paragraphTwo}</p>
                    <Button to='/homes' primary='true'>     {buttonLabel}
                    </Button>
                </ColumnLeft>
                <ColumnRight reverse={reverse}>
                    <img src={image} alt='home' />
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default InfoSection
