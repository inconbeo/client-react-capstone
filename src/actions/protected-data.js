import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_PROTECTED_DATA_REQUEST = 'FETCH_CHEESE_REQUEST';
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
        console.log(data.items);
        dispatch(fetchProtectedDataSuccess(data.items));
        
    })
    .catch(err => dispatch(fetchProtectedDataError(err))
    );
  }

  export const fetchAddItem = itemId => dispatch => {
    console.log(itemId);
    return fetch(`${API_BASE_URL}/users/5a1ddbf3933e83ea1af34bea`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
         'Accept': "application/json"
        
      },
      body: JSON.stringify(
        {itemId}
          
      )
    });
  };
