import React,{useState} from 'react';
import "./animation.scss"

export default function Animation() {
    const [index, setIndex] = useState(0);
    console.log(index);
    return (
        <div className="animation">
           <div className="carousel">
            <div className={`carousel_container carousel_container-${index}`}>
                   <div className="carousel_item">
                     <img src="https://images.pexels.com/photos/257923/pexels-photo-257923.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=2500" alt="" />
                      <div className="carousel_caption">
                         something going to be shown 
                      </div>
                   </div>
                   <div className="carousel_item">
                       <img alt="" src="https://images.pexels.com/photos/4456604/pexels-photo-4456604.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=2500" />
                   </div>
                   <div className="carousel_item">
                       <img alt="" src="https://images.pexels.com/photos/3184450/pexels-photo-3184450.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1500" />
                   </div>
               </div>
           </div>
               <div className="carousel_nav">
                   <div className={`carousel_nav-indicator carousel_nav-indicator-${index===0?'current':''}`}></div>
                   <div className={`carousel_nav-indicator carousel_nav-indicator-${index===1?'current':''}`}></div>
                   <div className={`carousel_nav-indicator carousel_nav-indicator-${index===2?'current':''}`}></div>
               </div>
               <button onClick={()=>index===0?setIndex(2):setIndex(index-1)}
               className="carousel_btn carousel_btn--left"><i className="fa fa-angle-left"></i> </button>
               <button  onClick={()=>index===2?setIndex(0):setIndex(index+1)}
                className="carousel_btn carousel_btn--right"><i className="fa fa-angle-right"></i></button>
               <button className="carousel_btn carousel_btn--pause"><i className="fa fa-pause"></i></button>
              
        </div>
    )
}
