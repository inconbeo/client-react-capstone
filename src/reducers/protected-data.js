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
  loading: false,
  dashboardData: []
};

export default function protectedReducer(state = initialState, action) {
  if (action.type === FETCH_PROTECTED_DATA_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    });
  }
  if (action.type === FETCH_PROTECTED_DATA_SUCCESS) {
    return Object.assign({}, state, {
      data: action.data,
      error: null,
      loading: false
    });
  }
  if (action.type === FETCH_PROTECTED_DATA_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  }
  if (action.type === FETCH_USERLIST_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    });
  }

  if (action.type === FETCH_USERLIST_SUCCESS) {
    return Object.assign({}, state, {
      dashboardData: action.data,
      error: null,
      loading: false
    });
  }
  if (action.type === FETCH_USERLIST_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  }
  if (action.type === 'DELETE_WISHLIST_ITEM') {
    return {
      ...state,
      dashboardData: state.dashboardData.filter(i => i.itemId !== action.itemId)
    };
  }
  if (action.type === 'ADD_ITEM_TO_WISHLIST') {
      return {
          ...state,
          dashboardData: [...state.dashboardData, action.item]
      }
  }

  return state;
}

// export function reducer(state = initialState, action) {

//     return state;
// }
