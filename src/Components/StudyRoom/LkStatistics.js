import React, {Component} from 'react';
import {studyAction} from "../../_actions";
import connect from "react-redux/es/connect/connect";
import {withRouter} from 'react-router';



class LkStatistics extends Component{



    componentDidMount() {
        const courseId = this.props.location.state.courseId;
        this.props.dispatch(studyAction.getOneCourseStatistic(courseId));
        this.props.dispatch(studyAction.getOneCourse(courseId));

    }

    render() {

        const oneCourseStatistic = this.props.oneCourseStatistic;
        const oneCourse = this.props.oneCourse;
        return (
            <section id="lk-statistics">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="lk-statistics-headline">Домашних заданий:&nbsp;
                                <span className="lk-statistics-item">
                                    {oneCourse.loading && <em>Loading...</em>}
                                    {oneCourse.error &&  <span className="text-danger">ERROR: {oneCourse.error}</span>}
                                    {oneCourse.items && oneCourse.items.homework_all}
                                </span>
                            </div>

                        </div>
                        <div className="col-md-3">
                            <div className="lk-statistics-headline">Выполнено:&nbsp;
                                <span className="lk-statistics-item">
                                    {oneCourseStatistic.loading && <em>Loading...</em>}
                                    {oneCourseStatistic.error &&  <span className="text-danger">ERROR: {oneCourseStatistic.error}</span>}
                                    {oneCourseStatistic.items  &&  oneCourseStatistic.items.homework_done}
                                </span>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

        )
    }
}



function mapStateToProps(state) {
    const { oneCourseStatistic, oneCourse} = state;

    return {
        oneCourseStatistic, oneCourse
    };
}

const connectedLkStatistics = withRouter(connect(mapStateToProps)(LkStatistics));
export { connectedLkStatistics as LkStatistics };
