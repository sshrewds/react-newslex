import React from 'react'
import styled from 'styled-components'

const HeroWrapper = styled.div` 
    width: 80vw;
    margin: 5em auto 0;
`

const StyledHeader = styled.header`
    
    font-size: 2em;
    text-align: center;
    text-transform: uppercase;
    position: relative;

    ::before{
        position: absolute;
        
        content: '';
        transform: translateX(-7px);
        height: 100%;
        width: calc(2.5rem - 10px);
        background-color: #D20E0E; 
        z-index: -1;
    }
`

const StyledCountryName = styled.h1`
    font-size: 1.7em;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    margin-top: 5px;
`

const Hero = ({ country }) => {
    return (
        <HeroWrapper>
            <StyledHeader>
                Najważniejsze <br />
                Wiadomości
            </StyledHeader>
            <StyledCountryName>{country}</StyledCountryName>
        </HeroWrapper >
    )
}

export default Hero
