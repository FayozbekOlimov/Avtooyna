import React from 'react'
import About from './About'
import Advantages from './Advantages'
import Banner from './Banner'
import Gallery from './Gallery'
import News from './News'
import Header from '../../layout/Header'

const Main = () => {
    return (
        <>
            <Header />
            <Banner />
            <Advantages />
            <About />
            <News />
            <Gallery />
        </>
    )
}

export default Main