import NavigationBar from '../components/NavigationBar';

import ProviderDetails from '../components/ProviderDetails';
import MobileMenu from '../components/MobileMenu';

function DeveloperDetailsPage() {
  return (
    <div className="flex">
      <MobileMenu />
      <NavigationBar />
      <div className="w-screen h-screen flex flex-col items-center justify-center space-y-20 md:overflow-y-hidden">
        <ProviderDetails />
      </div>
    </div>
  );
}

export default DeveloperDetailsPage;
