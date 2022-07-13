import NavigationBar from '../components/NavigationBar';

import ProviderDetails from '../components/ProviderDetails';

function HomePage() {
  return (
    <div className="flex">
      <NavigationBar />
      <div className="w-screen h-screen flex flex-col items-center justify-center space-y-20 md:overflow-y-hidden">
        <div className="flex flex-col items-center">
          <h1 className="text-6xl text-custom-grey-500">Developers To Hire</h1>
          <p className="text-xl">Please select a developer from the List</p>
        </div>
        <div className="w-full max-h-screen flex items-center flex-col overflow-y-scroll md:flex-row md:overflow-x-scroll md:overflow-y-hidden">
          <ProviderDetails />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
