//AdditionCard.js
import React, {Component} from "react";

class AdditionCard extends Component {
    render() {
        if (this.props.data) {
            var data = this.props.data;
            return (
                <div className="col-md-6">
                    <div  key={data.title} className="card-additions mb-4 transition-scale">
                        <a href="" className="hover-additions">
                            <div className="card-additions-body">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-3 d-none d-lg-block">
                                            <div className="card-additions-icon">
                                                <i className="material-icons md-100">{data.icon}</i>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <h5>{data.title}</h5>
                                            <p>{data.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            );
        }
    }
}

export default AdditionCard;