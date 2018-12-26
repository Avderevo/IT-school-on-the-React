
import React, { Component } from 'react';

class WhiteButton extends Component {

    render() {

        let data = this.props.data;
        return (
            <span>
                <button className="btn btn-white mt-3" href={data.href}>
                    {data.text}
                </button>
            </span>
        );

    }
}


export default WhiteButton;

