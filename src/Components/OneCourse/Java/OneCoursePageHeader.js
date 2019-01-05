import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";
import {studyAction} from "../../../_actions";
import { Link} from 'react-router-dom';
import {withRouter} from 'react-router';



class OneCoursePageHeader extends Component{


    componentDidMount() {
        const courseId = this.props.location.state.courseId;
        this.props.dispatch(studyAction.getOneCourse(courseId));
    }


    render() {
        const oneCourse = this.props.oneCourse;


        return (


            <section id="one-course-header" className='bg-python' >

                {oneCourse.loading && <em>Loading coursess...</em>}
                {oneCourse.error &&  <span className="text-danger">ERROR: {oneCourse.error}</span>}
                {oneCourse.items &&


                <div className="container ">
                    <div className="row">
                        <div className="col-md-8 one-course-header-title">
                            <h4 className="display-3 mb-5">{oneCourse.items.full_name}</h4>
                            <p className="mb-5">Курс об администрировании систем на базе Linux, который направлен на
                                получение знаний и формирование навыков построения и обслуживания высоконадежных
                                высокодоступных систем</p>
                            <span className="orange-btn"><Link className="btn btn-one-course-header-orange" to={{pathname:`/test/${oneCourse.items.name}`, state:{courseId:oneCourse.items.id}}}>Поступить на курс</Link></span>
                            <span id="positiv-btn"><a className="btn btn-one-course-header" href="#">Обучение сотрудников</a></span>
                        </div>
                        <div className="col-md-4 align-right">
                            <div className="card shadow one-course-header-my-card bg-python-priceCard h-100">
                                <div className="card-body">
                                    <p>Общая стоимость</p>
                                    <h5>60 000 ₽ </h5>
                                    <p>В месяц: 11 500 ₽</p>
                                    <p>В кредит: около 7340 ₽ в месяц</p>
                                    <a className="btn btn-one-course-header-my-card" href="#">Хочу дешевле</a>
                                    <p>Продолжительность</p>
                                    <h5 className="mb-1">6 месяцев</h5>
                                    <p className="mb-4">4 часа в неделю</p>
                                    <p>Начало занятий</p>
                                    <h5 className="mb-1">20 ноября</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                }


            </section>
        );
    }
}


function mapStateToProps(props) {
    const {oneCourse} = props;

    return {
        oneCourse
    };
}

const connectedOneCoursePageHeader = withRouter(connect(mapStateToProps)(OneCoursePageHeader));
export {connectedOneCoursePageHeader as OneCoursePageHeader};


