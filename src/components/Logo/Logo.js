import React from 'react'
import logo from '../../assets/ico/GabaHairStoryLogo.svg';
import './Logo.sass';

export default function Logo() {
    return (
        <div>
             <img src={logo} className="App-logo" alt="logo" />
        </div>
    )
}
