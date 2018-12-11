import StudyChatPage from '../StudyChat/StudyChatPage';
import React, {Component} from "react";
import Modal from 'react-modal';
import connect from "react-redux/es/connect/connect";
import  {modalAction} from "../../_actions";

const customStyles = {
    content : {
        top : '0',
        left : '0',
        right : '0',
        bottom  : '0',
        display: 'block'
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
    const props = this.props;
    const click = this.props.openModal.click;
        return(

            <div className="col-12 timeline-wrapper">
                <div className="timeline-item">
                    <span className="timeline-item-date">{props.date}</span>
                    <a onClick={this.handleClick}  className="timeline-item-header active">{props.number} {props.name}</a>
                    <span className="timeline-item-description">Детальное описание статьи</span>
                    <div className={this.state.clickOpenLesson ? null : 'd-none'}>

                        <div className="lesson-body">
                            <div className="lesson-body-block">
                                <div className="lesson-body-title">Опрос</div>
                                <div className="lesson-body-text">Пройдите пожалуйста опрос о занятии</div>
                            </div>
                            <div className="lesson-body-block">
                                <div className="lesson-body-title">Домашнее задание:</div>
                                <div className="lesson-body-text">{props.homework}
                                </div>
                                <div className="lesson-body-text">Статус: не сдано</div>
                            </div>
                            <div>
                                <button onClick={this.handleOpenClick} type="button" className="btn lesson-body-btn">Чат с преподователем</button>
                                <Modal  isOpen={click} onRequestClose={this.closeModal}  style={customStyles}>

                                    <StudyChatPage handleClose={this.CloseModal} />

                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStatetoProps = (click) => {
    return click;
};

const connectedLkOnLesson = connect(mapStatetoProps)(LkOneLesson);
export {connectedLkOnLesson as LkOneLesson}


