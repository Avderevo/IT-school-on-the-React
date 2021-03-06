import React, {Component} from 'react';
import {studyService} from "../../_services";
import {withRouter} from 'react-router-dom';
import {studyAction} from "../../_actions";
import connect from "react-redux/es/connect/connect";


class TestCourse extends Component{
    constructor(props){
        super(props);
        this.state = {
            testResult: false

        }
    }

    handleOptionChange =(e)=>{
        this.setState({
            testResult: e.target.value
        });
    };


    handleFormSubmit=(e)=>{
        e.preventDefault();
        const { dispatch } = this.props;
        const courseId = this.props.location.state.courseId;

        dispatch(studyAction.courseTestSend(this.state, courseId));

    };


    render(){

        return(
            <section id="testpage">
                <div className="container">
                    <div className="wrap-heading">
                        <h1>
                            Ответьте на вопрос и нажмите отправить.
                        </h1>
                    </div>
                    <div>
                        <h3>Сколько будет 2х2 ?</h3>
                    </div>
                    <form >
                        <div className="form-check">
                            <input className="form-check-input"  type="radio" value="Марковка" checked={this.state.testResult ==="Марковка"}
                                   onChange={this.handleOptionChange} />
                                <label className="form-check-label" >
                                    Марковка
                                </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="4" checked={this.state.testResult === "4"}
                                   onChange={this.handleOptionChange} />
                                <label className="form-check-label" >
                                    4
                                </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="Треугольник" checked={this.state.testResult === "Треугольник"}
                                   onChange={this.handleOptionChange}/>
                                <label className="form-check-label" >
                                    Треугольник
                                </label>
                        </div>
                        <button className="btn btn-success mt-3" type="submit" onClick={this.handleFormSubmit}>Отправить</button>
                    </form>
                </div>
            </section>
        )
    }

}


function mapStateToProps(state) {


    return {
        state
    };
}

const connectedTestCourse= withRouter(connect(mapStateToProps)(TestCourse));
export { connectedTestCourse as TestCourse };

