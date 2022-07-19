import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { DateTime } from 'luxon';
import { motion } from 'framer-motion';

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

  const changeStartDate = (event) => {
    event.preventDefault();
    const today = DateTime.now();
    const date = DateTime.fromISO(event.target.value);
    const difference = date.diff(today, ['months', 'days']);
    const diffInDays = Math.ceil(date.diff(today, 'days').days);

    if (!endDate) {
      if (difference.months >= 6 && difference.days > 0) {
        setMessage(`You can only book a developer 6 or less months advance. Your current selection is ${difference.months} and ${Math.ceil(difference.days)} days away`);
        setStartDate(false);
      }

      if (difference.months < 6) {
        if (diffInDays < 1) {
          setMessage(`Start date must be later than today. ${DateTime.now().toLocaleString(DateTime.DATE_MED)} `);
          setStartDate(false);
        }

        if (diffInDays > 0) {
          setMessage('Select the end date');
          setStartDate(date);
        }
      }
    }

    if (endDate) {
      const duration = Math.ceil(endDate.diff(date, 'days').days);

      if (duration < 0) {
        setMessage('End date must be equal or later than the start date');
        setStartDate(false);
      }

      if (duration > 30) {
        setMessage(`You can book a developer for 30 days. Currently your duration is ${duration} days.`);
        setStartDate(false);
      }

      if (diffInDays < 1) {
        setMessage(`Start date must be later than today. ${DateTime.now().toLocaleString(DateTime.DATE_MED)} `);
        setStartDate(false);
      }

      if (duration <= 30 && duration > 0 && diffInDays > 0) {
        setMessage(false);
        setStartDate(date);
      }
    }
  };

  const changeEndDate = (event) => {
    event.preventDefault();
    const today = DateTime.now();
    const date = DateTime.fromISO(event.target.value);
    const diffInDays = Math.ceil(date.diff(today, 'days').days);

    if (diffInDays < 1) {
      setMessage(`End date must be later than today. ${DateTime.now().toLocaleString(DateTime.DATE_MED)} `);
      setEndDate(false);
    }

    if (diffInDays > 0) {
      if (startDate) {
        const duration = Math.ceil(date.diff(startDate, 'days').days);

        if (duration < 0) {
          setMessage('End date must be equal or later than the start date');
          setEndDate(false);
        }

        if (duration > 30) {
          setMessage(`You can book a developer for 30 days. Currently your duration is ${duration} days.`);
          setEndDate(false);
        }

        if (duration <= 30 && duration >= 0) {
          setMessage(false);
          setEndDate(date);
        }
      }

      if (!startDate) {
        setEndDate(date);
        setMessage('Please select the start date');
      }
    }
  };

  const calculateTotalCost = () => {
    if (startDate && endDate) {
      const numberOfDays = Math.ceil(endDate.diff(startDate, 'days').days) + 1;
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
            <motion.div
              animate={{ x: 0, opacity: 1, rotate: 0 }}
              initial={{ x: '100%', opacity: 0, rotate: 20 }}
              transition={{ duration: 0.5 }}
            >
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
            </motion.div>
          </div>
        ) : 'Wait a moment while we fetch data'}
    </>
  );
}

export default NewReservationForm;
