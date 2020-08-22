import React, { useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import HamburgerMenu from './HamburgerMenu';
import NavLinks from './NavLinks';


const Nav = styled.div`
    width: 100vw;
    height: 10vh;
    position: fixed;
    top: 0;
    left:0;
    background-color: white;
    z-index: 20;
    
    a{
        color: black;
        text-decoration: none;

        &:active{
            color: black;
        }
    }
    
    .container{
        width: 80vw;
        height: 100%;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        

        .logo{
            font-size: 26px;
            
        }
    }

`

const NavBar = ({ active }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Nav>
            <div className="container">
                <div className="logo">
                    <Link to='/' style={{ color: '#D20E0E' }}>NEWSlex</Link>
                </div>

                <HamburgerMenu isMenuOpen={isMenuOpen} toggleMenu={() => setIsMenuOpen(!isMenuOpen)} />
                <NavLinks active={active} isMenuOpen={isMenuOpen} />
            </div>
        </Nav>

    )
}

export default NavBar;
