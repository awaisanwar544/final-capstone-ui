import { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getProviders } from '../redux/reducers/providers';

import NavigationBar from '../components/NavigationBar';
import ProviderCard from '../components/ProviderCard';
import MobileMenu from '../components/MobileMenu';

function HomePage() {
  const dispatch = useDispatch();
  const providers = useSelector((state) => state.providers, shallowEqual);

  useEffect(() => {
    dispatch(getProviders());
  }, []);

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
          {
            providers.map((item) => <ProviderCard key={item.id} providerData={item} />)
          }
        </div>
      </div>
    </div>
  );
}

export default HomePage;
