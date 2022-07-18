import NavigationBar from '../components/NavigationBar';
import NewReservationForm from '../components/NewReservationForm';
import MobileMenu from '../components/MobileMenu';

function AddReservation() {
  return (
    <div className="flex">
      <MobileMenu />
      <NavigationBar />
      <div className="w-screen">
        <NewReservationForm />
      </div>
    </div>
  );
}

export default AddReservation;
