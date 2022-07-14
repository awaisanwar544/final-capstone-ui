import NavigationBar from '../components/NavigationBar';

import ProviderCard from '../components/ProviderCard';

import MobileMenu from '../components/MobileMenu';

function HomePage() {
  return (
    <div className="flex">
      <MobileMenu />
      <NavigationBar />
      <div className="w-screen h-screen flex flex-col items-center justify-center space-y-20 md:overflow-y-hidden">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl text-custom-grey-500">Developers To Hire</h1>
          <p className="text-xl">Please select a developer from the List</p>
        </div>
        <div className="w-full max-h-screen flex items-center flex-col overflow-y-scroll md:flex-row md:overflow-x-scroll md:overflow-y-hidden">
          <ProviderCard />
          <ProviderCard />
          <ProviderCard />
          <ProviderCard />
          <ProviderCard />
          <ProviderCard />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
