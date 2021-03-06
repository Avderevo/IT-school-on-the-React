import React, {Component} from 'react';
import {chatAction, modalAction} from "../../_actions";
import connect from "react-redux/es/connect/connect";
import Message from './ChatMessage';

class StudyChatForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            message: '',
            clickOpenLesson: false
        }
    }

    handleChange =(e) => {
        let value = e.target.value;
        this.setState({message: value}
        )};

    submitChange =(e) =>{
        e.preventDefault();

        let chatMessage = {
            'message': this.state.message,
            'statisticId': this.props.statisticId
        };

        this.setState({
            message: ''
        });


        this.props.dispatch(chatAction.sendMessage(chatMessage));

    };

    render(){

        return(
            <div className="message-form mt-2">
                <form>
                    <div className="form-row align-items-center">
                        <div className="col-10">
                        <input
                            className="form-control"
                            name="message"
                            type="text"
                            value={this.state.message}
                            onChange={this.handleChange}
                            placeholder="Сообщение"
                        />
                        </div>
                        <div className="col-button">
                            <button
                                className = "btn btn-success"
                                onClick= {this.submitChange}>
                               GO

                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}


const mapStatetoProps = (props) => {
    return props;
};

const connectedStudyChatForm = connect(mapStatetoProps)(StudyChatForm);
export {connectedStudyChatForm as StudyChatForm};



