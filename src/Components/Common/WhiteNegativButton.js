// WhiteNegativButton.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom'



class WhiteNegativButton extends Component {

    render() {

        let data = this.props.data;
        return (
            <span>
                <Link type="button" className="btn btn-white-negativ mt-3" to={data.href}>
                    {data.text}
                </Link>
            </span>
        );
    }
}
export default WhiteNegativButton;
