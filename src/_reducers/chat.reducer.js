import {chatConstants, studyConstants} from '../_constants';

export function chatMessage(state = {}, action) {
    switch (action.type) {
        case chatConstants.SENDMESSAGE_REQUEST:
            return {
                sending: true
            };
        case chatConstants.SENDMESSAGE_SUCCESS:
            return {
                items: action.chatMessage
            };
        case chatConstants.SENDMESSAGE_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}


export function lessonMessage(state = [], action) {
    switch (action.type) {
        case chatConstants.GETMESSAGE_REQUEST:
            return {
                loading: true
            };
        case chatConstants.GETMESSAGE_SUCCESS:
            return {
                items: action.lessonMessage
            };
        case chatConstants.GETMESSAGE_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}
