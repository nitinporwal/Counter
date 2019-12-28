import * as actionType from '../actions/actionTypes';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionType.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result * 2})
            }
        case actionType.DELETE_RESULT:
                return {
                    ...state,
                    results: state.results.filter(result => result.id !== action.id)
                }
        default:
            return state;
    }
}

export default reducer;