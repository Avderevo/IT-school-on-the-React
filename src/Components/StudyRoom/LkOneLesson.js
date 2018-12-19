import {StudyChatModal} from '../StudyChat/StudyChatModal';
import React, {Component} from "react";
import Modal from 'react-modal';
import connect from "react-redux/es/connect/connect";
import  {modalAction} from "../../_actions";
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';

const style={

    content: {
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        marginRight: '0',
        /*transform: 'translate(-50%, -50%)',
        height: '500px', // <-- This sets the height*/
        overlfow: 'scroll' // <-- This tells the modal to scrol
    }
};


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

    handleOpenClick = () => {

        this.props.dispatch(modalAction.openModal());
    };

    render(){
        const pathname = this.props.location.pathname;
        console.log(pathname);
        const props = this.props;
        return(

            <div className="col-12 timeline-wrapper">
                <div className="timeline-item">
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
                                <Link onClick={this.handleOpenClick} to={pathname +`/chat/`+props.lesson.id} type="button" className="btn lesson-body-btn">Чат с преподователем</Link>
                                <StudyChatModal/>
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


