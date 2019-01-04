import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";
import {schoolAction} from "../../_actions";
import CourseCard from '../Common/CourseCard'


class CourseCards extends Component {

    componentDidMount() {
        this.props.dispatch(schoolAction.getCourseCard());
    }

    render() {
        const {coursecard} = this.props;
        return (
            <section id="all-curses">
                <div className="container">
                    <div className="row">

                        {coursecard.loading && <em>Loading coursess...</em>}
                        {coursecard.error &&  <span className="text-danger">ERROR: {coursecard.error}</span>}
                        {coursecard.items && coursecard.items.courseCards.map((card, index) =>
                            <CourseCard {...card} key={card.id} />
                        )}
                    </div>
                </div>
            </section>
        );
    }
}

function mapStateToProps(state) {
    const {coursecard} = state;

    return {
        coursecard
    };
}

const connectedCourseCards = connect(mapStateToProps)(CourseCards);
export { connectedCourseCards as  CourseCards };
