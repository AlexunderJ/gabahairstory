import React from 'react'
import NavigationItem from '../NavigationItem/NavigationItem'
import '../NavigationItems.sass'
import './Sidebar.sass'

export default function Sidebar(props) {
    
     return(
<ul onClick={props.clicked} className={'NavigationItem'}>
    <NavigationItem link='/' exact >Home</NavigationItem>
    <li><a href='https://sklep.gabahairstory.pl/'>Sklep</a></li>
    <NavigationItem link='/team'>Team</NavigationItem>
    <NavigationItem link='/cennik'>Cennik</NavigationItem>
    <NavigationItem link='/kontakt'>Kontakt</NavigationItem>
</ul>
     )
    }

