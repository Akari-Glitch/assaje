import React from 'react'
import { Section3Styles } from '../../styles/home/Section3Styles'
function Section3() {
    return (
        <Section3Styles>
            <div className="div-1">
                <h1 className='title extra-big'>INNOVAZIONE</h1>
                <p className='p-1 middle'>Ogni location dispone di una camera di lievitazione.</p>
                <p className='p-2 middle'>La camera ha una temperatura controllata, in cui il nostro impasto realizzato con metodo Biga,
                    composto da un blend di farine semi-integrali macinate a pietra, lievita almeno 30 ore.</p>
                <p className='p-3 middle'>L’alta tecnologia della camera di lievitazione ci permette di ottenere lo stesso impasto in ogni sede:
                    non importa dove sei, la pizza “assaje” sarà sempre la stessa.</p>
            </div>
            <div className='img-container'>
                <img src="/images/home/section3/Assaje_Udine.jpg" />
            </div>
        </Section3Styles>
    )
}

export default Section3