import { useDispatch } from 'react-redux';

import { getSkills } from '../redux/reducers/skills';

import NavigationBar from '../components/NavigationBar';
import NewProviderForm from '../components/NewProviderForm';
import MobileMenu from '../components/MobileMenu';

function AddDeveloper() {
  const dispatch = useDispatch();

  dispatch(getSkills());
  return (
    <div className="flex">
      <MobileMenu />
      <NavigationBar />
      <div className="w-screen">
        <NewProviderForm />
      </div>
    </div>
  );
}

export default AddDeveloper;
