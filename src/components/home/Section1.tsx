import React from 'react'
import { Section1Styles } from '../../styles/home/Section1Styles'
import { Link } from 'react-router-dom'
function Section1() {
    return (
        <Section1Styles>

            <div className='div-1'>
                <p className='p-1 big'>
                    <strong>
                        Una cucina piena <br />
                        di gusto e abbondanti <br />
                        portate come vuole <br />
                        la tradizione napoletana.
                    </strong>
                </p>

                <p className="p-2 middle">
                    <strong>
                        <Link to={""}>SCOPRI IL MENÚ</Link>
                    </strong>
                </p>
            </div>

            <div className='div-2 middle'>
                <p className="p-3">
                    Nato dalla passione di un gruppo napoletano, Assaje è un brand specializzato nella
                    preparazione di pizze gourmet e piatti tipici della tradizione napoletana.
                </p>
                <p className='p-3'>
                    Selezioniamo ingredienti freschi, genuini e di alta qualità: le nostre ricette propongono
                    cibi Slow Food, ovvero prodotti di pura provenienza partenopea per far conoscere i veri sapori
                    del nostro territorio e della tradizione locale.
                </p>
            </div>
        </Section1Styles>
    )
}

export default Section1