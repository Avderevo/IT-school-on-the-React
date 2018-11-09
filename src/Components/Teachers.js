// Teachers.js
import React, { Component } from 'react';
import tch from "../img/tch1.jpg"


class Teachers extends Component {
  render() {
    return (
      <section id="teachers" className="section-teachers">
        <div className="container">
            <div className="teachers-title">
                <div className="row">
                    <div className="col-lg-5 col-md-7 ">
                        <a className="decor-none" href="#"><h4>Наши преподователи</h4></a>
                    </div>
                    <div className="col">    
                        <a className="btn-dark decor-none" href="#">Стать Преподователем</a>
                    </div>                        
                </div>
            </div>
            <div className="text-center">
                <div className="row">
                    <div className="col-lg-3 col-md-6 d-none d-md-block">
                        <a href=""><img className="rounded-circle mb-3 transition-scale" src={tch} alt="" width="180" height="180" /></a>
                        <h5>Джаконда</h5>
                        <p>DevOps практики и инструменты</p>
                        
                    </div>
                    <div className="col-lg-3 col-md-6 d-none d-md-block">
                        <a href=""><img className="rounded-circle mb-3 transition-scale" src={tch} alt="" width="180" height="180" /></a>
                        <h5>Александр Сергеевич</h5>
                        <p>Администратор Linux</p>
                    </div>
                    <div className="col-lg-3 col-md-6 d-none d-md-block">
                        <a href=""><img className="rounded-circle mb-3 transition-scale" src={tch} alt="" width="180" height="180" /></a>
                        <h5>Василий Иваныч</h5>
                        <p>Наш дворник</p>
                    </div>
                    <div className="col-lg-3 col-md-6 d-none d-md-block">
                        <a href=""><img className="rounded-circle mb-3 transition-scale" src={tch} alt="" width="180" height="180" /></a>
                        <h5>Арнольд</h5>
                        <p>Администратор Linux</p>
                    </div>
                </div>
            </div>
        </div>        
    </section>   
    );
  }
}

export default Teachers;