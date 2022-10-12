import React from 'react'
import { NavLink } from 'react-router-dom'
import { LaNostraStyles } from '../../styles/shared/LaNostraStyles'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function LaNostra() {
    let scroll = document.scrollingElement as HTMLElement

    const handleScroll = () => {
        scroll.scrollTop = 0
    };
    return (
        <LaNostraStyles>

            <div className="div-2">
                <form action="">
                    <h4 className="title-2">LA NOSTRA NEWSLETTER</h4>
                    <div className="input-1-container">
                        <input type="text" className="input-1" placeholder='Email' required />
                        <ArrowForwardIcon className="send" />
                    </div>
                    <div>

                        <label className="ultra-small">
                            <input type="checkbox" className="checkbox" id="cbox1" value="first_checkbox" required />
                            <div>
                                Do il mio consenso all'
                                <NavLink to={"/privacy-policy"} onClick={handleScroll}>
                                    informativa sul trattamento dei dati personali.
                                </NavLink>
                            </div>
                        </label>
                    </div>
                </form>
            </div>
        </LaNostraStyles>
    )
}

export default LaNostra