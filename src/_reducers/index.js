import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { lessons, userCourses } from "./study.reducer";
import {homeworks} from "./chat.reducer";
import {openModal} from './modal.reducer';
import {coursecard, teachers, additionsData} from  './school.reducer';

const rootReducer = combineReducers({
    authentication,
    users,
    alert,
    lessons,
    homeworks,
    openModal,
    coursecard,
    teachers,
    additionsData,
    userCourses

});

export default rootReducer;