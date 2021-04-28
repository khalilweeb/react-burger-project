import React from 'react';
import './buildctronle.css';
import BuildControl from './buildControl/BuildControl';
 const BuildControls = () => {
    const Buildcontrols = [
        {lable: 'Meat', type: 'meat'}, 
        {lable: 'Salad', type: 'salad'}, 
        {lable: 'Bacon', type: 'bacon'},
         {lable: 'Chesse', type: 'cheese'}].map((ctrl) => {
        return <BuildControl key={ctrl.type} lable={ctrl.lable}/>
    })

    return (
        <div className='BuildControls'>
            {Buildcontrols}
        </div>
    )
}

export default BuildControls;