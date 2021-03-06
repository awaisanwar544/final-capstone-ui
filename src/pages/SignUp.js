import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../assets/logo.png';

import { signUp } from '../redux/reducers/user';

function SignUp() {
  const dispatch = useDispatch();
  const newUser = useSelector((state) => state.user);
  const error = useSelector((state) => state.user.error);
  const navigate = useNavigate();

  const [displayMessage, setDisplayMessage] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target[0].value;
    const email = event.target[1].value;
    const password = event.target[2].value;
    const confirmPassword = event.target[3].value;
    if (password === confirmPassword) {
      dispatch(signUp(name, email, password));
    } else {
      setDisplayMessage('Password do not match, please re-enter password correctly');
    }
  };

  useEffect(() => {
    if (Object.keys(newUser).length !== 0 && !newUser.error) {
      localStorage.setItem('user', JSON.stringify(newUser));
      navigate('/');
    }

    if (error) {
      setDisplayMessage(error.response.data['error:']);
    }
  }, [newUser]);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center space-y-10 bg-custom-green-500">
      <form className="bg-white shadow-xl rounded px-8 pt-6 pb-8 h-fit mx-auto max-w-xs" onSubmit={handleSubmit}>
        <div className="flex w-full p-10 justify-center">
          <a href="/">
            <img className="w-24 select-none" src={logo} alt="logo" />
          </a>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-custom-green-500 focus:placeholder:text-custom-green-500" id="username" type="text" placeholder="Username" required />
          </label>
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
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-custom-green-500 focus:placeholder:text-custom-green-500" id="password" type="password" placeholder="******" minLength={6} required />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">
            Confirm password
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-custom-green-500 focus:placeholder:text-custom-green-500" id="confirm-password" type="password" placeholder="******" required />
          </label>
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-custom-white-500 text-custom-grey-500 border border-custom-green-500 hover:bg-custom-green-500 hover:text-white font-bold py-2 px-4 rounded focus:outline-none" type="submit">
            Sign Up
          </button>
        </div>
        {displayMessage && <p className="mt-5 text-center text-red-500">{displayMessage}</p>}
        <Link to="/signin" exact="true" className="inline-block mt-10 align-baseline font-bold text-sm text-custom-grey-500 hover:text-custom-green-500">
          Already have an account?
          <br />
          Sign in now!
        </Link>
      </form>
    </div>
  );
}

export default SignUp;
