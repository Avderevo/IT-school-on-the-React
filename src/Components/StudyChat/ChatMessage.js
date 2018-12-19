import React, {Component} from  'react';
import {chatAction} from "../../_actions";
import connect from "react-redux/es/connect/connect";

class ChatMessage extends Component{

   /* componentDidMount() {
        this.props.dispatch(chatAction.getMessage());
    }*/
    render(){
        return(
            <div className="chat-message-block">
                <div className="chat-message-content">
                    <div className="mb-3">
                        <span className='message-author-avatar'>;)</span>
                        <span className="message-author-name">Yury Avdeev</span>
                    </div>

                    <div className="message-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut
                        consequatur cumque cupiditate debitis dolor eos laudantium magnam molestiae
                        pariatur perferendis
                        placeat possimus, quo quod repellat vel vitae, voluptates voluptatibus.
                    </div>
                    <span className="message-date">24.11.18</span>

                </div>
            </div>
        )
    }

}

const mapStatetoProps = (props) => {
    return props;
};

const connectedChatMessage = connect(mapStatetoProps)(ChatMessage);
export {connectedChatMessage as ChatMessage}


