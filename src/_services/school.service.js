import { authHeader } from '../_helpers';

export const schoolService = {
    getCourseCard,
    getTeachers,
    getAdditionsData
};



function getCourseCard() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch('http://localhost:3000/coursecard.json', requestOptions).then(handleResponse);
}

function getTeachers() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch('http://localhost:3000/teachers.json', requestOptions).then(handleResponse);
}


function getAdditionsData() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch('http://localhost:3000/additions.json', requestOptions).then(handleResponse);
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
