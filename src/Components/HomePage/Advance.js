import React, { Component } from 'react';
import CourseCard from "../Common/CourseCard"
import connect from "react-redux/es/connect/connect";
import {schoolAction} from "../../_actions";


class Advance extends Component {

    componentDidMount() {
        this.props.dispatch(schoolAction.getCourseCard());
    }

    render() {
        const {courseCard} = this.props;
        return (
            <section id='advance' className="section-advance">
                <div className="container">
                    <div className="advance-section-title">
                        <h4>Успеть на ближайшие курсы </h4>
                    </div>
                    <div className="row">

                        {courseCard.loading && <em>Loading coursess...</em>}
                        {courseCard.error &&  <span className="text-danger">ERROR: {courseCard.error}</span>}
                        {courseCard.items && courseCard.items.slice(0, 6).map((card, index) =>
                            <CourseCard key={card.id} {...card} />
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

const connectedAdvance = connect(mapStateToProps)(Advance);
export { connectedAdvance as  Advance };
