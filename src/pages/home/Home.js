import React, { Component } from 'react'
import Logo from '../../components/Logo/Logo'
import Button from '../../components/UI/Button/Button'
import './Home.sass'
export default class Home extends Component {
    

    goCennik =()=>{
        this.props.history.push('/cennik');
    }
    goWizyta =() =>{
        const url = 'https://booksy.com/pl-pl/15622_gaba-hair-story_fryzjer_3_warszawa';
        window.open(url, '_blank');
    }
    goShop =() =>{
        const url = 'https://sklep.gabahairstory.pl/';
        window.open(url, '_blank');
    }

    render() {
        return (
            <>
                <Logo/>
                 <div className='footer-home'>
                    <Button btnType='' disabled={false} clicked={this.goCennik}>
                        Cennik</Button>
                    <Button btnType='opposit' disabled={false} clicked={this.goShop}>Sklep
                    </Button>
                    <Button btnType='' disabled={false} clicked={this.goWizyta}>
                        Wizyta</Button>
                </div>
            </>
        )
    }
}
