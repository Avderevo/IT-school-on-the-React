import { schoolConstants } from '../_constants';


export function courseCard(state = [], action) {
    switch (action.type) {
        case schoolConstants.GETCOURSECARD_REQUEST:
            return {
                loading: true
            };
        case schoolConstants.GETCOURSECARD_SUCCESS:
            return {
                items: action.courseCards
            };
        case schoolConstants.GETCOURSECARD_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}

export function teachers(state = [], action) {
    switch (action.type) {
        case schoolConstants.GETTEACHERS_REQUEST:
            return {
                loading: true
            };
        case schoolConstants.GETTEACHERS_SUCCESS:
            return {
                items: action.teachers
            };
        case schoolConstants.GETTEACHERS_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}


export function additionsData(state = [], action) {
    switch (action.type) {
        case schoolConstants.GETADDITIONS_DATA_REQUEST:
            return {
                loading: true
            };
        case schoolConstants.GETADDITIONS_DATA_SUCCESS:
            return {
                items: action.additionsData
            };
        case schoolConstants.GETADDITIONS_DATA_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}


export function allCourses(state = [], action) {
    switch (action.type) {
        case schoolConstants.GET_ALL_COURSES_REQUEST:
            return {
                loading: true
            };
        case schoolConstants.GET_ALL_COURSES_SUCCESS:
            return {
                items: action.allCourses
            };
        case schoolConstants.GET_ALL_COURSES_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}


