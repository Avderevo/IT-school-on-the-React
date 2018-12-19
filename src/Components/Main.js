import { Switch, Route} from 'react-router-dom';
import LoginPage from './LoginPage/LoginPage';
import RegisterPage from './RegisterPage/RegisterPage';
import StudyRoomPage from './StudyRoom/StudyRoomPage';
import {UserCourseList} from './UserCourseList/UserCourseList';
import Home from './HomePage/Home';
import TestPage from './TestPage/TestPage';
import React, {Component} from 'react';
import { PrivateRoute } from '../_components';
import { history } from '../_helpers';
import {StudyChatModal} from './StudyChat/StudyChatModal';



const Main = () => (
            <main className="main-main">
                <Switch history={history}>
                    <PrivateRoute path='/test/' component={TestPage}/>
                    <PrivateRoute path="/studyroom/:id/" component={StudyRoomPage}/>
                    <PrivateRoute path='/study/' component={UserCourseList}/>

                        <Route path="/studyroom/:id/chat/:lessonId/" component={StudyChatModal}/>


                    <Route exact path='/signup/' component={RegisterPage}/>
                    <Route path='/login/' component={LoginPage}/>
                    <Route path='/' component={Home}/>


                </Switch>

            </main>
);

export default Main;