import React from 'react'
import Annoucement from '../components/Annoucement'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Categories from '../components/Categorie'
import Products from '../components/Products'
import Newletter from '../components/Newletter'
import Footer from '../components/Footer'
const Home = () => {
    return (
        <div>
            <Annoucement></Annoucement>
            <Navbar></Navbar>
            <Slider></Slider>
            <Categories/>
            <Products/>
            <Newletter/>
            <Footer/>

        </div>
    )
}

export default Home
