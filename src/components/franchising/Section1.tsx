import React from 'react'
import { Section1Styles } from '../../styles/franchising/Section1Styles'

function Section1() {
    return (
        <Section1Styles>
            
            <div className="div-info">
                <h1 className="extra-big">
                    Assaje è un brand <br />
                    completamente <br />
                    Made in Napoli.
                </h1>

                <p className="middle">
                    Molta della sua popolarità è stata determinata dalla motivazione di persone che hanno portato avanti il concept, i suoi valori e le sue ricette con una visione strategica comune sulla base di un principio di replicabilità.
                </p>

                <p className="middle">Condurre una pizzeria Assaje significa lavorarci attivamente tutti i giorni: trasmettendo i nostri valori e motivazione allo staff, accrescendo il marketing locale e le vendite.</p>
            </div>
            <img src="/images/franchising/img2.jpg" />

            <div className="div-info-2">
                <p className="middle">Il franchising di Assaje è fondato sulla scelta delle persone giuste a
                    cui affidare la gestione delle nostre pizzerie e dei nostri clienti.
                    <strong>Il candidato ideale ha preferenzialmente un profilo con esperienza manageriale ed
                        imprenditoriale, ed una solida capacità finanziaria.</strong></p>
            </div>
        </Section1Styles>
    )
}

export default Section1