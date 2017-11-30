import {
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR,
    FETCH_PROTECTED_DATA_REQUEST,
    FETCH_USERLIST_ERROR,
    FETCH_USERLIST_REQUEST,
    FETCH_USERLIST_SUCCESS,
    FETCH_ADD_ITEM_SUCCESS
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
        console.log('Protected-Data.js', action.data)
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
    // } if (action.type === FETCH_ADD_ITEM_SUCCESS) {
    //     console.log('ACTION+++++++++',action.data);
        // return Object.assign({}, state, {
        //     currentUser: Object.assign({}, state.currentUser, {
        //     wishList: [...state.currentUser.wishList, action.itemId]
        //     })
        // });
    }
  
    return state;
}


// export function reducer(state = initialState, action) {
    
//     return state;
// }