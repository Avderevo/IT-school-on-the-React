import React from 'react';
import { Link } from 'react-router-dom'
import { LoginNavButton} from "./LoginNavButton";

const Navbar =() => {

        return (
      
            <header id="header-1" className="navbar-wrap">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container">
                        <Link className="navbar-brand" to="">Navbar</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link className="nav-item nav-link" to="/all_courses/">Курсы<span className="sr-only">(current)</span></Link>
                                <Link className="nav-item nav-link" to="calendar.html">Расписание</Link>
                                <Link className="nav-item nav-link" to="#">Обучение</Link>
                                <Link className="nav-item nav-link" to="#">Работа в компаниях</Link>
                                <Link className="nav-item nav-link" to="#">Компаниям</Link>
                                <Link className="nav-item nav-link" to="#">Блог</Link>

                                <LoginNavButton/>
                            </div>
                        </div>          
                    </div>  
                </nav>
            </header>
      
    );

};

export default Navbar;