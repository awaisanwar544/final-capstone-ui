import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

function SplashPage({ changeSplash }) {
  return (
    <div className="bg-custom-green-500 flex flex-col justify-center items-center h-screen w-auto">
      <div className="text-custom-white-500 text-4xl flex items-center content-center justify-center w-2/4 h-16">Service Provider App</div>
      <div className="text-custom-grey-500 text-lg flex items-center content-center justify-center w-2/4 h-16">A subtitle</div>
      <div className="flex items-center justify-center space-x-3">
        <Link to="/signin" exact onClick={changeSplash} className="bg-custom-white-500 text-custom-grey-500 border border-custom-green-500 hover:bg-custom-grey-500 hover:text-white font-bold py-2 px-4 rounded focus:outline-none">
          Sign In
        </Link>
        <Link to="signup" exact onClick={changeSplash} className="bg-custom-white-500 text-custom-grey-500 border border-custom-green-500 hover:bg-custom-grey-500 hover:text-white font-bold py-2 px-4 rounded focus:outline-none">
          Register
        </Link>
      </div>
    </div>
  );
}

SplashPage.propTypes = {
  changeSplash: PropTypes.func.isRequired,
};

export default SplashPage;
