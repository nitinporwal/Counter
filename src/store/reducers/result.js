import * as actionType from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    results: []
}

const deleteResult = (state, action) => {
    const updatedArray = state.results.filter(result => result.id !== action.id);
    updateObject(state, {results: updatedArray});
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionType.STORE_RESULT : return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result * 2})})
        case actionType.DELETE_RESULT : deleteResult(state, action)
                return 
        default:
            return state;
    }
}

export default reducer;