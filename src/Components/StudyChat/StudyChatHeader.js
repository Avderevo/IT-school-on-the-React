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
                <div className='chat-header-body'>
                    <div className="chat-header-text">
                        Домашнее задание по программированию
                        <button className='btn btn-light float-right' onClick={this.handleOpenClick}>X</button>

                    </div>

                </div>

            </div>
        )
    }
}

const mapStatetoProps = (props) => {
    return props;
};


const connectedStudyChatHeader = connect(mapStatetoProps)(StudyChatHeader);
export {connectedStudyChatHeader as StudyChatHeader}
