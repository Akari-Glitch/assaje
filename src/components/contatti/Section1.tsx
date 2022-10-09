import React from 'react'
import { Section1Styles } from '../../styles/contatti/Section1Styles'
function Section1() {
    return (
        <Section1Styles>

            <div className="div-1">
                <div className="img" />
            </div>

            <div className="div-2">
                <h1 className="title extra-big">ENTRA IN CONTATTO CON ASSAJE!</h1>
                <div className="contatti-info">
                    <div>
                        <h2 className="small">TORINO</h2>
                        <p className="small">Via Andra Doria 11 <br />
                            tel 0117802618 <br />
                            torino@assaje.it</p>
                    </div>
                    <div>
                        <h2 className="small">MILANO SANZIO</h2>
                        <p className="small">Via Raffaello Sanzio 14<br />
                            tel 0243982700<br />
                            milano.sanzio@assaje.it</p>
                    </div>
                    <div>
                        <h2 className="small">TRIESTE</h2>
                        <p className="small" >Via Torino 33 <br />
                            tel 0409871246 <br />
                            trieste@assaje.it</p>
                    </div>
                    <div>
                        <h2 className="small">MILANO SEGRINO</h2>
                        <p className="small">Via Piazzale Segrino <br />
                            tel 02606456 <br />
                            milano.trau@assaje.it</p>
                    </div>
                    <div>
                        <h2 className="small">UDINE</h2>
                        <p className="small">Piazza Giacomo Matteotti 11<br />
                            tel 04321437210<br />
                            udine@assaje.it</p>
                    </div>
                    <div>
                        <h2 className="small">MILANO BARACCA</h2>
                        <p className="small">Viale di Porta Vercellina 2<br />
                            tel 0243983226<br />
                            milano.baracca@assaje.it</p>
                    </div>
                </div>
            </div>
        </Section1Styles>
    )
}

export default Section1