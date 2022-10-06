import React from 'react'
import List from './List'
import { menu } from "./menu"
import Title from './Title'
function Dessert() {
    return (

        <>
            <Title title={menu[8].title}></Title>

            {menu[8].foods.map((food, index) => {
                return <List key={String(food) + index} title={food.title}
                    image={food.image as string}
                    ingredients={food.ingredients as string[]}
                    extra={food.extra as string[]} />
            })}
        </>
    )
}

export default Dessert