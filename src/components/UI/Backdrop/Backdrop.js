import React from 'react';
import "./Backdrop.sass";


const backdrop = (props)=> (
   props.show ?  <div className={'Backdrop'}
   onClick={props.clicked}></div>: null
);

export default backdrop;