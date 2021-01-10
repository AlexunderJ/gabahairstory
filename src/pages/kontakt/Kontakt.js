import React, { Component } from 'react'
import home from '../../assets/ico/home-address.svg'
import phone from '../../assets/ico/phone-symbol.svg'
import envelope from '../../assets/ico/envelope-circle.svg'
import navigation from '../../assets/ico/navigation.svg'
import mapa from '../../assets/img/Map_Adress.jpg'
import './Kontakt.sass'

export default class Kontakt extends Component {
    render() {
        return (
           <>
        <div className="title">Kontakt</div>
        <div className="kontakt-fild">
            <div className="kontakt-item">
                <img className="icon" src={home} alt="home"/>
                <div className="info">
                    <p>Warszawa</p>
                    <p>Bagatela 10/28</p>
                    <p>3 piętro</p>
                    <p>klatka "C"</p>
                </div>
            </div>
            <div className="kontakt-item">
                <img className="icon" src={phone} alt="phone"/>
                <div className="info">
                    <p>513 222 203</p>
                </div>
            </div>
            <div className="kontakt-item">
                <img className="icon" src={envelope} alt="envelope"/>
                <div className="info">
                    <p><a href="mailto:info@gabahair.pl" target="_top">info@gabahair.pl</a></p>
                </div>
            </div>
            <div className="kontakt-item">
                <img className="icon" src={navigation} alt="navigation"/>
                <div className="info">
                    <a
                        href="https://www.google.com/maps/place/Bagatela+10,+00-503+Warszawa/@52.2137902,21.02095,17z/data=!3m1!4b1!4m5!3m4!1s0x471ecce0bd3ab5c1:0x3ee017b33d468a64!8m2!3d52.2137902!4d21.0231387">
                        <img src={mapa} alt=""/></a>
                </div>
            </div>
        </div>
    
            </>
        )
    }
}
