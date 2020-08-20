import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

const StyledUl = styled.ul`
    list-style: none;
    display:flex;
    background-color: white;
    z-index: 20;


    @media only screen and (max-width: 768px){
        width: 100vw;
        height: 90vh;
        position: absolute;
        
        top: 10vh;
        left: 0;

        
        flex-direction: column;
        align-items: center;
        padding-top: 50px;

        
        
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        transition: transform .3s ease-in-out;

        li{
            padding-bottom: 30px;
            font-size: 1.5em;
            text-transform: uppercase;
        }
    }
    

    @media only screen and (min-width: 768px){
        width: 50%;
        display: flex;
        justify-content: space-between;
    }

`

const NavLinks = ({ active, isMenuOpen }) => {
    const links = [
        {
            id: "pl",
            name: "Polska",
            url: '/',
        },
        {
            id: "uk",
            name: "Wielka Brytania",
            url: '/uk',
        },
        {
            id: "us",
            name: "Stany Zjednoczone",
            url: '/us',
        },
    ];

    return (
        <StyledUl open={isMenuOpen}>
            {links.map(({ id, name, url }) => <li key={id} style={{ fontWeight: id === active ? 'bold' : 'normal' }}><Link to={url}>{name}</Link></li>)
            }
        </StyledUl >
    )
}

export default NavLinks
