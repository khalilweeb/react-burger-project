import React from 'react';
import './buildControl.css'

const buildControl = (props) => {
    return (
        <div className='BuildControl'>
            <div className='Label'>{props.lable}</div>
             <button className='Less'>Less</button>
            <button className='More'>More</button>
                      
            
        </div>
    )
}

export default buildControl;