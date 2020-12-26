import React from 'react';
import "./contact.scss";

export default function Contact() {
    return (
        <div className="contact">
            <h2 className="contact_heading">Get in touch with me</h2>

            <div className="contact_info">
                <h3 className="contact_info-heading">contact information</h3>
                <div className="contact_info-item">
                    <div>phone</div>
                    <h4>+61433919514</h4>
                </div>
                <div className="contact_info-item">
                    <div>phone</div>
                    <h4>+61433919514</h4>
                </div>
            </div>

            <div className="contact_media">
                <h3 className="contact_heading">find me on</h3>
                <div className="contact_media-item">
                    <div>insta</div>
                    <div>insta</div>
                </div>
            </div>

        </div>
    )
}
