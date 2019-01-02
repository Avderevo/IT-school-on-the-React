import {Component} from "react";
import {studyAction} from "../../../_actions";
import LkHeader from "../../StudyRoom/LkHeader";
import {Link} from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import React from "react";

class TeacherCourseListPage extends Component{

    componentDidMount() {
        this.props.dispatch(studyAction.getTeacherCourses());
    }

    render() {

        const {teacherCourses} = this.props;
        return (
            <section id='user-course-list'>
                <LkHeader />
                <div className="container mt-5">
                    <div className='row'>
                        {teacherCourses.loading && <em>Loading lessons...</em>}
                        {teacherCourses.error &&  <span className="text-danger">ERROR: {teacherCourses.error}</span>}
                        {teacherCourses.items  && teacherCourses.items.map((course, index) =>
                            <div className='col-md-4'>
                                <div className='userCourse-card'>
                                    <Link to={{pathname:`/teachers-room/course/${course.course.id}`, state:{courseId:course.course.id}}}>

                                        <div className='userCourse-card-body'>
                                            <div className='userCourse-card-title'>
                                                {course.course.name_1}
                                                <br/>
                                                {course.course.name_2}
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        );
    }
}



function mapStateToProps(state) {
    const { teacherCourses} = state;

    return {
        teacherCourses
    };
}

const connectedTeacherCourseListPage = connect(mapStateToProps)(TeacherCourseListPage);
export { connectedTeacherCourseListPage as TeacherCourseListPage };
