import NavigationBar from '../components/NavigationBar';
import NewProviderForm from '../components/NewProviderForm';
import MobileMenu from '../components/MobileMenu';

function AddDeveloper() {
  return (
    <div className="flex">
      <MobileMenu />
      <NavigationBar />
      <div className="w-full mt-40">
        <NewProviderForm />
      </div>
    </div>
  );
}

export default AddDeveloper;
