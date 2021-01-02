import React from 'react';
import "./contact.scss";
import Input from "../input-fom/Input";
import Button from "../costume-button/Button"

export default function Contact({changeHandler, ...others}) {
    return (
     <div className="contact_main" >
       <h1 className="contact_heading">Get in touch with me</h1>
        <div className="contact" id="contactme">
            <div className="contact_info">
                <h2 className="contact_info-heading">contact information</h2>
                <div className="contact_info-item">
                    <span><i className="fa  fa-phone"></i>:</span>
                    <a href="callto:+61433919514">+61433919514</a>          
                </div>
                <div className="contact_info-item">
                    <span  ><i className="fa  fa-envelope"></i>:</span>
                    <a href="callto:+61433919514">siid123ck@gmail.com</a>
                </div>
            </div>

            <div className="contact_media">
                <h2 className="contact_heading">find me on</h2>
                <div className="contact_media-item">
                   <a href="jk"><i className="fa fa-lg fa-facebook"></i></a>
                   <a href="jk"><i className="fa fa-lg fa-instagram"></i></a>
                   <a href="jk"><i className="fa fa-lg fa-twitter"></i></a>
                   <a href="jk"><i className="fa fa-lg fa-linkedin"></i></a>
                </div>
            </div>

        </div>
      <h1 className="contact_form_heading">fill up the form to contact me</h1>  
     <div className="contact_form">
     <form className="form" action="#" onSubmit={others.submitHandler}>
      <Input changeHandler={changeHandler} value={others.name}
       name="name" label="name" id="name" placeholder="full name" type="text" className="form-input"  />
      <Input changeHandler={changeHandler} value={others.password}
       name="password" label="password" id="password" type="password" placeholder="password" className="form-input" />
      <Input changeHandler={changeHandler} value={others.email}
      name="email" label="email" id="email" placeholder="your email" type="email"  className="form-input"/>
      <Input changeHandler={changeHandler} value={others.message}
      name="message" label="message" id="message" placeholder="your message" type="text"  className="form-input form-input-textarea"/>
      <Button btn="submit" type="btn" btn_style="btn btn--black"  />
      </form>
     </div>

      </div>  
    )
}
