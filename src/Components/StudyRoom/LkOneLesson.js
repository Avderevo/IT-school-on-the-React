import StudyChatPage from '../StudyChat/StudyChatPage';
import React, {Component} from "react";
import Modal from 'react-modal';



class LkOneLesson extends Component{
    constructor() {
        super();

        this.state = {
            clickOpenLesson: false,
            modalIsOpen: false
        }
    }

    handleClick =()=>{
        this.setState({
            clickOpenLesson: !this.state.clickOpenLesson
        });

    };

    handleOpenModal =()=>{
        this.setState({ modalIsOpen: true });
    };

    CloseModal=()=>{
        this.setState({ modalIsOpen: false });
    };

    render(){
    const props = this.props;
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
                                <button onClick={this.handleOpenModal} type="button" className="btn lesson-body-btn">Чат с преподователем</button>
                                <Modal  isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal}>

                                    <StudyChatPage handleClose={this.handleCloseModal} />

                                </Modal >



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default LkOneLesson;

