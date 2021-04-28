import React from 'react';
import './burger.css';
import Burgeringredient from './Burgeringri/BurgurIngredient';
const Burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients)
        .map( igKeys => {
            return [...Array(props.ingredients[igKeys])].map((_, i) => {

                return <Burgeringredient key={igKeys + i} type={igKeys}/>
            });
        }).reduce((arr, le) => {
            return arr.concat(le)
        }, []);

        if(transformedIngredients.length === 0) {
            transformedIngredients = <p>Please start adding ingredients!</p>
        }


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