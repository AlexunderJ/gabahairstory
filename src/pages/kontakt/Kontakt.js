import React, { Component } from 'react'

export default class Kontakt extends Component {
    render() {
        return (
           <>
        <div class="title">Kontakt</div>
        <div class="kontakt-fild">
            <div class="kontakt-item">
                <img class="icon" src="img/home-address.svg" alt="home"/>
                <div class="info">
                    <p>Warszawa</p>
                    <p>Bagatela 10/28</p>
                    <p>3 piętro</p>
                    <p>klatka "C"</p>
                </div>
            </div>
            <div class="kontakt-item">
                <img class="icon" src="img/phone-symbol.svg" alt="home"/>
                <div class="info">
                    <p>513 222 203</p>
                </div>
            </div>
            <div class="kontakt-item">
                <img class="icon" src="img/envelope-circle.svg" alt="home"/>
                <div class="info">
                    <p><a href="mailto:info@gabahair.pl" target="_top">info@gabahair.pl</a></p>
                </div>
            </div>
            <div class="kontakt-item">
                <img class="icon" src="img/navigation.svg" alt="home"/>
                <div class="info">
                    <a
                        href="https://www.google.com/maps/place/Bagatela+10,+00-503+Warszawa/@52.2137902,21.02095,17z/data=!3m1!4b1!4m5!3m4!1s0x471ecce0bd3ab5c1:0x3ee017b33d468a64!8m2!3d52.2137902!4d21.0231387">
                        <img src="img/Map_Adress.jpg" alt=""/></a>
                </div>
            </div>
        </div>
    
            </>
        )
    }
}
