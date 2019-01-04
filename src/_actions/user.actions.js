import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const userActions = {
    login,
    logout,
    getDetailUser
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    history.push('/');
    return {type: userConstants.LOGOUT}
}


function getDetailUser(userId) {
    return dispatch => {
        dispatch(request());

        userService.getDetailUser(userId)
            .then(
                detailUser => dispatch(success(detailUser)),
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error))
                }
            );
    };

    function request() { return { type: userConstants.GET_DETAILUSER_REQUEST } }
    function success(detailUser) { return { type: userConstants.GET_DETAILUSER_SUCCESS, detailUser } }
    function failure(error) { return { type: userConstants.GET_DETAILUSER_FAILURE, error } }
}

