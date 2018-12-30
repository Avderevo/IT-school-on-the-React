import { userConstants } from '../_constants';

export function users(state = {}, action) {
    switch (action.type) {
        case userConstants.GETALL_REQUEST:
            return {
                loading: true
            };
        case userConstants.GETALL_SUCCESS:
            return {
                items: action.users
            };
        case userConstants.GETALL_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}



export function detailUser(state = {}, action) {
    switch (action.type) {
        case userConstants.GET_DETAILUSER_REQUEST:
            return {
                loading: true
            };
        case userConstants.GET_DETAILUSER_SUCCESS:
            return {
                items: action.detailUser
            };
        case userConstants.GET_DETAILUSER_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}

