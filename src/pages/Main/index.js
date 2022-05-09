import React from 'react'
import About from '../../components/About'
import Advantages from '../../components/Advantages'
import Banner from '../../components/Banner'
import Gallery from '../../components/Gallery'
import News from '../../components/News'
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