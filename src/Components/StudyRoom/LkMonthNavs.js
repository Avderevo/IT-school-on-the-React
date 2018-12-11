import React, { Component } from 'react';


class LkMonthNav extends Component{
    render() {

        return (
            <section id="lk-program-nav-month">
                <div className="container">
                    <nav className="nav nav-pills flex-column flex-sm-row">
                        <a className="flex-sm-fill text-sm-center nav-link lk-month-nav-link" href="#">1 месяц</a>
                        <a className="flex-sm-fill text-sm-center nav-link lk-month-nav-link" href="#">2 месяц</a>
                        <a className="flex-sm-fill text-sm-center nav-link lk-month-nav-link" href="#">3 месяц</a>
                        <a className="flex-sm-fill text-sm-center nav-link lk-month-nav-link" href="#">4 месяц</a>
                        <a className="flex-sm-fill text-sm-center nav-link lk-month-nav-link" href="#">5 месяц</a>
                    </nav>
                </div>
            </section>
        );
    }
}

export default LkMonthNav;

