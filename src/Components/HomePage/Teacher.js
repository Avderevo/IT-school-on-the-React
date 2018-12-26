import React from 'react';
import { Link } from 'react-router-dom';

const Teacher = (props) => {

    return(
        <div className="col-lg-3 col-md-6 d-none d-md-block">
            <Link to=""><img className="rounded-circle mb-3 transition-scale" src={require("../../img/"+props.img)} alt="" width="180" height="180" /></Link>
            <h5>{props.name}</h5>
            <p>{props.description}</p>
        </div>
    )
};

export default Teacher;