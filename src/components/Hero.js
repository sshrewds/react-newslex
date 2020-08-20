import React from 'react'
import styled from 'styled-components'

const HeroWrapper = styled.div` 
    /* position: absolute;
    top: 20vh; */
    width: 80vw;
    margin: 50px auto 0;
`

const StyledHeader = styled.header`
    
    font-size: 3em;
    text-align: center;
    text-transform: uppercase;
    position: relative;

    ::before{
        position: absolute;
        
        content: '';
        transform: translateX(-7px);
        height: 100%;
        width: 30px;
        background-color: #D20E0E; 
        z-index: -1;
    }
`

const StyledCountryName = styled.h1`
    font-size: 2.5em;
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
