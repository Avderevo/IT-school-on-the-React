import React  from 'react';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux';
import { userActions } from '../../_actions';

class LoginNavButton extends React.Component {

    logOut=(event) => {
        event.preventDefault();
        this.props.dispatch(userActions.logout())
    };

    render() {
        if (this.props.loggedIn) {
            return (

                <div className="icon-nav">

                    <div className="nav-item dropdown">
                        <a className="dropdown" href="#" id="navbarDropdown" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i
                            className="material-icons md-36">person_pin</i>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="#">Мои курсы</Link>
                            <Link className="dropdown-item" to="/study/">Личный кабинет</Link>
                            <div className="dropdown-divider"> </div>
                            <a className="dropdown-item" href="/logout" onClick={this.logOut}>Выход</a>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <Link className="nav-item btn btn-outline-success" to="/login/">вход или регистрация</Link>

            );
        }
    }
}


function mapStateToProps(state) {
    const { loggedIn } = state.authentication;
    return {
        loggedIn
    };
}

const connectedLoginNavButton = connect(mapStateToProps)(LoginNavButton);
export { connectedLoginNavButton as LoginNavButton };
