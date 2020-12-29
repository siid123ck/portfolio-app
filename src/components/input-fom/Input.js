import React from 'react';
import "./input_form.scss";

export default function Input({changeHandler, label, ...others}) {
    return (
        <div className="form-group">
            <input  onChange={changeHandler} {...others}  required/>
            {
                label?(
                    <label htmlFor={others.id} id={others.id} className="form-label">
                        {label}
                    </label>
                ):null
            }
        </div>
    )
}
