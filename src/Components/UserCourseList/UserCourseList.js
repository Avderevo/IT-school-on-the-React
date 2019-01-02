import React, { Component } from 'react';
import {studyAction} from "../../_actions";
import connect from "react-redux/es/connect/connect";
import LkHeader from '../StudyRoom/LkHeader';
import { Link } from 'react-router-dom';


class UserCourseList extends Component{

    componentDidMount() {
        this.props.dispatch(studyAction.getUserCourseList());
    }

    render() {

        const {userCourses} = this.props;
        return (
            <section id='user-course-list'>
                <LkHeader />
                <div className="container mt-5">
                    <div className='row'>
                        {userCourses.loading && <em>Loading lessons...</em>}
                        {userCourses.error &&  <span className="text-danger">ERROR: {userCourses.error}</span>}
                        {userCourses.items  && userCourses.items.map((course, index) =>
                            <div className='col-md-4'>
                                <div className='userCourse-card'>
                                    <Link to={{pathname:`/studyroom/${course.course.id}`,  state: {courseId:course.course.id}}}>

                                        <div className='userCourse-card-body'>
                                            <div className='userCourse-card-title'>
                                                {course.course.name_1}
                                                <br/>
                                                {course.course.name_2}
                                            </div>
                                            <div className='userCourse-card-description mt-3'>
                                                Тест пройден
                                            </div>
                                            <div className='userCourse-card-description'>
                                                {course.is_paid ? 'Курс оплачен' : 'Курс не оплачен'}
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
    const { userCourses} = state;

    return {
        userCourses
    };
}

const connectedUserCourseList = connect(mapStateToProps)(UserCourseList);
export { connectedUserCourseList as UserCourseList };
