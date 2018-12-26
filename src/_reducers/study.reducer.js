import { studyConstants } from '../_constants';

export function lessons(state = [], action) {
    switch (action.type) {
        case studyConstants.GETLESSONS_REQUEST:
            return {
                loading: true
            };
        case studyConstants.GETLESSONS_SUCCESS:
            return {
                items: action.lessons
            };
        case studyConstants.GETLESSONS_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}

export function userCourses(state = [], action) {
    switch (action.type) {
        case studyConstants.GET_USER_COURSES_REQUEST:
            return {
                loading: true
            };
        case studyConstants.GET_USER_COURSES_SUCCESS:
            return {
                items: action.userCourses
            };
        case studyConstants.GET_USER_COURSES_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}


export function oneCourse(state = {}, action) {
    switch (action.type) {
        case studyConstants.GETONECOURSE_REQUEST:
            return {
                loading: true
            };
        case studyConstants.GETONECOURSE_SUCCESS:
            return {
                items: action.oneCourse
            };
        case studyConstants.GETONECOURSE_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}

