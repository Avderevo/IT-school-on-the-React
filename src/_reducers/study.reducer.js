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


export function oneCourseStatistic(state = {}, action) {
    switch (action.type) {
        case studyConstants.GET_ONE_COURSE_STATISTIC_REQUEST:
            return {
                loading: true
            };
        case studyConstants.GET_ONE_COURSE_STATISTIC_SUCCESS:
            return {
                items: action.oneCourseStatistic
            };
        case studyConstants.GET_ONE_COURSE_STATISTIC_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}

export function registerTeacher(state = {}, action) {
    switch (action.type) {
        case studyConstants.REG_TEACHER_ON_COURSE_REQUEST:
            return {
                sending: true
            };
        case studyConstants.REG_TEACHER_ON_COURSE_SUCCESS:
            return {
                register: action.registerTeacher
            };
        case studyConstants.REG_TEACHER_ON_COURSE_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}


export function testSend(state = {}, action) {
    switch (action.type) {
        case studyConstants.TEST_COURSE_SEND_REQUEST:
            return {
                sending: true
            };
        case studyConstants.TEST_COURSE_SEND_SUCCESS:
            return {
                register: action.testSend
            };
        case studyConstants.TEST_COURSE_SEND_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}
