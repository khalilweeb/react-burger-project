import React from 'react';
import './button.css'


const button = (props) => (

    <button className= {`button ${props.classes}`} onClick={props.clicked}>{props.children}</button>
)


export default button;