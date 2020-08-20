import React from 'react'

import NavBar from '../components/NavBar'
import Hero from '../components/Hero';

const UnitedStates = () => {
    return (
        <div>
            <NavBar active="us" />
            <Hero country="Stany Zjednoczone" />
        </div>
    )
}

export default UnitedStates;