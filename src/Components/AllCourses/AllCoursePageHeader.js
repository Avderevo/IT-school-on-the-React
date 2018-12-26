import React from 'react'

const AllCoursePageHeader =()=>{
    return(
        <section id="curses-choice-section" className="all_curses_header">
            <div className="container">
                <div className="all-curses-title text-center">
                    <h2 className=" display-2">Онлайн-курсы</h2>
                </div>
                <div>
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <button className="btn btn-curses-choice mt-3 active " href="all_curses.html">Основные
                                курсы
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-curses-choice mt-3" href="#">Программы подготовки</button>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-curses-choice mt-3" href="#">Курсы в разработке</button>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
};

export default AllCoursePageHeader;