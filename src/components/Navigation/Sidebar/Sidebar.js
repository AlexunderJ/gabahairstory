import React, { Component } from 'react'
import NavigationItem from '../NavigationItem/NavigationItem'
import '../NavigationItems.sass'
import './Sidebar.sass'

export default class Sidebar extends Component {
    render() {
     return(
<ul className={'NavigationItem'}>
    <NavigationItem link='/' exact >Home</NavigationItem>
    <NavigationItem link='/team'>Team</NavigationItem>
    <NavigationItem link='/cennik'>Cennik</NavigationItem>
    <NavigationItem link='/kontakt'>Kontakt</NavigationItem>
</ul>
     )
    }
}
