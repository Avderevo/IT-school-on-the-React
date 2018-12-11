import React, {Component} from 'react';
import {modalAction} from "../../_actions";
import connect from "react-redux/es/connect/connect";

class StudyChatHeader extends Component{

    handleOpenClick = () => {

        this.props.dispatch(modalAction.openModal());
    };
    render(){


        return(
            <div className="chat-header">
                <div className="chat-header-text">
                    Домашнее задание по программированию

                </div>
                <button onClick={this.handleOpenClick}>close</button>
            </div>
        )
    }
}

const mapStatetoProps = (props) => {
    return props;
};


const connectedStudyChatHeader = connect(mapStatetoProps)(StudyChatHeader);
export {connectedStudyChatHeader as StudyChatHeader}
