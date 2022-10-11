import React from 'react'
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './home';
import Navbar from './components/Navbar';
import { ContainerStyles } from './styles/ContainerStyles';
import Footer from './components/Footer';
import Menu from './menu';
import Location from './location';
import Contatti from './contatti';
import About from "./about"
import PrivacyPolicy from './privacy-policy';
import CookiePolicy from './cookie-policy';
import Copyright from './copyright';
import Carriera from './carriera';
const App: React.FC = () => {
  return (

    <HashRouter>

      <Navbar></Navbar>
      <ContainerStyles>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/location" element={<Location />} />
          <Route path="/contatti" element={<Contatti />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/carriera" element={<Carriera />}></Route>
          <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
          <Route path="/cookie-policy" element={<CookiePolicy />}></Route>
          <Route path="/copyright" element={<Copyright />}></Route>

        </Routes>
        <Footer></Footer>
      </ContainerStyles>
    </HashRouter>

  )
}

export default App


