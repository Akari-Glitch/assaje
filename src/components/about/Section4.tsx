import React from 'react'
import { Section2Styles } from '../../styles/home/Section2Styles'

function Section4() {
    return (
        <Section2Styles className="about">
            <div className="div-1">
                <img src="/images/about/img3.jpg" />
            </div>
            <div className="div-2">
                <div>
                    <p className='p-1 big'> <strong>Le nostre porzioni sono <br />
                        <i> assaje </i>cosi come la qualità <br />
                        dei nostri prodotti.</strong></p>
                    <p className='p-2 extra-middle'><strong>Selezioniamo <br />
                        ingredienti<br />
                        freschi, genuini<br />
                        e di alta qualità.</strong></p>
                    <p className='p-3 middle'>Riproponiamo su pizza tutto ciò che di buono e autentico la natura ci
                        regala nel pieno rispetto della stagionalità.</p>
                </div>
            </div>
        </Section2Styles>
    )
}

export default Section4