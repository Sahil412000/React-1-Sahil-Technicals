import React from 'react';
import Common from './CommanComponent';
import web from '../assets/images/me.PNG';

const About = ()=>{
    return(
        <>
        <Common name="Welcome to About Page"
        imgsrc={web}
        visit="/contact"
        btname="Contact Us"/>
        </>
    )
}

export default About;