import React from 'react';

const FormRadio = (props) => {

    return(
        <div className="form-group">
            <div className="form-check">
                <input className="form-check-input ml=0"
                       onChange={props.handleChange}
                       type="checkbox" value={props.value}
                       checked={props.checked}
                       name={props.name}
                       />
                <label className="form-check-label" htmlFor="invalidCheck">
                    {props.label}
                </label>
            </div>
        </div>
    )
};


export default FormRadio;