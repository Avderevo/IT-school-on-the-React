import React, {Component} from 'react';
import StudyChatForm from './StudyChatForm';
import ChatHomeworkList from './ChatHomeworkList';
import StudyChatHeader from './StudyChatHeader';
import ChatMessage from './ChatMessage';
import Modal from "react-modal";



class StudyChatPage extends Component{
    render(){
        const { handleClose, show} = this.props;

        return(

                <section id="homework-chat">
                    <div className="row">
                        <ChatHomeworkList/>
                        <div className="col-md-9 no_padding-col">
                            <StudyChatHeader hendleClose={handleClose}/>
                            <div className="chat-display">
                                <ChatMessage/>
                            </div>
                            <StudyChatForm />
                        </div>
                    </div>
                </section>

        )
    }
}

export default StudyChatPage;
