import {
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR,
    FETCH_PROTECTED_DATA_REQUEST,
    FETCH_USERLIST_ERROR,
    FETCH_USERLIST_REQUEST,
    FETCH_USERLIST_SUCCESS
} from '../actions/protected-data';

const initialState = {
    data: [],
    error: null,
    loading: false
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_PROTECTED_DATA_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        })
    }
    if (action.type === FETCH_PROTECTED_DATA_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            error: null,
            loading: false
        });
    } else if (action.type === FETCH_PROTECTED_DATA_ERROR) {
        return Object.assign({}, state, {
            error: action.error,
            loading: false
        });
    }
    return state;
}


export function reducer(state = initialState, action) {
    if (action.type === FETCH_USERLIST_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        })
    }
    if (action.type === FETCH_USERLIST_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            error: null,
            loading: false
        });
    } else if (action.type === FETCH_USERLIST_ERROR) {
        return Object.assign({}, state, {
            error: action.error,
            loading: false
        });
    }
    return state;
}