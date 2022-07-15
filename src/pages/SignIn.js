import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../assets/logo.png';

import { logIn } from '../redux/reducers/user';

function SignIn() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;
    dispatch(logIn(email, password));
  };

  useEffect(() => {
    if (Object.keys(user).length !== 0) {
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/');
    }
  }, [user]);
  return (
    <div className="w-screen h-screen flex items-center bg-custom-green-500">
      <form className="bg-white shadow-xl rounded px-8 pt-6 pb-8 h-fit mx-auto max-w-xs" onSubmit={handleSubmit}>
        <div className="flex w-full p-10 justify-center">
          <a href="/">
            <img className="w-24" src={logo} alt="logo" />
          </a>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-4" htmlFor="email">
            E-mail
            <input type="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-custom-green-500 focus:placeholder:text-custom-green-500" id="email" placeholder="Email@something.com" />
          </label>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-custom-green-500 focus:placeholder:text-custom-green-500" id="password" type="password" placeholder="******************" />
          </label>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-custom-white-500 text-custom-grey-500 border border-custom-green-500 hover:bg-custom-green-500 hover:text-white font-bold py-2 px-4 rounded focus:outline-none" type="submit">
            Sign In
          </button>
          <Link to="/forgot-password" exact className="inline-block align-baseline font-bold text-sm text-custom-grey-500 hover:text-custom-green-500">
            Forgot Password?
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
