// Additions.js
import React, { Component } from 'react';

class Additions extends Component {
  render() {
    return (
      <section id="additions" className="section-additions">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="card-additions mb-4 transition-scale">
                        <a href="" className="hover-additions">
                            <div className="card-additions-body">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-3 d-none d-lg-block">
                                            <div className="card-additions-icon">
                                                <i className="material-icons md-100">&#xe263;</i>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <h5>Трудоустройство</h5>
                                            <p>Нашим стутентам предлагают работу многие крупные компании</p>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                   <div className="card-additions mb-4 transition-scale">
                        <a href="" className="hover-additions">
                            <div className="card-additions-body">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-3 d-none d-lg-block">
                                            <div className="card-additions-icon">
                                                <i className="material-icons md-100">&#xe813;</i> 
                                            </div>
                                        </div>
                                        <div className="col">
                                            <h5>Программа лояльности</h5>
                                            <p>И реферальные программы. Как получить скидку?</p>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>   
                <div className="col-md-6">
                    <div className="card-additions mb-4 transition-scale">
                        <a href="" className="hover-additions">
                            <div className="card-additions-body">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-3 d-none d-lg-block">
                                            <div className="card-additions-icon">
                                                <i className="material-icons md-100">&#xe0e0;</i>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <h5>Блог</h5>
                                            <p>Сообщество студентов, профессионалов и работодателей</p>
                                        </div> 
                                    </div>
                                </div>                                
                            </div>
                        </a>
                    </div>
                    <div className="card-additions mb-4 transition-scale">
                        <a href="" className="hover-additions">
                            <div className="card-additions-body">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-3 d-none d-lg-block">
                                            <div className="card-additions-icon">
                                                <i className="material-icons md-100">&#xe912;</i>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <h5>Мероприятия</h5>
                                            <p>Задайте вопрос преподователю, примите участие в розыгрыше </p>
                                        </div> 
                                    </div>                               
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
  }
}

export default Additions;