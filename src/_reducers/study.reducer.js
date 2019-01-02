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


export function oneCourse(state = [], action) {
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

export function allStudents(state = [], action) {
    switch (action.type) {
        case studyConstants.GETALLSTUDENTS_REQUEST:
            return {
                loading: true
            };
        case studyConstants.GETALLSTUDENTS_SUCCESS:
            return {
                items: action.allStudents
            };
        case studyConstants.GETALLSTUDENTS_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}



export function studentStatistics(state = [], action) {
    switch (action.type) {
        case studyConstants.GET_STUDENTS_STATISTICS_REQUEST:
            return {
                loading: true
            };
        case studyConstants.GET_STUDENTS_STATISTICS_SUCCESS:
            return {
                items: action.studentStatistics
            };
        case studyConstants.GET_STUDENTS_STATISTICS_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}



export function teacherCourses(state = [], action) {
    switch (action.type) {
        case studyConstants.GET_TEACHER_COURSES_REQUEST:
            return {
                loading: true
            };
        case studyConstants.GET_TEACHER_COURSES_SUCCESS:
            return {
                items: action.teacherCourses
            };
        case studyConstants.GET_TEACHER_COURSES_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}
