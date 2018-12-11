import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { lessons } from "./study.reducer";
import {homeworks} from "./chat.reducer";
import {openModal} from './modal.reducer';

const rootReducer = combineReducers({
    authentication,
    users,
    alert,
    lessons,
    homeworks,
    openModal,
});

export default rootReducer;