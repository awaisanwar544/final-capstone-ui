import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

import { logIn } from '../redux/reducers/user';

function SignIn() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const error = useSelector((state) => state.user.error);
  const [displayMessage, setDisplayMessage] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    dispatch(logIn(email.value, password.value));
  };

  useEffect(() => {
    if (user.token) {
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/');
    }

    if (error) {
      setDisplayMessage(error.response.data['error:']);
    }
  }, [user, error]);
  return (
    <motion.div
      className="w-screen h-screen flex items-center bg-custom-green-500"
      animate={{ x: 0, opacity: 1 }}
      initial={{ x: '-100%', opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <form className="bg-white shadow-xl rounded px-8 pt-6 pb-8 h-fit mx-auto max-w-xs" onSubmit={handleSubmit}>
        <div className="flex w-full p-10 justify-center">
          <a href="/">
            <img className="w-24 select-none" src={logo} alt="logo" />
          </a>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-4" htmlFor="email">
            E-mail
            <input type="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-custom-green-500 focus:placeholder:text-custom-green-500" id="email" placeholder="Email@something.com" required />
          </label>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-custom-green-500 focus:placeholder:text-custom-green-500" id="password" type="password" placeholder="******" required />
          </label>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-custom-white-500 text-custom-grey-500 border border-custom-green-500 hover:bg-custom-green-500 hover:text-white font-bold py-2 px-4 rounded focus:outline-none" type="submit">
            Sign In
          </button>
          <Link to="/forgot-password" exact="true" className="inline-block align-baseline font-bold text-sm text-custom-grey-500 hover:text-custom-green-500">
            Forgot Password?
          </Link>
        </div>
        {displayMessage && <p className="mt-5 text-center text-red-500">{displayMessage}</p>}
        <Link to="/signup" exact="true" className="inline-block mt-10 align-baseline font-bold text-sm text-custom-grey-500 hover:text-custom-green-500">
          Do not have an account?
          <br />
          Register now!
        </Link>
      </form>
    </motion.div>
  );
}

export default SignIn;
