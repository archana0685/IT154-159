import React from 'react'
import "../Publish.css";
import ppimg from '../../../landingAssets/pastaimage.jpg';
import Create from "../publishComponents/Create";

function Recipe() {
  return (
    <div>
        <div className='recipe-card-holder'>
            <p align="center">{title}</p>
            <br/>
            <img src={ppimg} alt=""/>
        </div>  
        

    
    </div>
  )
}

export default Recipe