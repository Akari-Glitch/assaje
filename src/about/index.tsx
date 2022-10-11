import React from 'react'
import Section1 from '../components/about/Section1'
import Section2 from '../components/about/Section2'
import Section3 from '../components/about/Section3'
import Section4 from '../components/about/Section4'
import Maiolica from '../components/shared/Maiolica'
import Section5 from '../components/about/Section5'
import LaNostra from '../components/shared/LaNostra'
function About() {
    return (
        <>
            <Section1 />
            <Section2 />
            <Section3 />
            <Maiolica />
            <Section4 />
            <Section5 />
            <LaNostra />
        </>
    )
}

export default About