import { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getReservations } from '../redux/reducers/reservations';

import Reservation from '../components/ReservationCard';

import NavigationBar from '../components/NavigationBar';
import MobileMenu from '../components/MobileMenu';

function MyReservations() {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations, shallowEqual);

  useEffect(() => {
    dispatch(getReservations());
  }, []);

  return (
    <div className="flex">
      <MobileMenu />
      <NavigationBar />
      <div className="flex flex-col items-center h-screen w-full overflow-y-scroll">
        <h1 className="text-3xl my-4 font-bold">My reservations:</h1>
        {
          reservations.map((item) => <Reservation key={item.id} reservationData={item} />)
        }
      </div>
    </div>
  );
}

export default MyReservations;
