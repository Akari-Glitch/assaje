import React from 'react'
import { Section1Styles } from '../../styles/about/Section1Styles'
function Section1() {
    return (
        <Section1Styles>

            <img src="/images/about/img1.jpg" className="img img-1 rightmost" />

            <div className="div-info">
                <h1 className="extra-big title">CHI SIAMO</h1>
                <p className="middle">L’essenza del brand “Assaje” è riassunta nel suo claim “noi mangiamo assaje” che significa
                    ripercorrere la cultura gastronomica di Napoli e l’opulenza delle sue portate. Siamo l’anello
                    di congiunzione tra la pizza napoletana tradizionale e quella gourmet in un format che unisce
                    le abbondanti portate a prezzi accessibili. Cerchiamo di incarnare la tradizione napoletana con
                    i suoi sapori autentici, i suoi colori, la sua allegria e la sua calda accoglienza: infatti, la
                    nostra missione è offrire la migliore proposta gastronomica in un’atmosfera allegra e informale
                    con un servizio professionale e personalizzato.</p>
                <p className="middle bold">
                    UN SERVIZIO DI QUALITÀ E <br />INGREDIENTI DI PRIMA SCELTA.
                </p>
            </div>
        </Section1Styles>
    )
}

export default Section1
