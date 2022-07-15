import axios from 'axios';

// action types
const GET_RESERVATIONS = 'GET_RESERVATIONS';
const NEW_RESERVATION = 'NEW_RESERVATION';
const DEL_RESERVATION = 'DEL_RESERVATION';

const URL = 'https://bookdev-api.herokuapp.com/api/reservations';
const USER_TOKEN = `BEARER ${localStorage.getItem('user').token}`;

const axiosUserConfig = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    Authorization: USER_TOKEN,
  },
};

// action creatorS
export const getReservations = () => async (dispatch) => {
  const response = axios.get(URL, axiosUserConfig);
  dispatch({
    type: GET_RESERVATIONS,
    payload: response,
  });
};

export const newReservations = (providerId, startDate, endDate, totalCost) => async (dispatch) => {
  const data = {
    provider_id: providerId,
    start_date: startDate,
    end_date: endDate,
    total_cost: totalCost,
  };

  const response = await axios
    .post(URL, JSON.stringify(data), axiosUserConfig)
    .then((res) => res.data);

  dispatch({
    type: NEW_RESERVATION,
    payload: response,
  });
};

export const delReservations = (id) => async (dispatch) => {
  const response = await axios.post(URL, JSON.stringify(id), axiosUserConfig)
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
        action.payload,
      ];
  }
}
