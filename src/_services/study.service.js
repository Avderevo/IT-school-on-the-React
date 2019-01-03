import { authHeader, history } from '../_helpers';



export const studyService = {
    getAllLesson,
    courseTestSend,
    getUserCourseList,
    getOneCourse,
    getAllStudents,
    getStudentStatistics,
    getTeacherCourses,
    changeHomeworkStatus,
    getOneCourseStatistic
};



function getAllLesson(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`http://localhost:8000/study/studyroom/${id}/`, requestOptions).then(handleResponse);
}


function courseTestSend(testResult, courseId) {
    const requestOptions = {
        method: 'POST',
        headers: {...authHeader(), 'Content-Type': 'application/json'},
        body: JSON.stringify({testResult})
    };

    return fetch(`http://localhost:8000/study/course_test/${courseId}/`, requestOptions)
        .then(function (response) {
            if (response.ok) {
                history.push('/')
            }
        });

}


function getUserCourseList() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch('http://localhost:8000/study/user_courses/', requestOptions).then(handleResponse);
}


function getOneCourse(courseId) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`http://localhost:8000/study/one_course/${courseId}/`, requestOptions)
        .then(handleResponse);



}


function getAllStudents(courseId) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`http://localhost:8000/users/all_students/${courseId}/`, requestOptions)
        .then(handleResponse);


}

function getStudentStatistics(userId, courseId) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch('http://localhost:8000/study/students_statistics/'+userId+'/'+courseId+'/', requestOptions)
        .then(handleResponse);


}


function getTeacherCourses() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`http://localhost:8000/study/teacher-courses/`, requestOptions).then(handleResponse);
}


function getOneCourseStatistic(courseId) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`http://localhost:8000/study/course_statistic/${courseId}/`, requestOptions).then(handleResponse);
}



function changeHomeworkStatus(data, statId) {
    const requestOptions = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {...authHeader(), 'Content-Type': 'application/json'}
    };

    return fetch(`http://localhost:8000/study/change_homework_status/${statId}/`, requestOptions)
        .then(handleResponse);


}






function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

