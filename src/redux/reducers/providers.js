import axios from 'axios';

// action types
const GET_PROVIDERS = 'GET_PROVIDERS';
const NEW_PROVIDERS = 'NEW_PROVIDERS';

const URL = 'https://bookdev-api.herokuapp.com/api';
const APP_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.IkJvb2tEZXYi.-8n7cJLfletMmFvAzpRHluHSwl61sR8ULl9p_QwQBNY';
const USER_TOKEN = `BEARER ${JSON.parse(localStorage.getItem('user')).token}`;

const axiosAppConfig = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    Authorization: APP_TOKEN,
  },
};

const axiosUserConfig = {
  headers: {
    'Content-Type': 'multipart/form-data',
    Authorization: USER_TOKEN,
  },
};

// action creator
export const getProviders = () => async (dispatch) => {
  const response = await axios.get(`${URL}/providers`, axiosAppConfig)
    .then((res) => res.data);
  dispatch({
    type: GET_PROVIDERS,
    payload: response,
  });
};

export const newProviders = (data) => async (dispatch) => {
  const response = await axios.post(`${URL}/providers`, data, axiosUserConfig)
    .then((res) => res.data);
  dispatch({
    type: NEW_PROVIDERS,
    payload: response,
  });
};

// reducer
export default function providersReducer(state = [], action) {
  switch (action.type) {
    default: return state;

    case GET_PROVIDERS:
      return [
        ...action.payload,
      ];
  }
}
