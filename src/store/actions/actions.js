export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD = "ADD";
export const SUBRACT = "SUBTRACT";
export const STORE_RESULT = "STORE_RESULT";
export const DELETE_RESULT = "DELETE_RESULT";

export const increment = () => {
    return {
        type: INCREMENT
    };
};
export const decrement = () => {
    return {
        type: DECREMENT
    };
};
export const add = (val) => {
    return {
        type: ADD,
        val: val
    };
};
export const subtract = (val) => {
    return {
        type: SUBRACT,
        val: val
    };
};

export const savedResult = (result) => {
    return {
        type: STORE_RESULT,
        result: result
    };
}
export const storeResult = (result) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(savedResult(result));
        }, 2000);
    }
};
export const deleteResult = (id) => {
    return {
        type: DELETE_RESULT,
        id: id
    };
};