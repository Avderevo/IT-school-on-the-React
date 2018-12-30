import React, { Component } from 'react';
import {OneCoursePageHeader} from './OneCoursePageHeader';
import OneCourseNavMenu from './OneCourseNavMenu';
import OneCourseDescription from './OneCourseDescription';
import OneCourseAdditions from './OneCourseAdditions';
import OneCourseTeachers from './OneCourseTeachers';
import OneCoursePrice from './OneCoursePrice';
import {schoolAction} from "../../../_actions";
import connect from "react-redux/es/connect/connect";



class JavaCoursePage extends Component {

/*

    componentDidMount() {
        this.props.dispatch(schoolAction.getOneCourse());
    }
*/



    render() {

        return (
            <div>
                <OneCoursePageHeader/>
                <OneCourseNavMenu/>
                <OneCourseDescription/>
                <OneCourseAdditions/>
                <OneCourseTeachers/>
                <OneCoursePrice/>
            </div>



        )
    }
}

export default JavaCoursePage;
/*

function mapStateToProps(state) {
    const {additionsData} = state;
    return {
        additionsData
    }

}

const connectedAdditions = connect(mapStateToProps)(Additions);
export {connectedAdditions as Additions};

*/
