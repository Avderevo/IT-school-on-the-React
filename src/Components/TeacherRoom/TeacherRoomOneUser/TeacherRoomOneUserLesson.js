import React  from 'react';
import {connect} from 'react-redux';
import {studyAction} from '../../../_actions';
import {withRouter} from 'react-router';
import {TeacherRoomChatMessage} from './TeacherRoomChatMessage';
import {TeacherRoomChatForm} from './TeacherRoomChatForm';



class TeacherRoomOneUserLesson extends React.Component {
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



   /* componentDidMount() {
        const {userId, courseId} = this.props.location.state;

        this.props.dispatch(studyAction.getStudentStatistics(userId, courseId));
}*/



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
                                        <div className='mb-2'>
                                            <a onClick={this.handleClick}  className="h4">{studentLesson.lesson.lesson_number} {studentLesson.lesson.lesson_title}</a>
                                        </div>
                                        <p>Time: {studentLesson.lesson.id}</p>

                                    </div>

                                    <div className={this.state.clickOpenLesson ? null : 'd-none'}>


                                        <div className=" teacher-chat-dz">
                                            <span className="h5">ДЗ: </span><span className="lead"> {studentLesson.lesson.homework_title}</span>
                                        </div>
                                        <div className='mb-3'>
                                            <form className="form-inline">
                                                <label className="my-1 mr-2"
                                                       htmlFor="inlineFormCustomSelectPref">Статус</label>
                                                <select className="custom-select my-1 mr-sm-2"
                                                        id="inlineFormCustomSelectPref">
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>

                                                <button type="submit" className="btn btn-primary">Submit</button>
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
