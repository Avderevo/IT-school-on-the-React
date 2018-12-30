import {studyConstants, userConstants, chatConstants} from '../_constants';
import {studyService} from '../_services';
import { alertActions } from './';
import {history} from "../_helpers";


export const studyAction = {
    getStudyRoom,
    getUserCourseList,
    getOneCourse,
    getAllStudents,
    getStudentStatistics

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

    function request() { return { type: studyConstants.GETLESSONS_REQUEST }}
    function success(lessons) { return { type: studyConstants.GETLESSONS_SUCCESS, lessons }}
    function failure(error) { return { type: studyConstants.GETLESSONS_FAILURE, error }}
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

    function request() { return { type: studyConstants.GET_USER_COURSES_REQUEST }}
    function success(userCourses) { return { type: studyConstants.GET_USER_COURSES_SUCCESS, userCourses }}
    function failure(error) { return { type: studyConstants.GET_USER_COURSES_FAILURE, error }}
}


function getOneCourse(name) {
    return dispatch => {
        dispatch(request());

        studyService.getOneCourse(name)
            .then(
                oneCourse => dispatch(success(oneCourse)),
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error))
                }
            );
    };

    function request() { return { type: studyConstants.GETONECOURSE_REQUEST }}
    function success(oneCourse) { return { type: studyConstants.GETONECOURSE_SUCCESS, oneCourse }}
    function failure(error) { return { type: studyConstants.GETONECOURSE_FAILURE, error }}
}


function getAllStudents(id) {
    return dispatch => {
        dispatch(request());

        studyService.getAllStudents(id)
            .then(
                allStudents => dispatch(success(allStudents)),
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error))
                }
            );
    };

    function request() { return { type: studyConstants.GETALLSTUDENTS_REQUEST }}
    function success(allStudents) { return { type: studyConstants.GETALLSTUDENTS_SUCCESS, allStudents }}
    function failure(error) { return { type: studyConstants.GETALLSTUDENTS_FAILURE, error }}
}



function getStudentStatistics(userId, courseId) {
    return dispatch => {
        dispatch(request());

        studyService.getStudentStatistics(userId, courseId)
            .then(
                studentStatistics => dispatch(success(studentStatistics)),
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error))
                }
            );
    };

    function request() { return { type: studyConstants.GET_STUDENTS_STATISTICS_REQUEST }}
    function success(studentStatistics) { return { type: studyConstants.GET_STUDENTS_STATISTICS_SUCCESS, studentStatistics }}
    function failure(error) { return { type: studyConstants.GET_STUDENTS_STATISTICS_FAILURE, error }}
}