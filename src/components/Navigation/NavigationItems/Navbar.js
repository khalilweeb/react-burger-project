import React from 'react';
import './navbar.css'

const navbar = (props) => (

    <li className='Navbar'><a  className={
        props.active ?  'active' : null
    } href={props.link}> {props.children}</a> </li>
)
    


export default navbar;