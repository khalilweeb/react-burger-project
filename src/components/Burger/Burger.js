import React from 'react';
import './burger.css';
import Burgeringredient from './Burgeringri/BurgurIngredient';
const Burger = (props) => {
    return (
        <div className='Burger'>
            <Burgeringredient type='bread-top'/>
            <Burgeringredient type='cheese'/>
            <Burgeringredient type='meat'/>
            <Burgeringredient type='bread-bottom'/>
        </div>
    );
}


export default Burger;