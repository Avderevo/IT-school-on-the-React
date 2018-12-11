import React, { Component } from 'react';
import LkHeader from './LkHeader';
import LkNavbar from './LkNavbar';
import LkStatistics from './LkStatistics';
import LkMonthNav from './LkMonthNavs';
import {LkLesson} from './LkLesson';
import {studyAction} from "../../_actions";
import { connect } from 'react-redux';




class StudyRoomPage extends Component{
/*

    componentDidMount() {
        this.props.dispatch(studyAction.getStudyRoom());
    }
*/



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

/*

function mapStateToProps(state) {
    const { lessons } = state;

    return {
        lessons
    };
}

const connectedStudyRoomPage = connect(mapStateToProps)(StudyRoomPage);
export { connectedStudyRoomPage as StudyRoomPage };



*/
export default StudyRoomPage;