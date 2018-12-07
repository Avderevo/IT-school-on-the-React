// CourseCard.js
import React, { Component } from 'react';

class CourseCard extends Component {
    render() {
        let data = this.props;
        return (
            <div  key={data.name} className="col-lg-4 col-md-6 mb-4">
                <div>
                    <div className={"card curses-card shadow curses-card-hover "+ data.bg} >
                        <a href="#">
                            <div className="card-body">
                                <h3>{data.name_1}<br />{data.name_2}</h3>

                                <hr className="heading-devider float-left" /><br />
                                <div><h6>{data.description}</h6></div>
                            </div>
                        </a>
                    </div>
                </div>
                <span className={"meta-2 " + (data.meta ? 'show' : 'invisible')}>Успеть!</span>
            </div>
        );
    }
}
export default CourseCard;