// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'
import { LoginNavButton} from "./LoginNavButton";

const Navbar =() => {

        return (
      
            <header id="header-1" className="navbar-wrap">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container">
                        <Link className="navbar-brand" to="/">Navbar</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-item nav-link" href="all_curses.html">Курсы<span className="sr-only">(current)</span></a>
                                <a className="nav-item nav-link" href="calendar.html">Расписание</a>
                                <a className="nav-item nav-link" href="#">Обучение</a>
                                <a className="nav-item nav-link" href="#">Работа в компаниях</a>
                                <a className="nav-item nav-link" href="#">Компаниям</a>
                                <a className="nav-item nav-link" href="#">Блог</a>

                                <LoginNavButton/>
                            </div>
                        </div>          
                    </div>  
                </nav>
            </header>
      
    );

};

export default Navbar;