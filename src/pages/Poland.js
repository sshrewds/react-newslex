import React from 'react'

import NavBar from '../components/navigation/NavBar'
import Hero from '../components/Hero'
import NewsList from '../components/news/NewsList'

const Poland = () => {


    return (
        <div>
            <NavBar active="pl" />
            <Hero country="Polska" />
            <NewsList market="pl-PL" />

        </div>
    )
}

export default Poland;