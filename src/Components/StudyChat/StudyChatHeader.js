import React, {Component} from 'react';
import {modalAction} from "../../_actions";
import connect from "react-redux/es/connect/connect";
import {Link} from 'react-router-dom';


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
                        <Link className='btn btn-light float-right' to="" onClick={this.handleOpenClick}>X</Link>

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
