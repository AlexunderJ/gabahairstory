import React, { Component } from 'react'
import Logo from '../../components/Logo/Logo'
import Button from '../../components/UI/Button/Button'
import './Home.sass'


export default class Home extends Component {
    render() {
        return (
            <>
                 <Logo className='big-logo'/>
                 <div className='footer-home'>
         <Button btnType='' disabled={false}>Cennik</Button>
         <Button btnType='opposit' disabled={false}>Sklep</Button>
         <Button btnType='' disabled={false}>Wizyta</Button>
         </div>
            </>
        )
    }
}
