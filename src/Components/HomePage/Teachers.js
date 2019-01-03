import React, { Component } from 'react';
import Teacher from './Teacher';
import {schoolAction} from "../../_actions";
import connect from "react-redux/es/connect/connect";

class Teachers extends Component{

    componentDidMount() {
        this.props.dispatch(schoolAction.getTeachers());
    }
    render() {

    const {teachers} = this.props;
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

                            {teachers.loading && <em>Loading coursess...</em>}
                            {teachers.error &&  <span className="text-danger">ERROR: {teachers.error}</span>}
                            {teachers.items && teachers.items.Teachers.map((item, index) =>
                                <Teacher key={item.id} {...item} />
                            )}

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

function mapStateToProps(state) {
    const {teachers} = state;

    return {
        teachers
    };
}

const connectTeachers = connect(mapStateToProps)(Teachers);
export {connectTeachers as Teachers};