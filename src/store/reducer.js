const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INC_COUNTER':
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState
        case 'DEC_COUNTER':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'ADD_COUNTER':
            return {
                ...state,
                counter: state.counter + action.val
            }
        case 'SUB_COUNTER':
            return {
                ...state,
                counter: state.counter - action.val
            }
        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            }
        case 'DELETE_RESULT':
                return {
                    ...state,
                    results: state.results.filter(result => result.id !== action.id)
                }
        default:
            return state;
    }
}

export default reducer;