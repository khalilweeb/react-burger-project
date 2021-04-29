import React from 'react';
import './buildControl.css'

const buildControl = (props) => {
    return (
        <div className='BuildControl'>
            <div className='Label'>{props.lable}</div>
             <button className='Less' onClick={props.less} disabled={props.disabled}>Less</button>
            <button className='More' onClick={props.more}>More</button>
                      
            
        </div>
    )
}

export default buildControl;