import React  from 'react';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux';
import {studyAction} from '../../../_actions/index';


class CourseStudentListPage extends React.Component {

    componentDidMount() {
        const courseId = this.props.location.state.courseId;
        this.props.dispatch(studyAction.getAllStudents(courseId));
        this.props.dispatch(studyAction.getOneCourse(courseId));
    }

    render(){
        const allStudents = this.props.allStudents;
        const oneCourse = this.props.oneCourse;
        const courseId = this.props.location.state.courseId;

        return(
            <div>
                <section id="t-student-list-header">
                    <div className="container">
                        <div className="t-student-list-header-body">


                                {oneCourse.loading && <em>Loading coursess...</em>}
                                {oneCourse.error &&  <span className="text-danger">ERROR: {oneCourse.error}</span>}
                                {oneCourse.items &&
                                <div className="display-4">
                                    {oneCourse.items.full_name}
                                </div>}


                        </div>
                    </div>
                </section>
                <section id="t-student-list">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="mb-5">
                                    <div className="list-group">
                                        <div className="list-group-item  list-group-item-secondary"><h5>Список
                                            студентов</h5></div>

                                        {allStudents.loading && <em>Loading coursess...</em>}
                                        {allStudents.error &&  <span className="text-danger">ERROR: {allStudents.error}</span>}
                                        {allStudents.items && allStudents.items.map((student, index) =>
                                            <span key={student.id}>
                                                <Link to={{pathname:"/teachers-room/user/"+student.id, state:{userId:student.id, courseId:courseId}}} className="list-group-item list-group-item-action ">{student.username}</Link>
                                            </span>
                                        )}


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        );
    }
}


function mapStateToProps(props) {
    const {oneCourse, allStudents} = props;

    return {
        oneCourse, allStudents
    };
}

const connectedCourseStudentListPage = connect(mapStateToProps)(CourseStudentListPage);
export { connectedCourseStudentListPage as  CourseStudentListPage };
