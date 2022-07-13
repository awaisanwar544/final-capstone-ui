import NavigationBar from '../components/NavigationBar';

import NewProviderForm from '../components/NewProviderForm';

function AddDeveloper() {
  return (
    <div className="flex">
      <NavigationBar />
      <div className="w-screen">
        <NewProviderForm />
      </div>
    </div>
  );
}

export default AddDeveloper;
