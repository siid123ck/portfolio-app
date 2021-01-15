import React from 'react';
import "./costume_btn.scss";


export default function Button({btn, btn_style}) {

    const color = {color: "red", backgroundColor:"blue"}
    // const demo={primary-color-1:"rgb(81, 0, 118)",
    //     primary-color-2:"rgb(97, 5, 128)",
    //     primary-color-3:"rgb(107, 10, 138)",
    //     secondary-color-1:"rgb(67, 20, 108)",
    //     secondary-color-2:"rgb(57, 10, 98)",
    //     secondary-color-3:"rgb(47, 0, 88)",
    //     text-color: "#fff",}

    return (
        <div className="costume_btn">
           <button  onClick={()=>color}   className={btn_style}>{btn}</button> 

        </div>
    )
}
