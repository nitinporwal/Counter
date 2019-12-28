import * as actionType from './actions';

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionType.INCREMENT:
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState
        case actionType.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionType.ADD:
            return {
                ...state,
                counter: state.counter + action.val
            }
        case actionType.SUBRACT:
            return {
                ...state,
                counter: state.counter - action.val
            }
        case actionType.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
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