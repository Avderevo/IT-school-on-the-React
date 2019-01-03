import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { users, detailUser } from './users.reducer';
import { alert } from './alert.reducer';
import { lessons, userCourses, oneCourse, allStudents, studentStatistics, teacherCourses, oneCourseStatistic } from "./study.reducer";
import {chatMessage, lessonMessage} from "./chat.reducer";
import {openModal} from './modal.reducer';
import {coursecard, teachers, additionsData} from  './school.reducer';

const rootReducer = combineReducers({
    authentication,
    users,
    alert,
    lessons,
    chatMessage,
    openModal,
    coursecard,
    teachers,
    additionsData,
    userCourses,
    lessonMessage,
    oneCourse,
    allStudents,
    detailUser,
    studentStatistics,
    teacherCourses,
    oneCourseStatistic

});

export default rootReducer;