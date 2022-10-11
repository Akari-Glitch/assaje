import React from 'react'
import Carousel from '../components/home/Carousel'
import Section1 from "../components/home/Section1"
import Section2 from '../components/home/Section2'
import VeniTrovarci from '../components/shared/VeniTrovarci'
import Maiolica from "../components/shared/Maiolica"
import Section3 from '../components/home/Section3'
import Section4 from "../components/home/Section4"
import LaNostra from '../components/shared/LaNostra'
function Home() {
  return (
    <>
      <Carousel></Carousel>
      <Section1></Section1>
      <Section2></Section2>
      <VeniTrovarci></VeniTrovarci>
      <Maiolica></Maiolica>
      <Section3></Section3>
      <Section4></Section4>
      <LaNostra></LaNostra>
    </>
  )
}

export default Home