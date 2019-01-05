import {Component} from "react";
import {schoolAction, studyAction} from "../../../_actions";
import LkHeader from "../../StudyRoom/LkHeader";
import {Link} from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import React from "react";
import {studyService} from "../../../_services";
import {withRouter} from 'react-router';


class TeacherCourseListPage extends Component{
    constructor() {
        super();
        this.state = {
            courseId:''

        }
    }

    componentDidMount() {
        this.props.dispatch(studyAction.getTeacherCourses());
        this.props.dispatch(schoolAction.getAllCourses());
    }

    handleSelectorChange = (e) =>{
        let value = e.target.value;
        let name = e.target.name;
        this.setState({[name]: value}
        )


    };

    handleFormSubmit = (e) => {
        e.preventDefault();
        let courseId = this.state.courseId;
        const { dispatch } = this.props;

        dispatch(studyAction.registerTeacherOnCourse(courseId));
    };

    render() {

        const {teacherCourses, allCourses} = this.props;

        return (
            <section id='user-course-list'>
                <LkHeader />
                <div className="container mt-5">
                    <div>
                        <div className='mb-4'>
                            <form className="form-inline">
                                <label className="my-1 mr-3"
                                       htmlFor="inlineFormCustomSelectPref"><h4>Регистрация преподавателя на курс</h4></label>
                                <select className="custom-select my-1 mr-sm-2"
                                        onChange={this.handleSelectorChange}
                                        value={this.state.courseId}
                                        name={'courseId'}
                                >
                                    <option>Выберите курс</option>
                                    {allCourses.loading && <em>Loading...</em>}
                                    {allCourses.error &&  <span className="text-danger">ERROR: {allCourses.error}</span>}
                                    {allCourses.items  && allCourses.items.map((course, index) =>



                                            <option key={course.id} className=' text-info' value={course.id}>{course.name}</option>


                                    )}

                                </select>

                                <button onClick={this.handleFormSubmit} className="btn btn-success">Регистрация</button>
                            </form>
                            <hr/>
                        </div>
                    </div>
                    <div className='row'>
                        {teacherCourses.loading && <em>Loading lessons...</em>}
                        {teacherCourses.error &&  <span className="text-danger">ERROR: {teacherCourses.error}</span>}
                        {teacherCourses.items  && teacherCourses.items.map((course, index) =>
                            <div className='col-md-4' key={course.id}>
                                <div className='teacherCourse-card'>
                                    <Link to={{pathname:`/teachers-room/course/${course.course.id}`, state:{courseId:course.course.id}}}>

                                        <div className='userCourse-card-body'>
                                            <div className='teacherCourse-card-title'>
                                                {course.course.full_name}
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
    const { teacherCourses, allCourses} = state;

    return {
        teacherCourses, allCourses
    };
}

const connectedTeacherCourseListPage = withRouter(connect(mapStateToProps)(TeacherCourseListPage));
export { connectedTeacherCourseListPage as TeacherCourseListPage };
