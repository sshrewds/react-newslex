import React from 'react'
import styled, { css } from 'styled-components'

const sharedStyles = css`
    width: 100%;
    height: 3px;
    display: inline-block;
    position: absolute;
    left: 0;
    background-color: black;

    transition: all .2s ease-in-out;
`

const Hamburger = styled.button`
    border: none;
    outline: none;
    background-color: transparent;

    .hamburger-box{
        width: 30px;
        height: 30px;
        display: inline-block;
        position: relative;
        z-index: 20;
    }
    
    .hamburger-inner{
        ${sharedStyles};
        top: 50%;
        transform: translateY(-50%);
        background-color: ${({ open }) => open ? 'transparent' : 'black'};

        &::before{
            ${sharedStyles};
            content: '';
            top: -10px;

            transform: ${({ open }) => open ? 'translateY(10px) rotate(45deg)' : 'rotate(0)'};
            
        }

        &::after{
            ${sharedStyles};
            content: '';
            top: 10px;

            transform: ${({ open }) => open ? 'translateY(-10px) rotate(-45deg)' : 'rotate(0)'};
            
        }
    }

    @media only screen and (min-width: 768px){
        display: none;
    }
`

const HamburgerMenu = ({ isMenuOpen, toggleMenu }) => {
    return (
        <Hamburger open={isMenuOpen} onClick={toggleMenu}>
            <span className="hamburger-box">
                <span className="hamburger-inner"></span>
            </span>
        </Hamburger>
    )
}

export default HamburgerMenu
