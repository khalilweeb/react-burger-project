import React from 'react';
import './toolbar.css';
import Logo from '../Logo/Logo';
import Navigation from '../navigation';

const toolbar = (props) => (
    <header className='Toolbar'>
    <div onClick={props.open}>MENU</div>
    <Logo/>
    <nav>
        <Navigation/>
    </nav>
</header>
)



export default toolbar;