// Additions.js
import React, { Component } from 'react';


class LkNavbar extends Component{
    render() {

        return (
            <section id="floatNavbar ">
                <div className="nav__scroll">
                    <div className="floatNavbar-block">
                        <div className="floatNavbar-bg">
                            <div id="float-nav" className="floatNavbar-bg floatNavbar-items">
                                <div className="container">
                                    <a className="floatNavbar-item floatNavbar-link" href="#">О курсе</a>
                                    <a className="floatNavbar-item floatNavbar-link" href="#">Процес обучения</a>
                                    <a className="floatNavbar-item floatNavbar-link" href="#">После обучения</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default LkNavbar;