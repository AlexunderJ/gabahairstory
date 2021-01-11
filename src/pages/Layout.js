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
    
      sideSideDrawerToggleHandler = ()=>{        
        this.setState((prevState)=>{
          return {showSideBar: !prevState.showSideBar}
          
      });
    }
    
    render() {
        let openSideBar;
        openSideBar = (this.state.showSideBar ? 'Open': 'Close');
        let sidebar = (
            
            <div className={['SideBar', `${openSideBar}`].join(' ')}>
            <Sidebar clicked={this.sideSideDrawerToggleHandler}/>
            
            </div>
        )
        
            
           return (
            <div className='Layout'>
                <Backdrop show={this.state.showSideBar} clicked={this.sideSideDrawerToggleHandler} />
                    <div className='Header'>
                        <Toolbar />
                        <DrawToggle 
                        clicked={this.sideSideDrawerToggleHandler}
                        />
                    </div>
                    <div className='Main'>

                {sidebar}
                <main>
                    {this.props.children}
                </main>
                    </div>
            </div>
        )
    }
}
