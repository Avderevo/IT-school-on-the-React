import React  from 'react';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux';
import {studyAction} from '../../_actions';


class StudentListPage extends React.Component {

    componentDidMount() {
        this.props.dispatch(studyAction.getAllStudents(1));
        this.props.dispatch(studyAction.getOneCourse('Python'));
    }

    render(){
        const allStudents = this.props.allStudents;
        const oneCourse = this.props.oneCourse;

        return(
            <div>
                <section id="t-student-list-header">
                    <div className="container">
                        <div className="t-student-list-header-body">


                                {oneCourse.loading && <em>Loading coursess...</em>}
                                {oneCourse.error &&  <span className="text-danger">ERROR: {oneCourse.error}</span>}
                                {oneCourse.items &&
                                <div className="display-4">
                                    {oneCourse.items.name_1} {oneCourse.items.name_2}
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
                                            <Link to={{pathname:"/teachers-room/user/"+student.id, state:{userId:student.id, courseId:1}}} className="list-group-item list-group-item-action ">{student.username}</Link>
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

const connectedStudentListPage = connect(mapStateToProps)(StudentListPage);
export { connectedStudentListPage as  StudentListPage };
