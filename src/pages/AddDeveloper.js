import NavigationBar from '../components/NavigationBar';

import NewProviderForm from '../components/NewProviderForm';

function AddDeveloper() {
  return (
    <div className="flex">
      <NavigationBar />
      <div className="w-4/5">
        <NewProviderForm />
      </div>
    </div>
  );
}

export default AddDeveloper;
