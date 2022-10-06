import React, { useState } from 'react'
import { ListStyles } from '../../styles/menu/ListStyles'

interface Props {
    title: string;
    image: string;
    ingredients: string[];
    extra: string[];
}
function List(props: Props) {

    const [showIngredients, setShowIngredients] = useState(false);

    const handleIngredients = () => setShowIngredients(!showIngredients)
    return (

        <ListStyles>
            <div className='container-img'>
                <img src={props.image} />
            </div>
            <h2 >{props.title}</h2>
            <p className="scropi" onClick={handleIngredients}>Scopri gli ingredienti</p>
            <ul className={showIngredients ? "ingredients-active" : "ingredients"}>
                {props.ingredients.map((ingredient) => {
                    return <li key={ingredient + `key`} className="small">
                        {ingredient}
                    </li>
                })}
                {props.extra?.length != 0 ?

                    props.extra.map(extra => {
                        return <p key={extra + "key"} className="extra small">{extra}</p>
                    }) : undefined}

            </ul>

        </ListStyles>
    )
}

export default List