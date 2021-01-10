import React from 'react'
import './DrawToggle.sass'

export default function DrawerToggle(props) {
    return (
       <div className={'DrawerToggle'} onClick={props.clicked}>
           <div></div>
           <div></div>
           <div></div>
           </div>
    )
}