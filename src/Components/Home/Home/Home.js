import React from 'react';
import Body from '../Body/Body';
import Navigation from '../Navigation/Navigation';
import './Home.css'

const Home = () => {
    return (

        <section className="home">
            <div className="background"></div>
            <Navigation></Navigation>
            <Body></Body>
        </section>
    );
};

export default Home;