import { Switch, Route} from 'react-router-dom';
import LoginPage from './LoginPage/LoginPage';
import RegisterPage from './RegisterPage/RegisterPage';
import StudyRoomPage from './StudyRoom/StudyRoomPage';
import Home from './HomePage/Home';
import React from 'react';
import { Router } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';


const Main = () => (
    <main>
        <Switch history={history}>
            <Route path="/studyroom/" component ={StudyRoomPage} />
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
