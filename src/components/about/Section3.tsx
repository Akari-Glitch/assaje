import React from 'react'
import { Section3Styles } from '../../styles/about/Section3Styles'
import { NavLink } from 'react-router-dom';
function Section3() {

    let scroll = document.scrollingElement as HTMLElement

    const handleScroll = () => {
        scroll.scrollTop = 0
    };

    return (
        <Section3Styles>
            <h1 className="extra-big">
                Una cucina piena di gusto e abbondanti portate come vuole la tradizione napoletana.
            </h1>
            <NavLink to={"/menu"} onClick={handleScroll} className="link big">
                SCOPRI IL MENÚ
            </NavLink>
        </Section3Styles>
    )
}

export default Section3