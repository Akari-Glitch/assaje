import React from 'react'
import { Section1Styles } from '../../styles/carriera/Section1Styles'
function Section1() {
    return (
        <Section1Styles>
            <img src="/images/carriera/img1.jpg" />
            <div className="div-info">
                <h1 className="extra-middle">LAVORA CON NOI</h1>
                <p className="middle">
                    Assaje crede fortemente nei giovani e nella loro determinazione. È per questo <br />
                    che il nostro staff è composto solo da giovani professionisti in grado di garantire un servizio efficiente ed attento ma soprattutto customizzato per soddisfare le esigenze dei nostri clienti. <br />
                    Il nostro team trasmette perfettamente l’animo, l’umorismo e la generosità napoletana, i capisaldi del nostro brand.
                </p>
                <p className="big bold">
                    Vuoi lavorare con noi? <br />
                    Compila il form sottostante!
                </p>
            </div>
        </Section1Styles>
    )
}

export default Section1