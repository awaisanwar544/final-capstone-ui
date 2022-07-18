import axios from 'axios';
import getURL from '../../util/getURL';

// action types
const GET_RESERVATIONS = 'GET_RESERVATIONS';
const NEW_RESERVATION = 'NEW_RESERVATION';
const DEL_RESERVATION = 'DEL_RESERVATION';

const URL = getURL();

// action creatorS
export const getReservations = () => async (dispatch) => {
  const USER_TOKEN = `BEARER ${localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).token}`;
  const axiosUserConfig = {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: USER_TOKEN,
    },
  };
  const response = await axios.get(`${URL}/reservations`, axiosUserConfig)
    .then((res) => res.data);
  dispatch({
    type: GET_RESERVATIONS,
    payload: response,
  });
};

export const newReservations = (providerId, startDate, endDate, totalCost) => async (dispatch) => {
  const USER_TOKEN = `BEARER ${localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).token}`;
  const axiosUserConfig = {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: USER_TOKEN,
    },
  };
  const data = {
    provider_id: providerId,
    start_date: startDate,
    end_date: endDate,
    total_cost: totalCost,
  };
  const response = await axios
    .post(`${URL}/reservations`, data, axiosUserConfig)
    .then((res) => res.data);

  dispatch({
    type: NEW_RESERVATION,
    payload: response,
  });
};

export const delReservations = (id) => async (dispatch) => {
  const USER_TOKEN = `BEARER ${localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).token}`;
  const axiosUserConfig = {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: USER_TOKEN,
    },
  };
  const response = await axios.delete(`${URL}/reservations/${id}`, axiosUserConfig)
    .then((res) => res.data);

  dispatch({
    type: DEL_RESERVATION,
    payload: response,
  });
};

// reducer
export default function reservationsReducer(state = [], action) {
  switch (action.type) {
    default: return state;

    case GET_RESERVATIONS:
      return [
        ...action.payload,
      ];
  }
}
