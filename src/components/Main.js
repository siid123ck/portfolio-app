import React,{Component} from 'react';
import Header from './header/Header';
import Animation from './animation/Animation';
import AboutMe from './aboutme/AboutMe';
import Project from './projects/Project';
import Contact from './contact/Contact';
import "./main.scss";

export default class  Main extends Component {
    render(){
        return (
            <div className="main">
                <Header/>
                <Animation/>
                <AboutMe/> 
                <Project/>
                <Contact/>
            </div>
        )
    }
}
