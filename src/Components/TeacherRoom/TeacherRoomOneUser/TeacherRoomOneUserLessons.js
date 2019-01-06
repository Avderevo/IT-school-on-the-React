import React  from 'react';
import {connect} from 'react-redux';
import {studyAction} from '../../../_actions';
import {withRouter} from 'react-router';
import {TeacherRoomOneUserLesson} from "./TeacherRoomOneUserLesson";


class TeacherRoomOneUserLessons extends React.Component {

    componentDidMount() {
        const {userId, courseId} = this.props.location.state;

        this.props.dispatch(studyAction.getStudentStatistics(userId, courseId));


    }

    render(){
        const {studentStatistics} = this.props.studentStatistics;

        return(
            <section id="t-1-lessons-section">
                <div className="container">
                    <div className="row">

                        {studentStatistics.loading && <em>Loading...</em>}
                        {studentStatistics.error &&  <span className="text-danger">ERROR: {studentStatistics.error}</span>}
                        {studentStatistics.items && studentStatistics.items.map((studentLesson, index) =>
                            <TeacherRoomOneUserLesson {...studentLesson} key={studentLesson.id} />

                        )}


                    </div>
                </div>
            </section>

        );
    }
}


function mapStateToProps(studentStatistics) {

    return {
        studentStatistics
    };
}

const connectedTeacherRoomOneUserLessons = withRouter(connect(mapStateToProps)(TeacherRoomOneUserLessons));
export { connectedTeacherRoomOneUserLessons as  TeacherRoomOneUserLessons };