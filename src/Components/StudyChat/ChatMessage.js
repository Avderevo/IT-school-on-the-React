import React, {Component} from  'react';
import {chatService} from "../../_services";
import connect from "react-redux/es/connect/connect";
import {LkOneLesson} from "../StudyRoom/LkOneLesson";
import {modalAction} from "../../_actions";

class ChatMessage extends Component{

    constructor(props) {
        super(props);

        this.state = {
            message: [],
            Loading: false,
            error: null,
        };
    }



    componentDidMount() {
        this.setState({ Loading: true });
        chatService.getMessage(this.props.statisticId)
            .then(response => response.json())
            .then(data => this.setState({ message: data, Loading: false }))
            .catch(error => this.setState({ error, Loading: false }));
    }



/*

        componentDidMount() {
        this.props.dispatch(chatAction.getMessage(this.props.statisticId));
    }*/
    render(){


        return(
            <div className='homework-chat__items'>


                {this.state.Loading && <em>Loading message...</em>}
                {this.state.error &&  <span className="text-danger">ERROR: {this.state.error}</span>}
                {this.state.message  && this.state.message.map((item, index) =>

                    <div className="chat-message-block">
                        <div className="chat-message-content">
                            <div className="mb-3">
                                <span className='message-author-avatar'>;)</span>
                                <span className="message-author-name">{item.user.username}</span>
                            </div>

                            <div className="message-text">
                                {item.message_body}
                            </div>
                            <span className="message-date">{item.date}</span>
                        </div>
                    </div>

                )}


            </div>
        )
    }

}



const mapStatetoProps = (props) => {
    return props;
};

const connectedChatMessage = connect(mapStatetoProps)(ChatMessage);
export {connectedChatMessage as ChatMessage}




