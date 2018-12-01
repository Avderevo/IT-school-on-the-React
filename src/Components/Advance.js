import React, { Component } from 'react';
import CourseCard from "./CourseCard"
class Advance extends Component {

    render() {
        let course;
        if (this.props.data) {
            let data = this.props.data;
            course = data.map((item)=>{
                return (
                    <CourseCard {...item} />
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

