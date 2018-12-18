import { Switch, Route} from 'react-router-dom';
import LoginPage from './LoginPage/LoginPage';
import RegisterPage from './RegisterPage/RegisterPage';
import StudyRoomPage from './StudyRoom/StudyRoomPage';
import {UserCourseList} from './UserCourseList/UserCourseList';
import Home from './HomePage/Home';
import TestPage from './TestPage/TestPage';
import React from 'react';
import { PrivateRoute } from '../_components';
import { history } from '../_helpers';




const Main = () => (
    <main className="main-main">
        <Switch history={history}>
            <PrivateRoute path='/test/' component={TestPage}/>
            <PrivateRoute path="/studyroom/" component ={StudyRoomPage} />
            <PrivateRoute path='/study/' component={UserCourseList} />
            <Route exact path='/signup/' component={RegisterPage} />
            <Route path='/login/' component={LoginPage} />
            <Route path='/' component={Home} />


        </Switch>
    </main>
);

export default Main;


/*

class Main extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        {alert.message &&
                        <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>
                            <main>
                                <Switch>
                                    <Route exact path='/signup/' component={RegisterPage} />
                                    <Route path='/login/' component={LoginPage} />
                                    <Route path='/' component={Home} />
                                </Switch>
                            </main>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedMain = connect(mapStateToProps)(Main);
export { connectedMain as Main };
*/
