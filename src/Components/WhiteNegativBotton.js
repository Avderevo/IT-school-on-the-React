// WhiteNegativBotton.js
import React, { Component } from 'react';

class WhiteNegativBotton extends Component {

    render() {
        if (this.props.data) {
            var data = this.props.data;
            return (
                <span>
                    <button type="botton" className="btn btn-white-negativ mt-3" href={data.href}>
                        {data.text}
                    </button>
                </span>
            );
        }
    }
}
export default WhiteNegativBotton;
