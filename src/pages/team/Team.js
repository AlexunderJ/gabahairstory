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
                        <img id="gaba" src={Gabrysia} alt="wizerunek GabaHair"/>
                    
                    </div>
                    <div className="member-name">
                        <h2>Gabrysia</h2>
                    </div>         
            <div className="member">               
                   
                        <img id="natalia" src={Natalia} alt="wizerunek Natalii"/>
                    
                    </div>
                    <div className="member-name">
                        <h2>Natalia</h2>
            </div>  
            <div className="member">
                 
                        <img id="angela" src={Angela} alt="wizerunek Angeli"/>
                    
                    </div>    
                    <div className="member-name">
                        <h2>Angela</h2>
            </div>
            </div>    
        </> 
        )
    }
}
