import React from 'react';
import '../index.css';

export default function Navbar(){
    return(
        <nav>
            <img src={process.env.PUBLIC_URL +  '/Imgs/logo.png'} alt='brand-logo'className="brand-logo" />
        </nav>
    )
}