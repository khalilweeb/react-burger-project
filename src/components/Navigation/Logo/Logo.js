import React from 'react';
import BurgerLogo from '../../../assets/images/28.1 burger-logo.png.png';
import './logo.css'
const logo = (props) => (
    <div className='Logo'>
        <img src={BurgerLogo} alt='Mylogo'/>
    </div>
)

export default logo;