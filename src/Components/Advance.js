// Advance.js
import React, { Component } from 'react';
import CourseCard from "./CourseCard"
class Advance extends Component {

    render() {
        if (this.props.data) {
            var data = this.props.data;
            var course= data.map(function (item) {
                return (
                    <CourseCard data={item} />
                )
            });
        }

        return (
            <section id='advance' className="section-advance">
                <div className="container">
                    <div className="advance-section-title">
                        <h4>Успеть на ближайшие курсы </h4>
                    </div>
                    <div className="row">
                        {course}
                    </div>
                </div>
            </section>
        );
    }
}

export default Advance;

