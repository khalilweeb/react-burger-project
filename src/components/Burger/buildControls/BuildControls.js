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
            {
            buildcontrol.map(ctrl => {
                
                return <BuildControl key={ctrl.type} lable={ctrl.lable} more={() => props.more(ctrl.type)}/>
    })
    }
        </div>
    )
}

export default BuildControls;