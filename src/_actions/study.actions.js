import {studyConstants, userConstants} from '../_constants';
import {studyService} from '../_services';
import { alertActions } from './';
import {history} from "../_helpers";


export const studyAction = {
    getStudyRoom,
    getUserCourseList

};

function getStudyRoom(id) {
    return dispatch => {
        dispatch(request());

        studyService.getAllLesson(id)
            .then(
                lessons => dispatch(success(lessons)),
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error))
                }
            );
    };

    function request() { return { type: studyConstants.GETLESSONS_REQUEST } }
    function success(lessons) { return { type: studyConstants.GETLESSONS_SUCCESS, lessons } }
    function failure(error) { return { type: studyConstants.GETLESSONS_FAILURE, error } }
}


function chatMessageSend(message) {
    return dispatch => {
        dispatch(request({ message }));

        studyService.sendMessage(message)
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

function getUserCourseList() {
    return dispatch => {
        dispatch(request());

        studyService.getUserCourseList()
            .then(
                userCourses => dispatch(success(userCourses)),
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error))
                }
            );
    };

    function request() { return { type: studyConstants.GET_USER_COURSES_REQUEST } }
    function success(userCourses) { return { type: studyConstants.GET_USER_COURSES_SUCCESS, userCourses } }
    function failure(error) { return { type: studyConstants.GET_USER_COURSES_FAILURE, error } }
}