import React  from 'react';
import { Link } from 'react-router-dom'



const CourseCard = (props) => {

    return(
        <div  key={props.id} className="col-lg-4 col-md-6 mb-4 course-card-wrapper">
            <Link
                to={{pathname:`/course/${props.name}/`, state:{courseId:props.id}}}>
                <div>
                    <div className={`card curses-card shadow curses-card-hover gradient-${props.name}`} >

                            <div className='card-body'>
                                <h3>{props.full_name}</h3>

                                <hr className="heading-devider float-left align-bottom" /><br />
                                <span className='align-text-bottom mb-0'><h6 >{props.date_start}</h6></span>
                            </div>

                    </div>
                </div>
            </Link>
            <span className={"meta-2 " + (props.label ? 'show' : 'invisible')}>Успеть!</span>
        </div>
    );
};

export default CourseCard;