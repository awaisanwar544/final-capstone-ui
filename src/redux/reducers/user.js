import axios from 'axios';

// action types
const SIGN_UP = 'SIGN_UP';

const URL = 'https://bookdev-api.herokuapp.com/api/user/add';
const APP_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.IkJvb2tEZXYi.-8n7cJLfletMmFvAzpRHluHSwl61sR8ULl9p_QwQBNY';

const initialState = [];

// action creator
export const signUp = (name, email, password) => async (dispatch) => {
  const data = {
    name,
    email,
    password,
  };

  const axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization: APP_TOKEN,
    },
  };

  const response = axios.post(URL, JSON.stringify(data), axiosConfig)
    .then((res) => {
      console.log(res);
    });
  dispatch({
    type: SIGN_UP,
    payload: response,
  });
};

// reducer
export default function userReducer(state = initialState, action) {
  if (action.type === SIGN_UP) {
    return [
      ...state,
    ];
  }
  return state;
}
