import React from 'react';
import "./about_me.scss";

export default function AboutMe() {
    return ( <div className="about_section" id="aboutme">
        <div className="about_me">
           <div className="about_me-intro">
               <h2 className="tail tail-sm">About me</h2>
               <p>Full stack developer with hands-on experience of designing, developing, and implementing applications and solutions using a range of technologies and programming languages. Seeking to leverage broad development experience in a challenging role as front-end developer.</p>
               {/* <span><a href="resume.pdf">download resume</a></span> */}
           </div>
           <div className="about_me-education">
               <h2 className="tail tail-sm">education</h2>
               <ul className="list list-education">
                   <li className="list-item list-item-education">Higher secondary school with major Computer science (GPA:3.57/4.0)</li>
                   <li className="list-item list-item-education">Diploma in Information Technology</li>
                   <li className="list-item list-item-education">Advance Diploma in Information Technology</li>
               </ul>
           </div>
        </div>
           <div className="skill">
               <h2 className="tail tail-xsm">skills</h2>
               <ul className="list list-skill">
                   <li className="list-item list-item-skill">programming language:
                   <ul className="sub_list">
                       <li className="sub_list-item">Front-end languages:HTML5, advance CSS(Sass/Scss), Javascript</li>
                       <li className="sub_list-item">Front-end frameworks and libraries: Bootstrap, JQuery, Bootstrap, React JS</li>
                       <li className="sub_list-item">backend-language: Node.js, Express, PHP, Laravel</li>
                       <li className="sub_list-item">python</li>
                   </ul>
                   </li>
                   <li className="list-item list-item-skill">database: mongodb, mysql</li>
                   <li className="list-item list-item-skill">datastucture and algorithm</li>
                   <li className="list-item list-item-skill">Json api and ajax</li>
               </ul>
           </div>
           <div className="experience">
               <h2 className="tail tail-md">work experieces</h2>
               <h3> <strong>Full stack developer</strong> at <a style={{padding:"0"}} target="_blank" rel="noreferrer" href="https://virtupharma.com.au/"> Virtupharma</a> </h3> 
               <ul className="list list-experience" >
                   <li className="list-item list-item-experience">building Responsive Websites to represent the restaurants using HTML, CSS and Bootstrap and Ract JS. </li>
                   <li className="list-item list-item-experience">Impressive websites using CSS(sass) Flexbox and grid</li>
                   <li className="list-item list-item-experience">Proficient knowledge of adjusting components using flexbox and grid to make code clear and easier </li>
                   <li className="list-item list-item-experience">E-commerce Website using React and redux(currently working)</li>
                   <li className="list-item list-item-experience">Javascript games to demonstrates solving skills</li>
                   <li className="list-item list-item-experience">Use of advance UI components like Modal, Carousel, dropdown, collapse, card, grid list, data-table and many more</li>
                   <li className="list-item list-item-experience">Work with both relational and non-relation database </li>
                   <li className="list-item list-item-experience">Work in backend using node JS and Laravel</li>
               </ul>
           </div>
        </div>
    )
}
