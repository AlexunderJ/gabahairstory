import React, { Component } from 'react'
import Sidebar from '../components/Navigation/Sidebar/Sidebar';
import Toolbar from '../components/Navigation/Toolbar/Toolbar';

export default class Layout extends Component {
    render() {
           return (
            <>
            <Toolbar/>
            <Sidebar />
            <main>
                {this.props.children}
            </main>
            </>
        )
    }
}
