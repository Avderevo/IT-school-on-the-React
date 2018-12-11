import { modalConstants} from '../_constants';



const initialState = {
    click: false,
};

export function openModal(state = initialState, action){
    switch(action.type) {
        case modalConstants.OPEN:
            return {
                state,
                click: !state.click,
            };
       /* case modalConstants.CLOSE:
            return{
                state
            };
*/
        default:
            return state

    }
};

