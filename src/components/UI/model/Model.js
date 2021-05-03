import React from 'react';
import './model.css';
import Backdrop from '../../UI/backdrops/BackDrop';
import Aux from '../../../HOC/Aux';

const backDrop = (props) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.clicked}/>
         <div className='Modal' style={
       { transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0'}
    }>
        {props.children}
    </div>
    </Aux>
   
)

export default backDrop;