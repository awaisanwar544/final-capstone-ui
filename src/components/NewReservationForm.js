import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { newReservations } from '../redux/reducers/reservations';
import { getProviders } from '../redux/reducers/providers';

function NewReservationForm() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const providers = useSelector((state) => state.providers);
  const provider = providers.filter((item) => item.id === Number(id))[0];
  const navigate = useNavigate();

  const [totalCost, setTotalCost] = useState(0);
  const [startDate, setStartDate] = useState(false);
  const [endDate, setEndDate] = useState(false);
  const [message, setMessage] = useState(false);

  function daysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }

  function dateInDays(year, month, days) {
    let daysFromYearStart = 0;

    for (let i = 1; i <= month; i += 1) {
      daysFromYearStart += daysInMonth(year, i);
    }

    return ((year - 2020) * 365) + daysFromYearStart + days;
  }

  function todayInDays() {
    const today = new Date();
    return dateInDays(today.getUTCFullYear(), today.getUTCMonth() + 1, today.getUTCDate());
  }

  const changeStartDate = (event) => {
    event.preventDefault();
    const [year, month, day] = event.target.value.split('-').map(Number);
    const startDateInDays = dateInDays(year, month, day);

    if (startDateInDays <= todayInDays()) {
      setMessage(`Start date must be later than today(at UTC-0 ${new Date().getUTCDate()}/${new Date().getUTCMonth() + 1}/${new Date().getUTCFullYear()}).`);
    } else if (startDateInDays > (todayInDays() + 180)) {
      setMessage(`You can only book a developer 180 days in advance (6 months aproximately), your current selection is ${startDateInDays - todayInDays()} in advance.`);
    } else {
      setMessage(false);
      setStartDate(`${year}-${month}-${day}`);
    }
  };

  const changeEndDate = (event) => {
    event.preventDefault();
    setEndDate(event.target.value);
  };

  const calculateTotalCost = () => {
    if (startDate && endDate) {
      let dateArr = startDate.split('-').map(Number);
      const start = dateInDays(dateArr[0], dateArr[1], dateArr[2]);

      dateArr = endDate.split('-').map(Number);
      const end = dateInDays(dateArr[0], dateArr[1], dateArr[2] + 1);

      if (start + 30 <= end) {
        setMessage(`You can only book a developer for 30 days at max. The current booked time is ${end - start} days.`);
      } else if (end < start) {
        setMessage('End date must be later than the start date');
      } else {
        setMessage(false);
        setTotalCost((end - start) * provider.cost);
      }
    }

    return null;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (totalCost && !(message)) {
      dispatch(newReservations(provider.id, startDate, endDate, totalCost))
        .then(() => {
          navigate('/reservations');
        });
    }
  };

  useEffect(() => {
    setTotalCost(calculateTotalCost);
  }, [startDate, endDate]);

  useEffect(() => {
    if (providers.length === 0) {
      dispatch(getProviders());
    }
  }, []);
  return (
    <>
      {provider
        ? (
          <div
            className="flex flex-col w-full h-screen flex items-center justify-center space-y-10"
          >
            <h1 className="text-xl px-5 md:text-4xl text-custom-grey-500">{`To hire ${provider.name} fill in the following details`}</h1>
            {message
              ? <p className="text-red-500">{message}</p> : ''}
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
                  <div className="flex justify-between text-gray-700 text-lg font-bold mb-2" htmlFor="profile-image">
                    Total Cost:
                    <span className="text-custom-green-500">
                      { totalCost ? `$ ${totalCost.toFixed(2)}` : ' Invalid Dates' }
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
        ) : 'Wait a moment while we fetch data'}
    </>
  );
}

export default NewReservationForm;
