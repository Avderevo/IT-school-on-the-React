import { Switch, Route} from 'react-router-dom';
import LoginPage from './LoginPage/LoginPage';
import RegisterPage from './RegisterPage/RegisterPage';
import StudyRoomPage from './StudyRoom/StudyRoomPage';
import {UserCourseList} from './UserCourseList/UserCourseList';
import Home from './HomePage/Home';
import {TestCourse} from './TestPage/TestCourse';
import React from 'react';
import { PrivateRoute } from '../_components';

import AllCoursePage from './AllCourses/AllCoursePage';
import WebPythonCoursePage from './OneCourse/Web-python/WebPythonCoursePage';
import PythonCoursePage from './OneCourse/Python/PythonCoursePage';
import JavaCoursePage from './OneCourse/Java/JavaCoursePage';
import JsCoursePage from './OneCourse/Js/JsCoursePage';
import AndroidCoursePage from './OneCourse/Android/AndroidCoursePage';
import PhpCoursePage from './OneCourse/Php/PhpCoursePage';
import CPlusPlusCoursePage from './OneCourse/CPlusPlus/CPlusPlusCoursePage';

import {CourseStudentListPage} from './TeacherRoom/CourseStudentList/StudentListPage';
import TeacherRoomOneUserPage from './TeacherRoom/TeacherRoomOneUser/TeacherRoomOneUserPage';
import {TeacherCourseListPage} from './TeacherRoom/TeacherCoursesList/TaecherCoursesPage';
import HelloPage from './Common/HelloPage';




const Main = () => (
            <main className="main-main">
                <Switch>
                    <PrivateRoute path="/studyroom/:id" component={StudyRoomPage}/>
                    <PrivateRoute path='/study/' component={UserCourseList}/>
                    <PrivateRoute path='/test/:course/' component={TestCourse}/>


                    <PrivateRoute path='/teachers-room/courses/' component={TeacherCourseListPage}/>
                    <PrivateRoute path='/teachers-room/user/:id' component={TeacherRoomOneUserPage}/>
                    <PrivateRoute path='/teachers-room/course/:id' component={CourseStudentListPage}/>



                    <Route path='/course/Web-python/' component={WebPythonCoursePage} />
                    <Route path='/course/Python/' component={PythonCoursePage} />
                    <Route path='/course/Php/' component={PhpCoursePage} />
                    <Route path='/course/JS/' component={JsCoursePage} />
                    <Route path='/course/Java/' component={JavaCoursePage} />
                    <Route path='/course/Android/' component={AndroidCoursePage} />
                    <Route path='/course/C-plus-plus/' component={CPlusPlusCoursePage} />
*/}
                    <Route path='/hello-page/' component={HelloPage} />

                    <Route path='/signup/' component={RegisterPage}/>
                    <Route path='/all_courses/' component={AllCoursePage}/>
                    <Route path='/login/' component={LoginPage}/>
                    <Route path='/' component={Home} />


                </Switch>

            </main>
);

export default Main;