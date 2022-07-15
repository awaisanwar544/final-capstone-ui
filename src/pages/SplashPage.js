import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getProviders } from '../redux/reducers/providers';

import logo from '../assets/logo.png';

function SplashPage({ removeSplash }) {
  const dispatch = useDispatch();

  dispatch(getProviders());
  return (
    <div className="flex flex-col mt-20 items-center">
      <div className="flex w-full p-10 justify-center">
        <a href="/">
          <img className="w-48" src={logo} alt="logo" />
        </a>
      </div>
      <div className="flex items-center justify-center space-x-3">
        <Link to="/signin" exact onClick={removeSplash} className="bg-custom-white-500 text-custom-grey-500 border border-custom-green-500 hover:bg-custom-green-500 hover:text-white font-bold py-2 px-4 rounded focus:outline-none">
          Sign In
        </Link>
        <Link to="signup" exact onClick={removeSplash} className="bg-custom-white-500 text-custom-grey-500 border border-custom-green-500 hover:bg-custom-green-500 hover:text-white font-bold py-2 px-4 rounded focus:outline-none">
          Register
        </Link>
      </div>
    </div>
  );
}

SplashPage.propTypes = {
  removeSplash: PropTypes.func.isRequired,
};

export default SplashPage;
