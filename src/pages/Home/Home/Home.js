import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import OurExpress from '../OurExpress/OurExpress';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Products></Products>
            <OurExpress></OurExpress>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;