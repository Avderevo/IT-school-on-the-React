import React from 'react';

const FormSelector = (props) => {

    return(
        <div className="form-inline mb-3">

            <label className="my-1 mr-2"
                   htmlFor="inlineFormCustomSelectPref">Статус</label>
            <select
                className="custom-select my-1 mr-sm-2"
                onChange={props.handleChange}
                value={props.value}
                name={props.name}
            >
                <option value="1">Студент</option>
                <option value="2">Учитель</option>
            </select>

        </div>
    )
};


export default FormSelector;