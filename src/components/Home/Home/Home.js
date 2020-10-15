import React from 'react';
import FeedBack from '../FeedBack/FeedBack/FeedBack';
import Footer from '../Footer/Footer';
import Header from '../Header/Header/Header';
import ProvideServices from '../ProvideServices/ProvideServices/ProvideServices';
import Works from '../Works/Works/Works';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <ProvideServices></ProvideServices>
            <Works></Works>
            <FeedBack></FeedBack>
            <Footer></Footer>
        </div>
    );
};

export default Home;