import React from 'react'

import NavBar from '../components/navigation/NavBar'
import Hero from '../components/Hero';
import NewsList from '../components/news/NewsList';

const UnitedStates = () => {
    return (
        <div>
            <NavBar active="us" />
            <Hero country="Stany Zjednoczone" />
            <NewsList market="en-US" />
        </div>
    )
}

export default UnitedStates;