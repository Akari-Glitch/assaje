import React, { useState } from 'react'
import FrittiNapoletani from '../components/menu/FrittiNapoletani';
import Bruschette from '../components/menu/Bruschette';
import Dessert from '../components/menu/Dessert';
import PizzeContemporeanee from '../components/menu/PizzeContemporeanee';
import PizzeFritte from '../components/menu/PizzeFritte';
import PizzeGourmet from '../components/menu/PizzeGourmet';
import PizzeTradizionali from '../components/menu/PizzeTradizionali';
import PizzeVegane from '../components/menu/PizzeVegane';
import SalumiFormaggi from '../components/menu/SalumiFormaggi';
import { DropdownStyles } from '../styles/menu/DropdownStyles';
import { MenuStyles } from "../styles/menu/MenuStyles"

function Menu() {
    const [menu, setMenu] = useState(<SalumiFormaggi />)
    const [showDrop, setShowDrop] = useState(false)
    const [currentMenu, setCurrentMenu] = useState("FRITTI")
    const handleDrop = () => setShowDrop(!showDrop)
    const changeMenu = (component: JSX.Element, current: string) => {
        setMenu(component)
        setShowDrop(false)
        setCurrentMenu(current)
    }



    return (
        <MenuStyles>
            <DropdownStyles>
                <h2 className={showDrop ? `drop active` : `drop`} onClick={handleDrop}>IL NOSTOR MENU</h2>

                <ul className={showDrop ? "list-food list-food-active" : "list-food"}>
                    <li className={currentMenu == "FRITTI" ? "current" : ""} onClick={() => changeMenu(<SalumiFormaggi />, "FRITTI")}>FRITTI NAPOLETANI</li>
                    <li className={currentMenu == "SALUMI" ? "current" : ""} onClick={() => changeMenu(<FrittiNapoletani />, "SALUMI")}>SALUMI, FORMAGGI</li>
                    <li className={currentMenu == "BRUSCHETTE" ? "current" : ""} onClick={() => changeMenu(<Bruschette />, "BRUSCHETTE")}>BRUSCHETTE</li>
                    <li className={currentMenu == "TRADIZIONALI" ? "current" : ""} onClick={() => changeMenu(<PizzeTradizionali />, "TRADIZIONALI")}>PIZZE TRADIZIONALI</li>
                    <li className={currentMenu == "CONTEMPOREANEE" ? "current" : ""} onClick={() => changeMenu(<PizzeContemporeanee />, "CONTEMPOREANEE")}>PIZZE CONTEMPOREANEE</li>
                    <li className={currentMenu == "GOURMET" ? "current" : ""} onClick={() => changeMenu(<PizzeGourmet />, "GOURMET")}>PIZZE GOURMET</li>
                    <li className={currentMenu == "FRITTE" ? "current" : ""} onClick={() => changeMenu(<PizzeFritte />, "FRITTE")}>PIZZE FRITTE</li>
                    <li className={currentMenu == "VEGANE" ? "current" : ""} onClick={() => changeMenu(<PizzeVegane />, "VEGANE")}>PIZZE VEGANE</li>
                    <li className={currentMenu == "DESSERT" ? "current" : ""} onClick={() => changeMenu(<Dessert />, "DESSERT")}>DESSERT</li>
                </ul>
            </DropdownStyles>
            <ul className="list-menu">
                {menu}

            </ul>
        </MenuStyles>

    )
}

export default Menu