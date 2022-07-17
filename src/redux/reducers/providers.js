import axios from 'axios';
import getToken from '../../util/getToken';
import getURL from '../../util/getURL';

// action types
const GET_PROVIDERS = 'GET_PROVIDERS';
const NEW_PROVIDERS = 'NEW_PROVIDERS';
const DEL_PROVIDER = 'DEL_PROVIDER';

const URL = getURL();
const APP_TOKEN = getToken();

const axiosAppConfig = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    Authorization: APP_TOKEN,
  },
};

// action creator
export const getProviders = () => async (dispatch) => {
  const response = await axios.get(`${URL}/providers`, axiosAppConfig)
    .then((res) => res.data)
    .catch((error) => error);
  dispatch({
    type: GET_PROVIDERS,
    payload: response,
  });
};

export const newProviders = (data) => async (dispatch) => {
  const USER_TOKEN = `BEARER ${localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).token}`;
  const axiosUserConfig = {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: USER_TOKEN,
    },
  };
  const response = await axios.post(`${URL}/providers`, data, axiosUserConfig)
    .then((res) => res.data)
    .catch((error) => error);
  dispatch({
    type: NEW_PROVIDERS,
    payload: response,
  });
};

export const delProviders = (id) => async (dispatch) => {
  const USER_TOKEN = `BEARER ${localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).token}`;
  const axiosUserConfig = {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: USER_TOKEN,
    },
  };
  const response = await axios.delete(`${URL}/providers/${id}`, axiosUserConfig)
    .then((res) => res.data)
    .catch((error) => error);
  dispatch({
    type: DEL_PROVIDER,
    payload: response,
  });
};

// reducer
export default function providersReducer(state = [], action) {
  switch (action.type) {
    default: return state;

    case GET_PROVIDERS:
      return action.payload;
  }
}
