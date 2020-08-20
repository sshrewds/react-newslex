import React from 'react'

import NavBar from '../components/NavBar'
import Hero from '../components/Hero';

const GreatBritain = () => {
    return (
        <div>
            <NavBar active="uk" />
            <Hero country="Wielka Brytania" />
        </div>
    )
}

export default GreatBritain;