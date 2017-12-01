import { SET_AUTH_TOKEN, SET_CURRENT_USER } from '../actions/auth';
import { FETCH_ADD_ITEM_SUCCESS, DELETE_WISHLIST_ITEM } from '../actions/protected-data';

const initialState = {
    authToken: null, // authToken !== null does not mean it has been validated
    currentUser: null,
};

export default function reducer(state = initialState, action) {
    if (action.type === SET_AUTH_TOKEN) {
        return Object.assign({}, state, {
            authToken: action.authToken
        });
    } else if (action.type === SET_CURRENT_USER) {
        return Object.assign({}, state, {
            currentUser: action.currentUser
        });
    } else if (action.type === DELETE_WISHLIST_ITEM) {
        return Object.assign({}, state, {
            currentUser: Object.assign({}, state.currentUser, {
                wishList: state.currentUser.wishList.filter(item => item !== action.itemId)
                })
        });
    } else if (action.type === FETCH_ADD_ITEM_SUCCESS) {
        console.log(action);
        return Object.assign({}, state, {
            currentUser: Object.assign({}, state.currentUser, {
            wishList: [...state.currentUser.wishList, action.itemId]
            })
        });
    }
    return state;
}
