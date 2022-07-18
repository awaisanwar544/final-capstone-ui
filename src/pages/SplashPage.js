import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

function SplashPage({ removeSplash }) {
  return (
    <motion.div
      className="flex flex-col mt-20 items-center"
      animate={{ scale: 1, opacity: 1 }}
      initial={{ scale: 10, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex w-full p-10 justify-center">
        <a href="/">
          <img className="w-48" src={logo} alt="logo" />
        </a>
      </div>
      <div className="flex items-center justify-center space-x-3">
        <Link to="/signin" exact="true" onClick={removeSplash} className="bg-custom-white-500 text-custom-grey-500 border border-custom-green-500 hover:bg-custom-green-500 hover:text-white font-bold py-2 px-4 rounded focus:outline-none">
          Sign In
        </Link>
        <Link to="signup" exact="true" onClick={removeSplash} className="bg-custom-white-500 text-custom-grey-500 border border-custom-green-500 hover:bg-custom-green-500 hover:text-white font-bold py-2 px-4 rounded focus:outline-none">
          Register
        </Link>
      </div>
    </motion.div>
  );
}

SplashPage.propTypes = {
  removeSplash: PropTypes.func.isRequired,
};

export default SplashPage;
