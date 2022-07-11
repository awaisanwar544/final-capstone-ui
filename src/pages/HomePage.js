import NavigationBar from '../components/NavigationBar';

import ProviderCard from '../components/ProviderCard';

function HomePage() {
  return (
    <div className="flex">
      <NavigationBar />

      <div className="w-full max-h-screen flex items-center flex-col overflow-y-scroll md:flex-row md:overflow-x-scroll md:overflow-y-hidden">
        <ProviderCard />
        <ProviderCard />
        <ProviderCard />
        <ProviderCard />
        <ProviderCard />
        <ProviderCard />
      </div>
    </div>
  );
}

export default HomePage;
