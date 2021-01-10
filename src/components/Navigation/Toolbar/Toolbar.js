import React from 'react'
import fb from '../../../assets/ico/facebook-logo.svg'
import inst from '../../../assets/ico/instagram-logo.svg'

import './Toolbar.sass'

export default function Toolbar(props) {
    
        return (
            <>
               <a href="https://www.facebook.com/zalewskagabriela/">
                    <div className="social fb">
                        <img src={fb} alt='facebook'/>
                    </div>
                </a>
                <a href="https://www.instagram.com/gaba_hair_story/">
                    <div className="social insta">
                        <img src={inst} alt='instagram'/>
                    </div>
                </a>
                
            </>
        )
    }

