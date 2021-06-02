import React from 'react';
import FoodBody from '../FoodBody/FoodBody';
import Greating from '../Greating/Greating';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = () => {
    return (
        <>
            <Header></Header>
            <FoodBody></FoodBody>
            <Greating></Greating>
            <Footer></Footer>
        </>
    );
};

export default Home;