import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";
import {schoolAction} from "../../_actions";
import CourseCard from '../Common/CourseCard'


class CourseCards extends Component {

    componentDidMount() {
        this.props.dispatch(schoolAction.getCourseCard());
    }

    render() {
        const {courseCard} = this.props;
        return (
            <section id="all-curses">
                <div className="container">
                    <div className="row">

                        {courseCard.loading && <em>Loading coursess...</em>}
                        {courseCard.error &&  <span className="text-danger">ERROR: {courseCard.error}</span>}
                        {courseCard.items && courseCard.items.map((card, index) =>
                            <CourseCard {...card} key={card.id} />
                        )}
                    </div>
                </div>
            </section>
        );
    }
}

function mapStateToProps(state) {
    const {courseCard} = state;

    return {
        courseCard
    };
}

const connectedCourseCards = connect(mapStateToProps)(CourseCards);
export { connectedCourseCards as  CourseCards };
