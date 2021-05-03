import React from 'react';
import './backdrop.css';

const backDrop = (props) => (props.show ? <div className='Backdrop' onClick={props.clicked}></div> : null);


export default backDrop;