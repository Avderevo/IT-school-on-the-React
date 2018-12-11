import React, {Component} from  'react';

class ChatMessage extends Component{
    render(){
        return(
            <div className="message-block">
                <div className="student-message-block">
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

export default ChatMessage