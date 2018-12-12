import React, { Component } from 'react';
import CourseCard from "../Common/CourseCard"
import connect from "react-redux/es/connect/connect";
import {schoolAction} from "../../_actions";


class Advance extends Component {

    componentDidMount() {
        this.props.dispatch(schoolAction.getCourseCard());
    }

    render() {
        const {coursecard} = this.props;
        return (
            <section id='advance' className="section-advance">
                <div className="container">
                    <div className="advance-section-title">
                        <h4>Успеть на ближайшие курсы </h4>
                    </div>
                    <div className="row">

                        {coursecard.loading && <em>Loading coursess...</em>}
                        {coursecard.error &&  <span className="text-danger">ERROR: {coursecard.error}</span>}
                        {coursecard.items && coursecard.items.courseCards.map((card, index) =>
                            <CourseCard {...card} />
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

const connectedAdvance = connect(mapStateToProps)(Advance);
export { connectedAdvance as  Advance };
