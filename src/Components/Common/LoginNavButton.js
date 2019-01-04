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

        if (this.props.authentication.loggedIn) {
            return (

                <div className="icon-nav">

                    <div className="nav-item dropdown">
                        <a className="dropdown" href="#" id="navbarDropdown" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i
                            className="material-icons md-36">person_pin</i>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">


                            {this.props.authentication.user.user.profile.status === 2 &&
                                <span>
                                    <Link className="dropdown-item" to="/teachers-room/courses/">Учительская</Link>
                                </span>

                           }
                            {this.props.authentication.user.user.profile.status === 1 &&
                                <span>
                                    <Link className="dropdown-item" to="/study/">Личный кабинет</Link>
                                </span>
                               }

                            <div className="dropdown-divider"> </div>
                            <Link className="dropdown-item" to="/logout/" onClick={this.logOut}>Выход</Link>
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
    const authentication = state.authentication;
    return {
        authentication
    };
}

const connectedLoginNavButton = connect(mapStateToProps)(LoginNavButton);
export { connectedLoginNavButton as LoginNavButton };
