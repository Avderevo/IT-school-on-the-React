import { studyConstants  } from '../_constants';
import { studyService } from '../_services';
import { alertActions } from './';


export const studyAction = {
    getStudyRoom,

};

function getStudyRoom() {
    return dispatch => {
        dispatch(request());

        studyService.getAllLesson()
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


