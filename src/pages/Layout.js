import React, { Component } from 'react'
import Sidebar from '../components/Navigation/Sidebar/Sidebar';
import DrawToggle from '../components/Navigation/Sidebar/DrawerToggle/DrawToggle'
import Toolbar from '../components/Navigation/Toolbar/Toolbar';
import Backdrop from '../components/UI/Backdrop/Backdrop'
import './Layout.sass'


export default class Layout extends Component {
    state= {
        showSideBar: false
    }
    SideDrawerClosedHandler =() =>{
        
        this.setState({showSideBar: false});
    }
    
      sideSideDrawerToggleHandler = (props)=>{        
        this.setState((prevState)=>{
          return {showSideBar: !prevState.showSideBar}
          
      });
    }
    
    render() {
        let openSideBar;
        openSideBar = (this.state.showSideBar ? 'Open': 'Close');
        console.log(this.state.showSideBar);
        let sidebar = (
            
            <div className={['SideBar', `${openSideBar}`].join(' ')}>
            <Sidebar/>
            
            </div>
        )
        
            
           return (
            <>
            <Backdrop show={this.state.showSideBar} clicked={this.sideSideDrawerToggleHandler} />
            <Toolbar />
            <DrawToggle 
            clicked={this.sideSideDrawerToggleHandler}
            />
            {sidebar}
            <main>
                {this.props.children}
            </main>
            </>
        )
    }
}
