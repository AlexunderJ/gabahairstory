import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import Sidebar from '../components/Navigation/Sidebar/Sidebar';
import DrawToggle from '../components/Navigation/Sidebar/DrawerToggle/DrawToggle'
import Toolbar from '../components/Navigation/Toolbar/Toolbar';
import Backdrop from '../components/UI/Backdrop/Backdrop'
import logoSm from '../assets/ico/GabaHairStoryLogo.svg';
import './Layout.sass'


class Layout extends Component {
    state= {
        showSideBar: false
    }
    
    SideDrawerClosedHandler =() =>{
        
        this.setState({showSideBar: false});
    }
    
      sideSideDrawerToggleHandler = ()=>{  
        let mediaWide = window.matchMedia("(min-width: 900px)")  
        
       if(mediaWide.matches) {return this.state.showSideBar} 
       else{( this.setState((prevState)=>{
            return {showSideBar: !prevState.showSideBar}          
      }))};
    }
    goHome =()=>{
        
        this.props.history.push('/');
        console.log(this.props.location.pathname);
    }
    
    render() {
        
        let openSideBar;
                       


        openSideBar =  (this.state.showSideBar ? 'Open': 'Close');
        let sidebar = (
            
            <div className={['SideBar', `${openSideBar}`].join(' ')}>
            <Sidebar clicked={this.sideSideDrawerToggleHandler}/>
            
            </div>
        )
        const logosSm = (this.props.location.pathname !== '/'?<img onClick={this.goHome} className='LogoSm' src={logoSm} 
        alt='logoSm'/> : null)
            
           return (
            <div className='Layout'>
                <Backdrop show={this.state.showSideBar} clicked={this.sideSideDrawerToggleHandler} />
                    <div className='Header'>
                        {logosSm}
                        <Toolbar />
                        <DrawToggle 
                        clicked={this.sideSideDrawerToggleHandler}
                        />
                    </div>
                {sidebar}
                    <div className='Main'>

                <main>
                    {this.props.children}
                </main>
                    </div>
            </div>
        )
    }
}
export default withRouter(Layout)