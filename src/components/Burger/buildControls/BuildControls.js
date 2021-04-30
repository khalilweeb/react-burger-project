import React from 'react';
import './buildctronle.css';
import BuildControl from './buildControl/BuildControl';
const buildcontrol = [
    {lable: 'Meat', type: 'meat'}, 
    {lable: 'Salad', type: 'salad'}, 
    {lable: 'Bacon', type: 'bacon'},
     {lable: 'Chesse', type: 'cheese'}];
 const BuildControls = (props) => {
   

    return (
        <div className='BuildControls'>
            <p>Current price: <strong>{props.price.toFixed(2)}</strong>$</p>
            {
            buildcontrol.map(ctrl => {
                
                return <BuildControl key={ctrl.type} 
                lable={ctrl.lable} 
                more={() => props.more(ctrl.type)} 
                less={() => props.less(ctrl.type)} disabled={props.disabled[ctrl.type]}/>
    })
    }
    <button className='OrderButton' disabled={props.orderdisable}>Order now</button>
        </div>
    )
}

export default BuildControls;