import React, {Component} from "react";
import connect from "react-redux/es/connect/connect";
import  {modalAction} from "../../_actions";
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';
import {StudyChatForm} from '../StudyChat/StudyChatForm';
import {ChatMessage} from "../StudyChat/ChatMessage";


class LkOneLesson extends Component{
    constructor() {
        super();

        this.state = {
            clickOpenLesson: false,

        }
    }



    handleClick =()=>{
        this.setState({
            clickOpenLesson: !this.state.clickOpenLesson
        });

    };

/*    handleOpenClick = () => {

        this.props.dispatch(modalAction.openModal());
    };*/

    render(){
        const pathname = this.props.location.pathname;
        const props = this.props;
        const statisticId = this.props.id;


        return(

            <div className="col-12 timeline-wrapper">
                <div className="timeline-item">
                    <div className='container'>
                        <div className='row'>
                            <div className='col-5 no_padding-col'>

                                <span className="timeline-item-date">{props.course.id}</span>
                                <a onClick={this.handleClick}  className="timeline-item-header active">{props.lesson.lesson_number} {props.lesson.lesson_title}</a>
                                <span className="timeline-item-description"></span>
                                <div className={this.state.clickOpenLesson ? null : 'd-none'}>

                                    <div className="lesson-body">
                                        <div className="lesson-body-block">
                                            <div className="lesson-body-title">Опрос</div>
                                            <div className="lesson-body-text">Пройдите пожалуйста опрос о занятии</div>
                                        </div>
                                        <div className="lesson-body-block">
                                            <div className="lesson-body-title">Домашнее задание:</div>
                                            <div className="lesson-body-text">{props.lesson.homework_title}
                                            </div>
                                            <div className="lesson-body-text">Статус: {props.homework_status}</div>
                                        </div>
                                        <div>
                                            {/*<Link onClick={this.handleOpenClick} to={pathname +`/chat/`+props.lesson.id} type="button" className="btn lesson-body-btn">Чат с преподователем</Link>
                                            <StudyChatModal/>*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className= {this.state.clickOpenLesson ? 'col-7 no_padding-col' : 'invisible' }>
                                <div className='lesson-chat-wrapper'>
                                    <div className='homework__modal-table'>
                                        <div className='homework__modal-content-row'>
                                            <div className='homework__modal-content-box'>
                                                <div className='homework__modal-content'>
                                                    <div className='homework__modal-chat'>
                                                        <div className='homework-chat'>



                                                                <ChatMessage statisticId={statisticId}/>


                                                            <StudyChatForm statisticId={statisticId} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStatetoProps = (props) => {
    return props;
};

const connectedLkOnLesson = withRouter(connect(mapStatetoProps)(LkOneLesson));
export {connectedLkOnLesson as LkOneLesson}


