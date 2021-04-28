import React from 'react';
import './burger.css';
import Burgeringredient from './Burgeringri/BurgurIngredient';
const Burger = (props) => {

    const transformedIngredients = Object.keys(props.ingredients)
        .map( igKeys => {
            return [...Array(props.ingredients[igKeys])].map((_, i) => {

                return <Burgeringredient key={igKeys + i} type={igKeys}/>
            });
        });


        console.log(transformedIngredients)

    return (
        <div className='Burger'>
            <Burgeringredient type='bread-top'/>
                {transformedIngredients}
            <Burgeringredient type='bread-bottom'/>
        </div>
    );
}


export default Burger;