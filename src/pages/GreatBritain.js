import React from 'react'

import NavBar from '../components/navigation/NavBar'
import Hero from '../components/Hero';
import NewsList from '../components/news/NewsList';

const GreatBritain = () => {
    return (
        <div>
            <NavBar active="uk" />
            <Hero country="Wielka Brytania" />
            <NewsList country="gb" />
        </div>
    )
}

export default GreatBritain;