import {
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR,
    FETCH_PROTECTED_DATA_REQUEST,
    FETCH_USERLIST_ERROR,
    FETCH_USERLIST_REQUEST,
    FETCH_USERLIST_SUCCESS,
    DELETE_WISHLIST_ITEM
} from '../actions/protected-data';

const initialState = {
    data: [],
    error: null,
    loading: false
};

export default function protectedReducer(state = initialState, action) {
    
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
    }if (action.type === FETCH_PROTECTED_DATA_ERROR) {
        return Object.assign({}, state, {
            error: action.error,
            loading: false
        });
    }
    if (action.type === FETCH_USERLIST_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        })
    }
    if (action.type === FETCH_USERLIST_SUCCESS) {
        console.log(action.data)
        return Object.assign({}, state, {
            data: action.data,
            error: null,
            loading: false
        });
    } if (action.type === FETCH_USERLIST_ERROR) {
        return Object.assign({}, state, {
            error: action.error,
            loading: false
        });
    } if (action.type === DELETE_WISHLIST_ITEM) {
        return Object.assign({}, state, {
            data: action.data,
            loading: false
        });
    }
    return state;
}


// export function reducer(state = initialState, action) {
    
//     return state;
// }