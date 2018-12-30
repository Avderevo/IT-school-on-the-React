import {schoolConstants} from '../_constants';
import {schoolService} from '../_services';
import { alertActions } from './';


export const schoolAction = {
    getCourseCard,
    getTeachers,
    getAdditionsData

};

function getCourseCard() {
    return dispatch => {
        dispatch(request());

        schoolService.getCourseCard()
            .then(
                coursecards => dispatch(success(coursecards)),
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error))
                }
            );
    };

    function request() { return { type: schoolConstants.GETCOURSECARD_REQUEST } }
    function success(coursecards) { return { type: schoolConstants.GETCOURSECARD_SUCCESS, coursecards } }
    function failure(error) { return { type: schoolConstants.GETCOURSECARD_FAILURE, error } }
}

function getTeachers() {
    return dispatch => {
        dispatch(request());
        schoolService.getTeachers()
            .then(
                teachers => dispatch(success(teachers)),
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error))
                }

            )
    };
    function request() {return{type: schoolConstants.GETTEACHERS_REQUEST}}
    function success(teachers) {return {type: schoolConstants.GETTEACHERS_SUCCESS, teachers} }
    function failure(error) {return{type: schoolConstants.GETTEACHERS_FAILURE, error}}

}

function getAdditionsData() {
    return dispatch => {
        dispatch(request());
        schoolService.getAdditionsData()
            .then(
                additionsData => dispatch(success(additionsData)),
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error))
                }

            )
    };
    function request() {return{type: schoolConstants.GETADDITIONS_DATA_REQUEST}}
    function success(additionsData) {return {type: schoolConstants.GETADDITIONS_DATA_SUCCESS, additionsData} }
    function failure(error) {return{type: schoolConstants.GETADDITIONS_DATA_FAILURE, error}}

}