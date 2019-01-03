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

            <div className="col-12 timeline-wrapper"  >
                <div className="timeline-item">
                    <div className='container'>
                        <div className='row'>
                            <div className='col-5 no_padding-col'>


                                <div className='oneLesson-name '>
                                    <span className='numberCircle-negative h5'>{props.lesson.lesson_number}</span>
                                    <span onClick={this.handleClick}  className="timeline-item-header active ml-2">{props.lesson.lesson_title}</span>
                                </div>

                                <span className="timeline-item-date mt-2">Дата: {props.course.id}</span>
                                <div className={this.state.clickOpenLesson ? null : 'd-none'}>

                                    <div className="lesson-body">
                                        <div className="lesson-body-block">
                                            <div className="lesson-body-title">Опрос</div>
                                            <div className="lesson-body-text">Пройдите пожалуйста опрос о занятии</div>
                                        </div>
                                        <div className="lesson-body-block">
                                            <span className="lesson-body-title mr-1">ДЗ:</span>
                                            <span className="lesson-body-text">{props.lesson.homework_title}
                                            </span>
                                            <div className="lesson-body-text">Статус: &nbsp; {(() => {
                                                switch (props.homework_status) {
                                                    case 1:   return <span className='text-white h5'>Не активно</span>;
                                                    case 2: return <span className='text-danger h5'>Активно</span>;
                                                    case 3:  return <span className='text-success h5'>На проверке</span>;
                                                    case 4:  return <span className='text-primary h5'>Принято</span>;
                                                    default:      return "Не активно";
                                                }
                                            })()}</div>
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



                                                                <ChatMessage  statisticId={statisticId}/>


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


