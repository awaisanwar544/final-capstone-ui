import Reservation from '../components/ReservationCard';

import NavigationBar from '../components/NavigationBar';

function MyReservations() {
  return (
    <div className="flex">
      <NavigationBar />
      <div className="flex flex-col items-center h-screen w-full overflow-y-scroll">
        <h1 className="text-3xl my-4 font-bold">My reservations:</h1>
        <Reservation />
        <Reservation />
        <Reservation />
        <Reservation />
        <Reservation />
        <Reservation />
        <Reservation />
        <Reservation />
        <Reservation />
        <Reservation />
      </div>
    </div>
  );
}

export default MyReservations;
