import React, { Component } from 'react';
import LkHeader from './LkHeader';
import LkNavbar from './LkNavbar';
import LkStatistics from './LkStatistics';
import LkMonthNav from './LkMonthNavs';
import {LkLesson} from './LkLesson';
import {studyAction} from "../../_actions";
import { connect } from 'react-redux';


class StudyRoomPage extends Component{

    render() {

        return (
            <div>
                <LkHeader />
                <LkNavbar />
                <LkStatistics />
                <LkMonthNav />
                <LkLesson />
            </div>


        );
    }
}

export default StudyRoomPage;