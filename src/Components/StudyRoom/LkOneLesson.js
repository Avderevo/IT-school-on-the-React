import StudyChatPage from '../StudyChat/StudyChatPage';
import React, {Component} from "react";
import Modal from 'react-modal';
import connect from "react-redux/es/connect/connect";
import  {modalAction} from "../../_actions";
import {Link} from 'react-router-dom';




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
    const props = this.props;
    const click = this.props.openModal.click;
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
                                <button onClick={this.handleOpenClick} type="button" className="btn lesson-body-btn">Чат с преподователем</button>
                                <Modal
                                    isOpen={click}
                                    onRequestClose={this.closeModal}
                                    className="modal-style"
                                    bodyOpenClassName="ReactModal__Body--open"
                                    htmlOpenClassName="ReactModal__Html--open"
                                >
                                    <div className='learning-modal'>
                                        <StudyChatPage handleClose={this.CloseModal} />
                                    </div>

                                </Modal>
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

const connectedLkOnLesson = connect(mapStatetoProps)(LkOneLesson);
export {connectedLkOnLesson as LkOneLesson}


