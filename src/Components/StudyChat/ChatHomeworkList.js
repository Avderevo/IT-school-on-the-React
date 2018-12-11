import React, {Component} from 'react';
import {chatAction} from "../../_actions";
import connect from "react-redux/es/connect/connect";


class ChatHomeworkList extends Component{
    componentDidMount() {
        this.props.dispatch(chatAction.getAllHomework());
    }

    render(){
        const {homeworks }= this.props;
        return(
            <div className="col-md-3 no_padding-col">
                <div className="chat-homework-list">
                    {homeworks.loading && <em>Loading homework...</em>}
                    {homeworks.error &&  <span className="text-danger">ERROR: {homeworks.error}</span>}
                    {homeworks.items  && homeworks.items.homeworks.map((homework, index) =>
                        <div className="homework-title-block">
                            <div className='homework-name'>

                                <a href="">{homework.name}</a>
                                <span className="homework-title-icon">ff</span>
                            </div>
                        </div>

                    )}

                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    const { homeworks} = state;

    return {
        homeworks
    };
}

const connectedChatHomeworkList = connect(mapStateToProps)(ChatHomeworkList);
export { connectedChatHomeworkList as ChatHomeworkList };
