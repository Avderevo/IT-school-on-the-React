import React from 'react';

const SocialBtn = (props) => {

    return(
        <span>
            <a href="">
                <span className=" btn-social mr-1">
                    <i className={props.icon}>

                    </i>
                </span>
            </a>
        </span>
    )
};


export default SocialBtn;