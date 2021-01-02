import React,{useState} from 'react';
import Button from '../costume-button/Button';
import "./animation.scss"

export default function Animation() {
    const [index, setIndex] = useState(0);
    console.log(index);
    return (
        <div className="animation">
           <div className="carousel">
            <div className={`carousel_container carousel_container-${index}`}>
                   <div className="carousel_item carousel_item-1">
                     <img src="https://images.pexels.com/photos/257923/pexels-photo-257923.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=2500" alt="" />
                      <div className="carousel_item_caption">
                        <h1 className="carousel_item_caption_header">who i am</h1>
                        <h4>Web developer with hands-on experience of designing, developing, and implementing applications and solutions using a range of technologies and programming languages. Seeking to
                             leverage broad development experience in a challenging role as front-end developer.</h4>
                         <a href="#aboutme"><Button btn="read about me" btn_style="btn btn--black btn-sm"/></a> 
                      </div>
                   </div>
                   <div className="carousel_item">
                       <img alt="" src="https://images.pexels.com/photos/4456604/pexels-photo-4456604.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=2500" />
                   <div className="carousel_item_caption carousel_item_caption-2">
                        <h1 className="carousel_item_caption_header">view my projects </h1>
                        <h4>i can build small single-page website to multi-page ecommerce website using range of technologies like flex-box, grid, animation, carousel etc </h4>
                         <a href="#projects"><Button btn="projects" btn_style="btn btn--black btn-sm"/></a> 
                   </div> 
                   </div>
                   <div className="carousel_item">
                       <img alt="" src="https://images.pexels.com/photos/3184450/pexels-photo-3184450.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1500" />
                   
                   <div className="carousel_item_caption carousel_item_caption-3">
                        <h1 className="carousel_item_caption_header">get in touch with me</h1>
                        <h4> feel free to reach out to me anytime. if you have any question, email me or  contact me using social medias i have provided links below</h4>
                       {/* <a href="#contactme"><Button btn="contact me" btn_style="btn btn--black btn-sm"/></a>  */}
                       <a href="#contactme"><Button btn="contact me" btn_style="btn btn--black btn-sm"/></a> 
                      </div> 
                  
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
