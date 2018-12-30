import { authHeader, history } from '../_helpers';



export const studyService = {
    getAllLesson,
    courseTestSend,
    getUserCourseList,
    getOneCourse,
    getAllStudents,
    getStudentStatistics
};



function getAllLesson(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch('http://localhost:8000/study/studyroom/'+id+'/', requestOptions).then(handleResponse);
}


function courseTestSend(testResult, name) {
    const requestOptions = {
        method: 'POST',
        headers: {...authHeader(), 'Content-Type': 'application/json'},
        body: JSON.stringify({testResult})
    };

    return fetch('http://localhost:8000/study/course_test/'+name+'/', requestOptions)
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


function getOneCourse(name) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch('http://localhost:8000/study/one_course/'+name+'/', requestOptions)
        .then(handleResponse);



}


function getAllStudents(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch('http://localhost:8000/study/all_students/'+id+'/', requestOptions)
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

