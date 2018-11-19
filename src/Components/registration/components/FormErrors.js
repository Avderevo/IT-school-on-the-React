import React from 'react';

const FormErrors = (props) =>{
    if(props.formErrors.length > 0){return(
        <div className="invalid--feedback">
            {props.formErrors}

        </div>
    )}
    else{
        return ""
    }

};


export default FormErrors;