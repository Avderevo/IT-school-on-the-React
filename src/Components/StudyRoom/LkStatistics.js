import React from 'react';


const LkStatistics = () => {




    return(
        <section id="lk-statistics">
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <div className="lk-statistics-headline">Всего домашних заданий</div>
                        <div className="lk-statistics-item">{}</div>
                    </div>
                    <div className="col-md-2">
                        <div className="lk-statistics-headline">Выполнено домашних заданий</div>
                        <div className="lk-statistics-item">{}</div>
                    </div>

                </div>
            </div>
        </section>

    )
};


export default LkStatistics;