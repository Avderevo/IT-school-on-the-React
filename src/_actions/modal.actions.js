import { modalConstants } from '../_constants';


export const modalAction = {
    openModal
};

function openModal(click) {
    return {
        type: modalConstants.OPEN, click

    };
}
