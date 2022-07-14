import axios from 'axios';

// action types
const GET_PROVIDERS = 'GET_PROVIDERS';

const URL = 'https://bookdev-api.herokuapp.com/api';
const APP_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.IkJvb2tEZXYi.-8n7cJLfletMmFvAzpRHluHSwl61sR8ULl9p_QwQBNY';

const axiosAppConfig = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    Authorization: APP_TOKEN,
  },
};

// action creator
export const getProviders = () => async (dispatch) => {
  const response = axios.get(`${URL}/providers`, axiosAppConfig);
  dispatch({
    type: GET_PROVIDERS,
    payload: response,
  });
};

// reducer
export default function providersReducer(state = {}, action) {
  switch (action.type) {
    default: return state;

    case GET_PROVIDERS:
      return {
        ...state,
      };
  }
}
