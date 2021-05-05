import React from 'react';
import './navigation.css'
import Navbar from './NavigationItems/Navbar';
const navigation = () => (
    <ul className='Navigation'>
        <Navbar link='#' active>Builder builder</Navbar>
        <Navbar link='#'>Checkout</Navbar>
    </ul>
)

export default navigation;