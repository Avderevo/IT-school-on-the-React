import React from "react";

const AdditionCard = (props) => {
    return (
        <div className="col-md-6">
            <div  className="card-additions mb-4 transition-scale">
                <a href="" className="hover-additions">
                    <div className="card-additions-body">
                        <div className="container">
                            <div className="row">
                                <div className="col-3 d-none d-lg-block">
                                    <div className="card-additions-icon">
                                        <i className="material-icons md-100">{props.icon}</i>
                                    </div>
                                </div>
                                <div className="col">
                                    <h5>{props.title}</h5>
                                    <p>{props.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
};


export default AdditionCard;