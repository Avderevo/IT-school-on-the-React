import React  from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {TeacherRoomChatMessage} from './TeacherRoomChatMessage';
import {TeacherRoomChatForm} from './TeacherRoomChatForm';
import {studyService} from '../../../_services'


class TeacherRoomOneUserLesson extends React.Component {
    constructor() {
        super();
        this.state = {
            clickOpenLesson: false,
            status:'1'

        }
    }

    handleClick =()=>{
        this.setState({
            clickOpenLesson: !this.state.clickOpenLesson
        });

    };

    handleSelectorChange = (e) =>{
        let value = e.target.value;
        let name = e.target.name;
        this.setState({[name]: value}
        )


    };

    handleFormSubmit = (e) => {
        e.preventDefault();
        let data =
            {
                status: this.state.status
            };

        const statId = this.props.id;
        studyService.changeHomeworkStatus(data, statId);
    };


    render(){
        const studentLesson = this.props;
        const statisticId = studentLesson.id;

        return(
            <div className="col-12">
                <div className="t-1-lesson">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 mt-3">
                                <div className="t-1-lesson-body ">
                                    <div className="mb-3">
                                        <div className='lesson-name'>
                                            <span className="numberCircle-positiv h5">{studentLesson.lesson.lesson_number}</span>
                                            <span onClick={this.handleClick}  className="h4 ml-2">
                                                 {studentLesson.lesson.lesson_title}</span>
                                        </div>
                                        <p className='mt-3'>Time: {studentLesson.lesson.id}</p>

                                    </div>

                                    <div className={this.state.clickOpenLesson ? null : 'd-none'}>


                                        <div className=" teacher-chat-dz">
                                            <span className="h5">ДЗ: </span><span className="lead"> {studentLesson.lesson.homework_title}</span>
                                            <p>Статус: &nbsp; {(() => {
                                                switch (studentLesson.homework_status) {
                                                    case 1:   return <span className='text-dark h6'>Не активно</span>;
                                                    case 2: return <span className='text-danger h6'>Активно</span>;
                                                    case 3:  return <span className='text-success h6'>На проверке</span>;
                                                    case 4:  return <span className='text-primary h6'>Принято</span>;
                                                    default:      return "Не активно";
                                                }
                                            })()}</p>
                                        </div>
                                        <div className='mb-3'>
                                            <form className="form-inline">
                                                <label className="my-1 mr-2"
                                                       htmlFor="inlineFormCustomSelectPref">Статус</label>
                                                <select className="custom-select my-1 mr-sm-2"
                                                        onChange={this.handleSelectorChange}
                                                        value={this.state.status}
                                                        name={'status'}
                                                >
                                                    <option value="1">Не активно</option>
                                                    <option value='2'>Активно</option>
                                                    <option value="3">На проверке</option>
                                                    <option value="4">Принято</option>
                                                </select>

                                                <button onClick={this.handleFormSubmit} className="btn btn-primary">Submit</button>
                                            </form>
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

                                                           <TeacherRoomChatMessage statisticId={statisticId}/>

                                                            <TeacherRoomChatForm statisticId={statisticId} />
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

        );
    }
}


function mapStateToProps(studentLesson) {

    return {
        studentLesson
    };
}

const connectedTeacherRoomOneUserLesson = withRouter(connect(mapStateToProps)(TeacherRoomOneUserLesson));
export { connectedTeacherRoomOneUserLesson as  TeacherRoomOneUserLesson };
