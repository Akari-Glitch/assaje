import React from 'react'
import {
  BrowserRouter,
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
const App: React.FC = () => {
  return (

    <BrowserRouter>

      <Navbar></Navbar>
      <ContainerStyles>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/location" element={<Location />} />
          <Route path="/contatti" element={<Contatti/>}></Route>
        </Routes>
        <Footer></Footer>
      </ContainerStyles>
    </BrowserRouter>

  )
}

export default App


