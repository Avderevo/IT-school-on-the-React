import React, { Component } from 'react';


class OneCoursePrice extends Component {


    render() {
        return (
            <section id="card-course-price" className='bg-C-plus-plus'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <p>Общая стоимость</p>
                            <h5>60 000 ₽ </h5>
                            <p>В месяц: 11 500 ₽</p>
                            <p>В кредит: около 7340 ₽ в месяц</p>
                            <span id="course-price-btn"><a className="btn btn-one-course-price"
                                                           href="#">Хочу дешевле</a></span>
                        </div>
                        <div className="col-md-4">
                            <p>Продолжительность</p>
                            <h5 className="mb-1">6 месяцев</h5>
                            <p className="mb-5">4 часа в неделю</p>
                            <p>Начало занятий</p>
                            <h5 className="mb-1">20 ноября</h5>
                        </div>
                        <div className="col-md-4">
                            <div className="container container-col">
                                <div className="container-col-middle">
                                    <div className="card-course-price-orange-btn-box">
                                        <span id="price-orange-btn"><a className="btn-one-course-price-orange" href="#">Пройти тестирование</a></span>
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

export default OneCoursePrice;