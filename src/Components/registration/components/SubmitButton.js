import React from 'react';

const SubmitButton = (props) => {
    console.log(props.style);
    return(
        <div className="text-center">
            <div className="">
                <button
                    className = "btn btn-authcard-submit btn-blue-color btn-block"
                    onClick= {props.action}
                    disabled={!props.disabled}>
                    {props.title}

                </button>
            </div>
        </div>
    )
};


export default SubmitButton;