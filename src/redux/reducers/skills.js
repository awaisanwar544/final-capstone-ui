import axios from 'axios';
import getURL from '../../util/getURL';

// action types
const GET_SKILLS = 'GET_SKILLS';

const URL = getURL();
const APP_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.IkJvb2tEZXYi.-8n7cJLfletMmFvAzpRHluHSwl61sR8ULl9p_QwQBNY';

const axiosAppConfig = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    Authorization: APP_TOKEN,
  },
};

// action creator
export const getSkills = () => async (dispatch) => {
  const response = await axios.get(`${URL}/skills`, axiosAppConfig)
    .then((res) => res.data);
  dispatch({
    type: GET_SKILLS,
    payload: response,
  });
};

// reducer
export default function skillsReducer(state = [], action) {
  switch (action.type) {
    default: return state;

    case GET_SKILLS:
      return [
        ...action.payload,
      ];
  }
}
