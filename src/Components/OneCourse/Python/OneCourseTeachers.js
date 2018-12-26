import React, {Component} from 'react';




class OneCourseTeachers extends Component{
    render(){
        return(
            <section id="course-teachers">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="text-centre">
                                <div className="about-course-title mb-5">Преподаватели</div>
                                <div className="course-teacher-big-photo">
                                    <img className="rounded-circle" width="220" height="220" src="../img/tch1.jpg"
                                         alt="Card image cap" />
                                </div>
                                <div>
                                    <p>
                                        <div className="about-course-teachers"><b>Some quick example</b></div>
                                        <br /> text to build on the card title and make up the bulk of the card's content.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="about-course-teacher"><p>Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur.<br /><br /> Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt mollit.</p>
                            </div>
                            <hr className="heading-r" />
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="course-teachers-list">
                                            <a href="" className="course-one-teacher">
                                                <div className="course-teacher-box">
                                                    <div className="course-teacher-photo">
                                                        <img className="rounded-circle" width="60" height="60"
                                                             src="../img/tch1.jpg" alt="Card image cap" />
                                                    </div>
                                                    <div className="course-teacher-name">
                                                        tempor <br />incididunt
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="course-teachers-list">
                                            <a href="" className="course-one-teacher">
                                                <div className="course-teacher-box">
                                                    <div className="course-teacher-photo">
                                                        <img className="rounded-circle" width="60" height="60"
                                                             src="../img/tch1.jpg" alt="Card image cap" />
                                                    </div>
                                                    <div className="course-teacher-name">tempor <br />incididunt
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="course-teachers-list">
                                            <a href="" className="course-one-teacher">
                                                <div className="course-teacher-box">
                                                    <div className="course-teacher-photo">
                                                        <img className="rounded-circle" width="60" height="60"
                                                             src="../img/tch1.jpg" alt="Card image cap" />
                                                    </div>
                                                    <div className="course-teacher-name">
                                                        tempor <br />incididunt
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="course-teachers-list">
                                            <a href="" className="course-one-teacher">
                                                <div className="course-teacher-box">
                                                    <div className="course-teacher-photo">
                                                        <img className="rounded-circle" width="60" height="60"
                                                             src="../img/tch1.jpg" alt="Card image cap" />
                                                    </div>
                                                    <div className="course-teacher-name">
                                                        tempor <br />incididunt
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default OneCourseTeachers;
