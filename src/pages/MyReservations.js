import Reservation from '../components/ReservationCard';

function MyReservations() {
  return (
    <div className="flex flex-col items-center h-screen overflow-y-scroll">
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
  );
}

export default MyReservations;
