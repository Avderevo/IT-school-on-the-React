import { authHeader } from '../_helpers';



export const studyService = {
    getAllLesson,
    courseTestSend,
    getUserCourseList
};



function getAllLesson(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch('http://localhost:8000/study'+id+'/', requestOptions).then(handleResponse);
}


function courseTestSend(testResult) {
    const requestOptions = {
        method: 'POST',
        headers: {...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify({testResult})
    };

    return fetch('http://localhost:8000/study/course_test/', requestOptions).then(handleResponse);

}


function getUserCourseList() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch('http://localhost:8000/study/user_courses/', requestOptions).then(handleResponse);
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

