import React from 'react'
import { Section1Styles } from '../../styles/location/Section1Styles'
function Section1() {
  return (
    <Section1Styles>
      <div className="div-1">
        <img src="/images/location/img1.jpg" />
      </div>

      <div className="div-2">
        <div>
          <h1 className="title extra-big">LE NOSTRE LOCATION</h1>
          <p className="p-1 middle">Un team di esperti architetti ha curato e cura gli arredamenti interni ed esterni in modo che
            sia garantito un alto livello di replicabilità e che, allo stesso tempo, sia richiamato uno
            spaccato della città partenopea nei decori, negli arredi, nelle “riggiole” (piastrelle) arrivate
            a Napoli grazie all’influenza spagnola che va dal Vicereame del 1500 al Regno delle Due Sicilie,
            nei decori artistici che rivivono nelle architetture di ogni locale.</p>
          <p className="p-2 middle">
            I colori beige, bianco e turchese campeggiano qui e lì all’interno degli spazi dove la preziosa
            oggettistica napoletana, tra tamburrelli, “curnicielli” (cornetti) e  peperoncini, insieme alla
            riproduzione su tela di illustri personaggi partenopei, come Totò e Sofia Loren, evidenziano
            profondamente l’elogio di una specifica appartenenza territoriale.
          </p>

          <p className="p-3 big">
            Non a caso, il logo, fortemente <br /> identitario, si fa notare con <br />preponderanza in ogni aspetto del<br /> locale,
            dalla mise en place ai quadri.
          </p>
        </div>
      </div>
    </Section1Styles>
  )
}

export default Section1