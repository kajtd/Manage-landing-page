import React from 'react';
import Navbar from './../components/Navbar/Navbar';
import Intro from './../components/Intro/Intro';
import WhatsDifferent from './../components/WhatsDifferent/WhatsDifferent';
import Opinions from './../components/Opinions/Opinions';
import GetStarted from './../components/GetStarted/GetStarted';
import Footer from './../components/Footer/Footer';


const Home = () => {
    return(
        <>
            <Navbar />
            <Intro />
            <WhatsDifferent />
            <Opinions />
            <GetStarted />
            <Footer />
        </>
    );
};

export default Home;