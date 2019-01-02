import React, { Component } from 'react';
import {LkOneLesson} from './LkOneLesson'
import {studyAction} from "../../_actions";
import connect from "react-redux/es/connect/connect";
import {withRouter} from 'react-router';

class LkLesson extends Component{

    componentDidMount() {
        const courseId = this.props.location.state.courseId;
        this.props.dispatch(studyAction.getStudyRoom(courseId));

    }

    render() {

        const {lessons} = this.props;
        return (
            <section className="lk-lesson">
                <div className="container">
                    <div className="timeline">
                        <div className="row">

                            {lessons.loading && <em>Loading lessons...</em>}
                            {lessons.error &&  <span className="text-danger">ERROR: {lessons.error}</span>}
                            {lessons.items  && lessons.items.map((item, index) =>

                                <LkOneLesson {...item} />

                                )}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}



function mapStateToProps(state) {
    const { lessons} = state;

    return {
        lessons
    };
}

const connectedLkLesson = withRouter(connect(mapStateToProps)(LkLesson));
export {connectedLkLesson as LkLesson};
