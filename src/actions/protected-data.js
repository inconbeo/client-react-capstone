import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import {loadAuthToken} from '../local-storage'


export const FETCH_PROTECTED_DATA_REQUEST = 'FETCH_PROTECTED_DATA_REQUEST';
export const fetchProtectedDataRequest = () => ({
    type: FETCH_PROTECTED_DATA_REQUEST
});

export const FETCH_PROTECTED_DATA_SUCCESS = 'FETCH_PROTECTED_DATA_SUCCESS';
export const fetchProtectedDataSuccess = data => ({
    type: FETCH_PROTECTED_DATA_SUCCESS,
    data
});

export const FETCH_PROTECTED_DATA_ERROR = 'FETCH_PROTECTED_DATA_ERROR';
export const fetchProtectedDataError = error => ({
    type: FETCH_PROTECTED_DATA_ERROR,
    error
});

export const FETCH_USERLIST_REQUEST = 'FETCH_USERLIST_REQUEST';
export const fetchUserlistRequest = () => ({
    type: FETCH_USERLIST_REQUEST
});

export const FETCH_USERLIST_SUCCESS = 'FETCH_USERLIST_SUCCESS';
export const fetchUserlistSuccess = data => ({
    type: FETCH_USERLIST_SUCCESS,
    data
});

export const FETCH_USERLIST_ERROR = 'FETCH_USERLIST_ERROR';
export const fetchUserlistError = error => ({
    type: FETCH_USERLIST_ERROR,
    error
});

export const DELETE_WISHLIST_ITEM = 'DELETE_WISHLIST_ITEM';
export const deleteWishList = data => ({
    type: DELETE_WISHLIST_ITEM,
    data
});

export const FETCH_ADD_ITEM_SUCCESS = 'FETCH_ADD_ITEM_SUCCESS';
export const fetchAddItemSuccess = itemId => ({
    type: FETCH_ADD_ITEM_SUCCESS,
    itemId
});



// export const fetchProtectedData = () => (dispatch, getState) => {
//     const authToken = getState().auth.authToken;
//     return fetch(`${API_BASE_URL}/protected`, {
//         method: 'GET',
//         headers: {
//             // Provide our auth token as credentials
//             Authorization: `Bearer ${authToken}`
//         }
//     })
//         .then(res => normalizeResponseErrors(res))
//         .then(res => res.json())
//         .then((data) => {
//         dispatch(fetchProtectedDataSuccess(data.data))
//         console.log(data);
//         console.log(data.data)})
//         .catch(err => {
//             dispatch(fetchProtectedDataError(err));
//         });
// };

export const fetchProtectedData = () => dispatch => {
    dispatch(fetchProtectedDataRequest())
    return fetch(`https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/trends?apiKey=btbth79qwypgtfubhamzjc4u&format=json`,
    {"x-requested-with": "xhr"}
    )
    .then(response => {
      if(!response.ok){
      throw new Error(response.statusText)
      }
    return response.json()
    })
    .then(data => {
      console.log(data)
        dispatch(fetchProtectedDataSuccess(data.items));
        
    })
    .catch(err => dispatch(fetchProtectedDataError(err))
    );
  }

  export const fetchAddItem = itemId => (dispatch, getState) => {
    const state = getState();
    console.log(state)
    return fetch(`${API_BASE_URL}/users/${state.auth.currentUser.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
         'Accept': "application/json",
         'Authorization': `Bearer ${state.auth.authToken}`
        
      },
      body: JSON.stringify(
        {itemId}
      )
      }).then(() => {
        dispatch(fetchAddItemSuccess(itemId))
    });
  };

  export const fetchUserList = () => (dispatch, getState) => {
    let state = getState()
    console.log('here is the state', state)
    let listArray = state.auth.currentUser.wishList;
    let listItem = listArray.map((item, index) => {
        return item
    })
    console.log(listItem)
    dispatch(fetchUserlistRequest())
    return fetch(`https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/items?ids=${listItem}&apiKey=btbth79qwypgtfubhamzjc4u&format=json`, 
    {"x-requested-with": "xhr"}
    )
    .then(response => {
      if(!response.ok){
      throw new Error(response.statusText)
      }
    return response.json()
    })
    .then(data => {
        dispatch(fetchUserlistSuccess(data.items))
    })
    .catch(err => {
      console.log(err)
      dispatch(fetchUserlistError(err))
    });
  }


  export const deleteWishListItem = (itemId) => (dispatch, getState) => {
    let state = getState()
    console.log(state)
    dispatch({
      type: DELETE_WISHLIST_ITEM,
      itemId
    })
    
    return fetch(`${API_BASE_URL}/users/remove-item/${state.auth.currentUser.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
         'Accept': "application/json",
         'Authorization': `Bearer ${state.auth.authToken}`
      },
      body: {
        itemId
      }
    });
  };

