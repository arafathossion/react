import React from 'react';
import Banner from './Banner';
import Portfolio from './Portfolio';
import Resume from './Resume'; 
import Service from './Service';
import Testimonial from './Testimonial.js'

const Home = () => {
    return (
        <div>
            <Banner/>
            <Resume></Resume>
            <Portfolio/>
            <Service/>
            <Testimonial/>
        </div>
    );
};

export default Home;