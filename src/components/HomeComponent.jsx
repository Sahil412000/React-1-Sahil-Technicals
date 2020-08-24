import React from 'react';
import Common from './CommanComponent';
import web from '../assets/images/main-img.png';

const Home = ()=>{
    return(
        <>
        <Common name="Grow your business with"
        imgsrc={web}
        visit="/services"
        btname="Get Started"/>
        </>
    )
}

export default Home;