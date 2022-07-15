import axios from 'axios';

// action types
const SIGN_UP = 'SIGN_UP';
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';
const FORGOT_PASSWORD = 'FORGOT_PASSWORD';
const PASSWORD_RESET = 'PASSWORD_RESET';

const URL = 'https://bookdev-api.herokuapp.com/api';
const APP_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.IkJvb2tEZXYi.-8n7cJLfletMmFvAzpRHluHSwl61sR8ULl9p_QwQBNY';

const initialState = {};

const axiosAppConfig = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    Authorization: APP_TOKEN,
  },
};

// action creator
export const signUp = (name, email, password) => async (dispatch) => {
  const data = {
    name,
    email,
    password,
  };

  const response = await axios.post(`${URL}/user/add`, JSON.stringify(data), axiosAppConfig)
    .then((res) => res.data);
  dispatch({
    type: SIGN_UP,
    payload: response,
  });
};

export const logIn = (email, password) => async (dispatch) => {
  const data = {
    email,
    password,
  };

  const response = await axios.post(`${URL}/user`, JSON.stringify(data), axiosAppConfig)
    .then((res) => res.data);
  dispatch({
    type: LOG_IN,
    payload: response,
  });
};

export const logOut = () => (
  // here we should remove the user token from state
  { type: LOG_OUT }
);

export const forgotPassword = (email) => async (dispatch) => {
  const data = {
    email,
  };

  const response = axios.post(`${URL}/password/forgot`, JSON.stringify(data), axiosAppConfig)
    .then((res) => {
      console.log(res); // here we should save the token
    });
  dispatch({
    type: FORGOT_PASSWORD,
    payload: response,
  });
};

export const passwordReset = (newPassword, resetToken) => async (dispatch) => {
  const data = {
    newPassword,
    resetToken,
  };

  const response = axios.post(`${URL}/password/reset`, JSON.stringify(data), axiosAppConfig)
    .then((res) => {
      console.log(res); // here we should save the token
    });
  dispatch({
    type: PASSWORD_RESET,
    payload: response,
  });
};

// reducer
export default function userReducer(state = initialState, action = {}) {
  if (action.type === SIGN_UP) {
    return {
      ...state,
      ...action.payload,
    };
  }

  if (action.type === LOG_IN) {
    return {
      ...state,
      ...action.payload,
    };
  }

  if (action.type === LOG_OUT) {
    return state;
  }

  return state;
}
