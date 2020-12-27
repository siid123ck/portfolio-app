import React from 'react';
import "./about_me.scss";

export default function AboutMe() {
    return ( <div>
        <div className="about_me">
           <div className="about_me-intro">
               <h2>About me</h2>
               <p>Full stack developer with hands-on experience of designing, developing, and implementing applications and solutions using a range of technologies and programming languages. Seeking to leverage broad development experience in a challenging role as front-end developer.</p>
           </div>
           <div className="about_me-education">
               <h2>education</h2>
               <ul className="about_me-education_list">
                   <li className="about_me-education_list-item">Higher secondary school with major Computer science (GPA:3.57/4.0)</li>
                   <li className="about_me-education_list-item">Diploma in Information Technology</li>
                   <li className="about_me-education_list-item">Advance Diploma in Information Technology</li>
               </ul>
           </div>
        </div>
           <div className="skill">skills</div>
           <div className="experience">experience</div>
        </div>
    )
}
