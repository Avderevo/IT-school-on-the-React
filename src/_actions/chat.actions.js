import {chatConstants, studyConstants} from '../_constants';
import {chatService, studyService} from '../_services';
import { alertActions } from './';
import {history} from "../_helpers";


export const chatAction = {
    sendMessage,
    getMessage

};

/*
function getAllHomework() {
    return dispatch => {
        dispatch(request());

        chatService.getAllHomework()
            .then(
                homeworks => dispatch(success(homeworks)),
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error))
                }
            );
    };

    function request() { return { type: chatConstants.GETHOMEWORK_REQUEST } }
    function success(homeworks) { return { type: chatConstants.GETHOMEWORK_SUCCESS, homeworks } }
    function failure(error) { return { type: chatConstants.GETHOMEWORK_FAILURE, error } }
}

*/


function sendMessage(message) {
    return dispatch => {
        dispatch(request(message));
        chatService.sendMessage(message)
            .then(
                message => {
                    dispatch(success());
                    dispatch(alertActions.success('send Message successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(message) { return { type: chatConstants.SENDMESSAGE_REQUEST, message } }
    function success(message) { return { type: chatConstants.SENDMESSAGE_SUCCESS, message } }
    function failure(error) { return { type: chatConstants.SENDMESSAGE_FAILURE, error } }
}



function getMessage(id) {
    return dispatch => {
        dispatch(request());
        chatService.getMessage(id)
            .then(
                lessonMessage => dispatch(success(lessonMessage)),

                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(lessonMessage) { return { type: chatConstants.GETMESSAGE_REQUEST, lessonMessage } }
    function success(lessonMessage) { return { type: chatConstants.GETMESSAGE_SUCCESS, lessonMessage } }
    function failure(error) { return { type: chatConstants.GETMESSAGE_FAILURE, error } }
}

