import React from 'react';
import "./contact.scss";

export default function Contact() {
    return (
     <div className="contact_main">
       <h1 className="contact_heading">Get in touch with me</h1>
        <div className="contact">
            <div className="contact_info">
                <h2 className="contact_info-heading">contact information</h2>
                <div className="contact_info-item">
                    <span><i class="fa  fa-phone"></i>:</span>
                    <a href="callto:+61433919514">+61433919514</a>          
                </div>
                <div className="contact_info-item">
                    <span  ><i class="fa  fa-envelope"></i>:</span>
                    <a href="callto:+61433919514">siid123ck@gmail.com</a>
                </div>
            </div>

            <div className="contact_media">
                <h2 className="contact_heading">find me on</h2>
                <div className="contact_media-item">
                   <a href="jk"><i class="fa fa-lg fa-facebook"></i></a>
                   <a href="jk"><i class="fa fa-lg fa-instagram"></i></a>
                   <a href="jk"><i class="fa fa-lg fa-twitter"></i></a>
                   <a href="jk"><i class="fa fa-lg fa-linkedin"></i></a>
                </div>
            </div>

        </div>
      </div>  
    )
}
