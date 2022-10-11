import React from 'react'
import { PolicyStyles } from '../styles/policy'
import LaNostra from '../components/shared/LaNostra'
function Copyright() {
    return (
        <>
        <PolicyStyles>
            <h1 className='extra-middle'>COPYRIGHT</h1>

            <p className="middle">Il presente sito i suoi contenuti, testi, documenti, marchi, loghi, immagini, grafica, la loro disposizione e i loro adattamenti sono coperti da copyright e sono protetti dalla legge sul Diritto d’Autore e dalla Normativa a Tutela dei Marchi (Legge 22 aprile 1941 n.633 e successive modifiche, Regio Decreto n. 929 del 21 giugno 1942 e successive modifiche) e dal Codice di Proprietà Industriale.</p>
            <p className="middle">All’interno del presente sito potranno essere presenti anche immagini, documenti, loghi e marchi di terze parti che hanno espressamente autorizzato alla pubblicazione degli stessi nel sito. Anche il suddetto materiale di terzi è protetto dalle predette normative ed è coperto da copyright.</p>
            <p className="middle">È fatto divieto di copiare, alterare, distribuire, pubblicare o utilizzare i contenuti del sito senza autorizzazione espressa scritta da parte della Società i cui riferimenti sono in calce al presente Sito.</p>
        </PolicyStyles>
        <LaNostra/>
        </>
    )
}

export default Copyright