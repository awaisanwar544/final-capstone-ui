import axios from 'axios';
import getToken from '../../util/getToken';
import getURL from '../../util/getURL';

// action types
const SIGN_UP = 'SIGN_UP';
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';
const FORGOT_PASSWORD = 'FORGOT_PASSWORD';
const PASSWORD_RESET = 'PASSWORD_RESET';

// errors actions
const ERROR = 'ERROR';

const URL = getURL();
const APP_TOKEN = getToken();

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

  await axios.post(`${URL}/user`, JSON.stringify(data), axiosAppConfig)
    .then((res) => {
      dispatch({
        type: LOG_IN,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: ERROR,
        error: err,
      });
    });
};

export const logOut = () => (
  { type: LOG_OUT }
);

export const forgotPassword = (email) => async (dispatch) => {
  const data = {
    email,
  };

  await axios.post(`${URL}/password/forgot`, JSON.stringify(data), axiosAppConfig)
    .then((res) => {
      dispatch({
        type: FORGOT_PASSWORD,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: ERROR,
        error: err,
      });
    });
};

export const passwordReset = (newPassword, resetToken) => async (dispatch) => {
  const data = {
    new_password: newPassword,
    reset_token: resetToken,
  };

  const response = await axios.post(`${URL}/password/reset`, JSON.stringify(data), axiosAppConfig)
    .then((res) => res.data);
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
      ...action.payload,
    };
  }

  if (action.type === FORGOT_PASSWORD) {
    return action.payload;
  }

  if (action.type === PASSWORD_RESET) {
    return {
      ...state,
      ...action.payload,
    };
  }

  if (action.type === LOG_OUT) {
    return state;
  }

  if (action.type === ERROR) {
    return {
      ...state,
      error: action.error,
    };
  }

  return state;
}
