import React, { useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import HamburgerMenu from './navigation/HamburgerMenu';
import NavLinks from './navigation/NavLinks';

const Nav = styled.div`
    width: 100vw;
    height: 10vh;
    /* position: fixed; */
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
        width: 90%;
        height: 100%;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        

        .logo{
            font-size: 1.5em;
            
        }
    }

`



const NavBar = ({ active }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Nav>
            <div className="container">
                <div className="logo">
                    <Link to='/'>NEWSlex</Link>
                </div>

                <HamburgerMenu isMenuOpen={isMenuOpen} toggleMenu={() => setIsMenuOpen(!isMenuOpen)} />
                <NavLinks active={active} isMenuOpen={isMenuOpen} />
            </div>
        </Nav>

    )
}

export default NavBar;
