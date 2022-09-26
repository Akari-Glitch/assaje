import React from 'react'
import { Link } from 'react-router-dom'
import { Section5Styles } from '../../styles/home/Section5Styles'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function Section5() {
    return (
        <Section5Styles>
            <h1 className="title-1">
                <Link to="/"> SCOPRI LE NOSTRE PIZZE VEGANE</Link>
            </h1>

            <div className="div-2">
                <form action="">
                    <h4 className="title-2">LA NOSTRA NEWSLETTER</h4>
                    <div className="input-1-container">
                        <input type="text" className="input-1" placeholder='Email' />
                        <ArrowForwardIcon className="send" />
                    </div>
                    <div>

                        <label className="ultra-small">
                            <input type="checkbox" className="checkbox" id="cbox1" value="first_checkbox" />
                            <div>
                                Do il mio consenso all'
                                <a href="">
                                    informativa sul trattamento dei dati personali.
                                </a>
                            </div>
                        </label>
                    </div>
                </form>
            </div>
        </Section5Styles>
    )
}

export default Section5