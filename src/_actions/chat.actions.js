import { chatConstants  } from '../_constants';
import { chatService } from '../_services';
import { alertActions } from './';


export const chatAction = {
    getAllHomework,

};

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


