import React from 'react';
import "./animation.scss"

export default function Animation() {
    return (
        <div className="animation">
           <div className="carousel">
               <div className="carousel_container">
                   <div className="carousel_item">1</div>
                   <div className="carousel_item">2</div>
                   <div className="carousel_item">3</div>
               </div>
           </div>
               <button className="carousel_btn carousel_btn--left">left</button>
               <button className="carousel_btn carousel_btn--right">right</button>
               <div className="carousel_nav">
                   <div className="carousel_nav-indicator carousel_nav-indicator-current"></div>
                   <div className="carousel_nav-indicator"></div>
                   <div className="carousel_nav-indicator"></div>
               </div>
        </div>
    )
}
