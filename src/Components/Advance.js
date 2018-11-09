// Advance.js
import React, { Component } from 'react';

class Advance extends Component {
  render() {
    return (
      <section id='advance' className="section-advance">
        <div className="container">
            <div className="advance-section-title">
                <h4>Успеть на ближайшие курсы </h4>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card curses-card gradient-1 shadow curses-card-hover"> 
                        <a href="one_course.html">                
                            <div className="card-body">
                                <h3>Администратор</h3>
                                <h3> Linux</h3>
                                <hr className="heading-devider float-left " /><br /> 
                                <div><h6> C октября 5 месяцев</h6></div>    
                            </div>
                        </a>
                    </div>
                    <span className="meta-2">Успеть!</span>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">                   
                    <div className="card curses-card gradient-2 shadow">
                        <a href="">
                            <div className="card-body">
                                <h3>Разработчик</h3>
                                <h3>Python</h3>
                                <hr className="heading-devider float-left" /><br /> 
                                <div><h6> C октября 5 месяцев</h6></div>    
                            </div>
                        </a>
                    </div>
                    <span className="meta-2">Успеть!</span>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card curses-card gradient-3 shadow">
                        <a href="">
                            <div className="card-body">
                                <h3>Разработчик</h3>
                                <h3>PHP</h3>
                                <hr className="heading-devider float-left" /><br /> 
                                <div><h6> C октября 5 месяцев</h6></div>    
                            </div>
                        </a> 
                    </div>
                    <span className="meta-2 invisible">Успеть!</span>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">                
                    <div className="card curses-card gradient-4 shadow">
                        <a href=""> 
                            <div className="card-body child">
                                <h3>Администратор</h3>
                                <h3> Linux</h3>
                                <hr className="heading-devider float-left" /><br /> 
                                <div><h6> C октября 5 месяцев</h6></div>    
                            </div>
                        </a>                                               
                    </div>
                    <span className="meta-2 ">Успеть!</span>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">                   
                    <div className="card curses-card gradient-5 shadow">
                        <a href="">
                            <div className="card-body">
                                <h3>DevOps</h3>
                                <h3>Инжинер</h3>
                                <hr className="heading-devider float-left" /><br /> 
                                <div><h6> C октября 5 месяцев</h6></div>    
                            </div>
                        </a>    
                    </div>
                    <span className="meta-2">Успеть!</span>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card curses-card gradient-6 shadow">
                        <a href="">
                            <div className="card-body">
                                <h3>Разработчик</h3>
                                <h3>PHP</h3>
                                <hr className="heading-devider float-left" /><br /> 
                                <div><h6> C октября 5 месяцев</h6></div>    
                            </div>
                        </a>     
                    </div>
                    <span className="meta-2 invisible">Успеть!</span>
                </div>
            </div>
        </div>
    </section>
    );
  }
}

export default Advance;