import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import NavigationBar from '../components/NavigationBar';
import ProviderCard from '../components/ProviderCard';
import MobileMenu from '../components/MobileMenu';
import { getProviders } from '../redux/reducers/providers';

function HomePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const providers = useSelector((state) => state.providers);
  const message = 'Currently there is no developer available';

  useEffect(() => {
    if (!user) {
      navigate('/signin');
    }

    if (user && !user.email) {
      localStorage.removeItem('user');
      navigate('/signin');
    }
    dispatch(getProviders()).then(() => {
      const item = document.getElementById('dev-container');

      item.addEventListener('wheel', (e) => {
        e.preventDefault();
        if (e.deltaY > 0 && item) {
          item.scrollLeft += 500;
        } else if (e.deltaY <= 0 && item) {
          item.scrollLeft -= 500;
        }
      });
    });
  }, []);
  return (
    <div className="flex">
      <MobileMenu />
      <NavigationBar />
      <div className="w-screen h-screen flex flex-col items-center justify-center md:space-y-20 md:overflow-y-hidden">
        <div className="flex flex-col items-center pt-16 px-3 md:pt-2 shadow-md z-10 md:shadow-none">
          <h1 className="text-4xl md:text-6xl text-custom-grey-500">
            Developers To Hire
          </h1>
          <p className="my-5 text-center bg-custom-green-500 p-4 text-custom-white-500">
            {
              ' Book Dev is an exclusive platform of the top freelance software developers in the world. Top companies hire Book Dev freelancers for their most important projects. Hire a Book Dev freelancer for your digital product.'
            }
          </p>
          <p className="text-xl">Please select a developer from the list:</p>
        </div>
        <div
          id="dev-container"
          className="w-full h-full flex items-center flex-col overflow-y-scroll md:flex-row md:overflow-x-scroll md:overflow-y-hidden"
        >
          {providers.length ? (
            providers.map((item) => (
              <ProviderCard key={item.id} providerData={item} />
            ))
          ) : (
            <p className="text-red-500">{message}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
