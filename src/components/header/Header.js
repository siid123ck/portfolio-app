import React from "react";
import "./header.scss";

export default function Header(){
    return (
        <div className="header">
            <div className="logo">
                <div className="logo_main">
                  <span className="logo_circle">Siid <i></i> </span>
                  <span className="logo_heading">sharma</span>
              </div>
              <div className="logo_title">
                  <h1>Siid Sharma</h1>
                  <span>web Developer</span>
              </div>
            </div>
            <div className="menu">  
                {/* <div className="menu_heading">
                 <div className="menu_heading-1">menu</div>
                 <div className="menu_heading-2"> close</div>
                </div> */}
                <input type="checkbox" id="nav-toggler" className="nav-toggler" />
                <label htmlFor="nav-toggler" className="menu_icon">
                    <div className="menu_icon-item"></div>
                    <div className="menu_icon-item"></div>
                    <div className="menu_icon-item"></div>
                </label>
                <div className="nav_background" />
                <ul className="nav" >
                 <li className="nav_item"><a className="nav_item_link" href="#">home</a></li>
                 <li className="nav_item"><a className="nav_item_link" href="#">about</a></li>
                 <li className="nav_item"><a className="nav_item_link" href="#">projects</a></li>
                 <li className="nav_item"><a className="nav_item_link" href="#">contact</a></li>
                </ul>
            </div>
        </div>
    )
}

