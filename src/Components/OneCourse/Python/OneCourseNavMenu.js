import React, { Component } from 'react';
import { Link } from 'react-router-dom'



class OneCourseNavMenu extends Component{


    render() {

        return (
            <section id="nav-menu">
                <div className="nav-menu">
                    <div className="bg-Python">
                        <div id="menu" className=" bg-Python nav-items-course">
                            <div className="container">
                                <Link className="nav-item-menu nav-menu-link active" to="#">О курсе</Link>
                                <Link className="nav-item-menu nav-menu-link" to="#">Процес обучения</Link>
                                <Link className="nav-item-menu nav-menu-link" to="#">После обучения</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default OneCourseNavMenu;