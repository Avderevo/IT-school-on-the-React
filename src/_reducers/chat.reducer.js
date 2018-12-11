import { chatConstants } from '../_constants';

export function homeworks(state = [], action) {
    switch (action.type) {
        case chatConstants.GETHOMEWORK_REQUEST:
            return {
                loading: true
            };
        case chatConstants.GETHOMEWORK_SUCCESS:
            return {
                items: action.homeworks
            };
        case chatConstants.GETHOMEWORK_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}

