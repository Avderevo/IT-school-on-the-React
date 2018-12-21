import { authHeader } from '../_helpers';


export const chatService = {
    sendMessage,
    getMessage
};



function sendMessage(chatMessage) {
    const requestOptions = {
        method: 'POST',
        headers: {...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(chatMessage)
    };

    return fetch('http://localhost:8000/study/create_message/',  requestOptions).then(handleResponse);
}


function getMessage(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch('http://localhost:8000/study/chat_message/'+id+'/', requestOptions)
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
