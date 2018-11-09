// Navbar.js
import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      
            <header id="header-1" className="navbar-wrap">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container">
                        <a className="navbar-brand" href="index.html">Navbar</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-item nav-link" href="all_curses.html">Курсы<span class="sr-only">(current)</span></a>
                                <a className="nav-item nav-link" href="calendar.html">Расписание</a>
                                <a className="nav-item nav-link" href="#">Обучение</a>
                                <a className="nav-item nav-link" href="#">Работа в компаниях</a>
                                <a className="nav-item nav-link" href="#">Компаниям</a>
                                <a className="nav-item nav-link" href="#">Блог</a>

                                <div className="icon-nav">
                                    <div className="nav-item dropdown">

                                       <button className="nav-item btn btn-outline-success" href="#" data-toggle="modal" data-target="#modalLRForm">вход или регистрация</button>

                                       

                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item" href="#">Мои курсы</a>
                                            <a className="dropdown-item" href="#">Личный кабинет</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Выход</a>
                                        </div>
                                    </div>    
                                </div>        
                            </div>
                        </div>          
                    </div>  
                </nav>
            </header>
      
    );
  }
}

export default Navbar;