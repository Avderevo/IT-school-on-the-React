import React  from 'react';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux';
import {TeacherRoomOneUserHeader} from './TeacherRoomOneUserHeader';
import {TeacherRoomOneUserLessons} from "./TeacherRoomOneUserLessons";


class TeacherRoomOneUserPage extends React.Component {




    render(){


        return(
            <div>
                <TeacherRoomOneUserHeader/>
                <TeacherRoomOneUserLessons/>
            </div>

        )
    }
}

export default TeacherRoomOneUserPage;