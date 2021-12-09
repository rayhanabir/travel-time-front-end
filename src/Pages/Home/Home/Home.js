import React from 'react';
import Banner from '../Banner/Banner';
import Gallary from '../Gallary/Gallary';
import Holiday from '../Holiday/Holiday';
import Places from '../Places/Places';

const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <Places/>
           <Holiday/>
           <Gallary/>
        </div>
    );
};

export default Home;