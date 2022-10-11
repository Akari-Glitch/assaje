import React from 'react'
import { Section2Styles } from '../../styles/about/Section2Styles'
function Section5() {
    return (
        <Section2Styles reverse={true}>
            <img className="img" src="/images/about/img4.jpg" />
            <div className="div-info">
                <h1 className="extra-middle bold">NOI NON VOGLIAMO <br />
                    PIZZE DI PLASTICA… <br />
                    FIGURIAMOCI IL MONDO</h1>
                <p className="middle">Per il nostro brand, sostenibilità significa saper creare valore a lungo termine,
                    riducendo al minimo l’impatto ambientale delle nostre attività.</p>
                <p className="middle">
                    Siamo consapevoli della responsabilità che abbiamo e per questo portiamo avanti un progetto di sostenibilità.
                </p>

                <p className="middle">
                    L’attenzione alla biodiversità e alla tutela del patrimonio naturale sono i principi che ci hanno spinto a eliminare tutti gli oggetti di plastica.
                </p>
            </div>
        </Section2Styles>
    )
}

export default Section5