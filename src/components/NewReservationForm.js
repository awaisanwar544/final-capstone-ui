import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { newReservations } from '../redux/reducers/reservations';

function NewReservationForm() {
  const dispatch = useDispatch();
  const location = useLocation();
  const provider = location.state;
  const navigate = useNavigate();

  const [totalCost, setTotalCost] = useState(0);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const changeStartDate = (event) => {
    event.preventDefault();
    const date = new Date(event.target.value);
    setStartDate(date);
  };

  const changeEndDate = (event) => {
    event.preventDefault();
    const date = new Date(event.target.value);
    setEndDate(date);
  };

  const calculateTotalCost = () => {
    const difference = endDate - startDate;
    const numberOfDays = Math.ceil(difference / (1000 * 3600 * 24));
    if (numberOfDays > 0) {
      return numberOfDays * Math.floor(provider.cost);
    }

    return null;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (totalCost) {
      dispatch(newReservations(provider.id, startDate, endDate, totalCost))
        .then(() => {
          navigate('/reservations');
        });
    }
  };

  useEffect(() => {
    setTotalCost(calculateTotalCost);
  }, [startDate, endDate]);
  return (
    <div className="flex flex-col w-full h-screen flex items-center justify-center space-y-10">
      <h1 className="text-4xl text-custom-grey-500">{`To hire ${provider.name} fill in the following details`}</h1>
      <form className="bg-white shadow-xl rounded px-8 pt-6 pb-8 h-fit mx-auto" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-6">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Start Date
              <input onChange={changeStartDate} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-custom-green-500 focus:placeholder:text-custom-green-500" id="date" type="date" required />
            </label>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rate">
              End Date
              <input onChange={changeEndDate} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-custom-green-500 focus:placeholder:text-custom-green-500" id="rate" type="date" required />
            </label>
          </div>
          <div className="mb-4">
            <div className="block text-gray-700 text-lg font-bold mb-2" htmlFor="profile-image">
              Total Cost:
              <span className="text-custom-green-500">
                { totalCost ? ` ${totalCost} $` : ' Invalid Dates' }
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-custom-white-500 text-custom-grey-500 border border-custom-green-500 hover:bg-custom-green-500 hover:text-white font-bold py-2 px-4 mt-6 rounded focus:outline-none" type="submit">
            Hire Developer
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewReservationForm;
