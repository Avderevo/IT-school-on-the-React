import React, { Component } from 'react';


const Teacher = (props) => {

    return(
        <div className="col-lg-3 col-md-6 d-none d-md-block">
            <a href=""><img className="rounded-circle mb-3 transition-scale" src={require("../img/"+props.img)} alt="" width="180" height="180" /></a>
            <h5>{props.name}</h5>
            <p>{props.description}</p>
        </div>
    )
};


export default Teacher;