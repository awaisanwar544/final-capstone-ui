import { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getProviders } from '../redux/reducers/providers';

import NavigationBar from '../components/NavigationBar';
import ProviderCardLandscape from '../components/ProviderCardLandscape';
import MobileMenu from '../components/MobileMenu';

function DeleteDeveloper() {
  const dispatch = useDispatch();
  const providers = useSelector((state) => state.providers, shallowEqual);

  useEffect(() => {
    dispatch(getProviders());
  }, []);

  return (
    <div className="flex">
      <MobileMenu />
      <NavigationBar />
      <div className="flex flex-col items-center h-screen w-full overflow-y-scroll pt-12 text-center">
        <h1 className="text-4xl text-custom-grey-500">Delete a Developer</h1>
        {
            providers.map((item) => <ProviderCardLandscape key={item.id} providerData={item} />)
          }
      </div>
    </div>
  );
}

export default DeleteDeveloper;
