import React from 'react'
import { Section2Styles } from '../../styles/about/Section2Styles'
function Section2() {
  return (
    <Section2Styles reverse={false}>
      <img className="img" src="/images/about/img2.jpg" />
      <div className="div-info">
        <h1 className="extra-big title">MASTRO <br /> PIZZAIOLO</h1>
        <span className="middle bold">MARCO DI GIOVANNI</span>
        <p className="middle">Marco nasce da una famiglia di ristoratori: Papà, Zii e Nonni tutti Chef e Pizzaioli.
          Prende il meglio delle esperienze lavorative dei suoi cari e le fa proprie. A 16 anni é già Pizzaiolo.
          Ma non bastava.. Marco inizia a viaggiare, passando da piccoli contesti come Ischia a grandi metropoli
          come Miami e Milano. 13 anni fa, il Maestro entra a far parte della nostra azienda e d’allora non ci ha più
          lasciato! Oggi Marco é il maestro, mentore e formatore di tutti i Pizzaioli Assaje. Alla domanda “cosa ti
          ha fatto diventare quello che sei oggi?” Marco risponde: l’esperienza della mia famiglia, tanti viaggi ma
          soprattutto me stesso, tanto studio e tanta voglia di imparare e sperimentare cose nuove ogni giorno della
          mia vita!</p>

      </div>
    </Section2Styles>
  )
}

export default Section2