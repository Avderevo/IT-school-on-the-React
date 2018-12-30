import React, { Component } from 'react';


class OneCourseCarouselComments extends Component {


    render() {
        return (
            <section id="course-comment-carousel-section">
                <div className="container">
                    <div className="carousel-comment-title mb-5">Отзывы</div>
                    <div className="container">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="carousel-comment-item">
                                        <div className="mb-4">
                                            <div className="course-comment-photo">
                                                <img className="rounded-circle" width="60" height="60"
                                                     src="../img/tch1.jpg" alt="Card image cap" />
                                            </div>
                                            <div className="course-comment-name">tempor <br />incididunt</div>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur.<br /><br /> Excepteur sint occaecat
                                                cupidatat non
                                                proident, sunt in culpa qui officia deserunt mollit.</p>

                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="carousel-comment-item">
                                        <div className="mb-4">
                                            <div className="course-comment-photo">
                                                <img className="rounded-circle" width="60" height="60"
                                                     src="../img/tch1.jpg" alt="Card image cap" />
                                            </div>
                                            <div className="course-comment-name">tempor <br />incididunt
                                            </div>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur.<br /><br /> Excepteur sint occaecat
                                                cupidatat non
                                                proident, sunt in culpa qui officia deserunt mollit.</p>

                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="carousel-comment-item">
                                        <div className="mb-4">
                                            <div className="course-comment-photo">
                                                <img className="rounded-circle" width="60" height="60"
                                                     src="../img/tch1.jpg" alt="Card image cap" />
                                            </div>
                                            <div className="course-comment-name">tempor <br />incididunt
                                            </div>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur.<br /><br /> Excepteur sint occaecat
                                                cupidatat non
                                                proident, sunt in culpa qui officia deserunt mollit.</p>

                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                               data-slide="prev">
                                <span className="carousel-control-prev-icon mr-5" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                               data-slide="next">
                                <span className="carousel-control-next-icon ml-5" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default OneCourseCarouselComments;