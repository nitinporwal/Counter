import * as actionTypes from './actionTypes';

export const savedResult = (result) => {
    // const updatedResult = result * 2;
    return {
        type: actionTypes.STORE_RESULT,
        result: result
    };
};

export const storeResult = (result) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            const oldState = getState().ctr.counter;
            console.log(oldState);
            dispatch(savedResult(result));
        }, 2000);
    }
};

export const deleteResult = (id) => {
    return {
        type: actionTypes.DELETE_RESULT,
        id: id
    };
};