import React from 'react';
import "./costume_btn.scss";


export default function Button({btn, btn_style}) {
    return (
        <div className="costume_btn">
           <button  className={btn_style}>{btn}</button> 
        </div>
    )
}
