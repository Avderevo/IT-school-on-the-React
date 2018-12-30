import { Switch, Route} from 'react-router-dom';
import LoginPage from './LoginPage/LoginPage';
import RegisterPage from './RegisterPage/RegisterPage';
import StudyRoomPage from './StudyRoom/StudyRoomPage';
import {UserCourseList} from './UserCourseList/UserCourseList';
import Home from './HomePage/Home';
import TestLinux from './TestPage/TestLinux';
import TestPython from './TestPage/TestPython';
import TestPhp from './TestPage/TestPhp';
import TestJs from './TestPage/TestJs';
import TestJava from './TestPage/TestJava';
import TestAndroid from './TestPage/TestAndroid';
import React, {Component} from 'react';
import { PrivateRoute } from '../_components';

import AllCoursePage from './AllCourses/AllCoursePage';
import LinuxCoursePage from './OneCourse/Linux/LinuxCoursePage';
import PythonCoursePage from './OneCourse/Python/PythonCoursePage';
import JavaCoursePage from './OneCourse/Java/JavaCoursePage';
import JsCoursePage from './OneCourse/Js/JsCoursePage';
import AndroidCoursePage from './OneCourse/Android/AndroidCoursePage';
import PhpCoursePage from './OneCourse/Php/PhpCoursePage';

import {StudentListPage} from './TeacherRoom/StudentListPage';
import TeacherRoomOneUserPage from './TeacherRoom/TeacherRoomOneUser/TeacherRoomOneUserPage';




const Main = () => (
            <main className="main-main">
                <Switch>
                    <PrivateRoute path="/studyroom/:id" component={StudyRoomPage}/>
                    <PrivateRoute path='/study/' component={UserCourseList}/>
                    <PrivateRoute path='/test/Linux/' component={TestLinux}/>
                    <PrivateRoute path='/test/Python/' component={TestPython}/>
                    <PrivateRoute path='/test/Java/' component={TestJava}/>
                    <PrivateRoute path='/test/Js/' component={TestJs}/>
                    <PrivateRoute path='/test/Android/' component={TestAndroid}/>
                    <PrivateRoute path='/test/Php/' component={TestPhp}/>

                    <PrivateRoute path='/teachers-room/user/:id' component={TeacherRoomOneUserPage}/>

                    <PrivateRoute path='/teachers-room/course/:id' component={StudentListPage}/>


                    <Route path='/course/Linux/' component={LinuxCoursePage} />
                    <Route path='/course/Python/' component={PythonCoursePage} />
                   {/* <Route path='/course/Php/' component={PhpCoursePage} />
                    <Route path='/course/Js/' component={JsCoursePage} />
                    <Route path='/course/Java/' component={JavaCoursePage} />
                    <Route path='/course/Android/' component={AndroidCoursePage} />
*/}

                    <Route path='/signup/' component={RegisterPage}/>
                    <Route path='/all_courses/' component={AllCoursePage}/>
                    <Route path='/login/' component={LoginPage}/>
                    <Route path='/' component={Home} />



                </Switch>

            </main>
);

export default Main;