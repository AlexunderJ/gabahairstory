import React from 'react';
import  './Button.sass';

export default function Button(props) {
    
    return (
    <button 
    disabled={props.disabled}
    // className = {"btn"}
    className = {['btn', [props.btnType]].join(' ')}
    onClick={props.clicked}>{props.children}
    </button>
    )
}