import React, { Component } from 'react'
import Gabrysia from '../../assets/img/Gabrysia.jpg'
import Natalia from '../../assets/img/Natalia.jpeg'
import Angela from '../../assets/img/Angela.jpeg'
import './Team.sass'
export default class Team extends Component {
    render() {
        return (
                    <>
       
        <div className="title">TEAM</div>
        <div className="teamMembers">
            <div className="member">
                <div className="member-prezentation">
                    
                        <img id="gaba" src={Gabrysia} alt="wizerunek GabaHair"/>
                    <div className="foto-face"></div>
                    </div>
                    <div className="member-name">
                        <h2>Gabrysia</h2>
                    </div>
                </div>
                <div className="member-description">
                <p>...</p>
            </div> 
         
            <div className="member">
                <div className="member-prezentation">
                    <div className="foto-face">
                        <img id="natalia" src={Natalia} alt="wizerunek Natalii"/>
                    </div>
                    <div className="member-name">
                        <h2>Natalia</h2>
                    </div>
                </div>
                <div className="member-description">
                <p>...</p>
            </div>
            </div>
            
            <div className="member">
                <div className="member-prezentation">
                    <div className="foto-face">
                        <img id="angela" src={Angela} alt="wizerunek Angeli"/>
                    </div>
                    <div className="member-name">
                        <h2>Angela</h2>
                    </div>
                </div>
                <div className="member-description">
                <p>...</p>
            </div> 
            </div>
            </div>
            
                <div className="member-description">
                <p>...</p>
            </div> 
            
            
        </> 
        )
    }
}
