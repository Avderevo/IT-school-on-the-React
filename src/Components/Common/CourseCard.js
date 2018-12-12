import React  from 'react';

const CourseCard = (props) => {

    return(
        <div  key={props.name} className="col-lg-4 col-md-6 mb-4">
            <div>
                <div className={"card curses-card shadow curses-card-hover "+ props.bg} >
                    <a href="#">
                        <div className="card-body">
                            <h3>{props.name_1}<br />{props.name_2}</h3>

                            <hr className="heading-devider float-left" /><br />
                            <div><h6>{props.description}</h6></div>
                        </div>
                    </a>
                </div>
            </div>
            <span className={"meta-2 " + (props.meta ? 'show' : 'invisible')}>Успеть!</span>
        </div>
    );
};

export default CourseCard;