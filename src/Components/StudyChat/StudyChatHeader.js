import React, {Component} from 'react';

class StudyChatHeader extends Component{
    render(){
        const handleClose = this.props;
        return(
            <div className="chat-header">
                <div className="chat-header-text">
                    Домашнее задание по программированию

                </div>
                <button onClick={handleClose}>close</button>
            </div>
        )
    }
}

export default StudyChatHeader;