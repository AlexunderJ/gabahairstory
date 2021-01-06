import React, { Component } from 'react'
import Logo from '../../components/Logo/Logo'
import Button from '../../components/UI/Button/Button'


export default class Home extends Component {
    render() {
        return (
            <>
                 <Logo/>
         <Button btnType='' disabled={false}>Cennik</Button>
         <Button btnType='opposit' disabled={false}>Sklep</Button>
         <Button btnType='' disabled={false}>Wizyta</Button>
            </>
        )
    }
}
