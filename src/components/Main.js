import React,{Component} from 'react';
import Header from './header/Header';
import Animation from './animation/Animation';
import AboutMe from './aboutme/AboutMe';
import Project from './projects/Project';
import Contact from './contact/Contact';
import "./main.scss";

export default class  Main extends Component {
    state={
        name:"", 
        password:"", 
        email:""
    }
   
    changeHandler = (event)=>{
        const {name, value} = event.target;
        this.setState({[name]:value})
     console.log(event.target, name, value)
    }
   
    submitHandler = event=>{
        event.preventDefault();
        this.setState({email:"", password:""})
    }

    
    render(){
        const {name, password, email} = this.state;
        return (
            <div className="main">
                <Header/>
                <Animation/>
                <AboutMe/> 
                <Project/>
                <Contact changeHandler={this.changeHandler} name={name} password={password}
                email={email} submitHandler={this.submitHandler} />
            </div>
        )
    }
}
