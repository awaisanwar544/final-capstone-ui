import NavigationBar from '../components/NavigationBar';

import ProviderDetails from '../components/ProviderDetails';
import MobileMenu from '../components/MobileMenu';

function DeveloperDetailsPage() {
  return (
    <div className="flex">
      <MobileMenu />
      <NavigationBar />
      <div className="w-full h-screen flex flex-col items-center mt-20 md:mt-0 md:justify-center space-y-20 md:overflow-y-hidden">
        <ProviderDetails />
      </div>
    </div>
  );
}

export default DeveloperDetailsPage;
