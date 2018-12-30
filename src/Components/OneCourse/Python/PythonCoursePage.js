import React, { Component } from 'react';
import {OneCoursePageHeader} from './OneCoursePageHeader';
import OneCourseNavMenu from './OneCourseNavMenu';
import OneCourseDescription from './OneCourseDescription';
import OneCourseAdditions from './OneCourseAdditions';
import OneCourseTeachers from './OneCourseTeachers';
import OneCoursePrice from './OneCoursePrice';



class PythonCoursePage extends Component {


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

export default PythonCoursePage;