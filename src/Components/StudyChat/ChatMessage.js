import React, {Component} from  'react';
import {chatService} from "../../_services";


class ChatMessage extends Component{
    constructor(props) {
        super(props);

        this.state = {
            message: [],
            Loading: false,
            error: null,
        };
    }

    getMessage =() => {
        this.setState({ Loading: true });
        chatService.getMessage(this.props.statisticId)
            .then(response => response.json())
            .then(data => this.setState({ message: data, Loading: false }))
            .catch(error => this.setState({ error, Loading: false }));

    };


    componentDidMount() {
        this.getMessage();
    }


    render(){


        return(
            <div className='homework-chat__items'>


                {this.state.Loading && <em>Loading message...</em>}
                {this.state.error &&  <span className="text-danger">ERROR: {this.state.error}</span>}
                {this.state.message  && this.state.message.map((item, index) =>

                    <div className="chat-message-block" key={item.id}>
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

export default ChatMessage;
