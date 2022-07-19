import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

import { forgotPassword } from '../redux/reducers/user';

function ForgotPassword() {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.user.message);
  const error = useSelector((state) => state.user.error);

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target[0].value;
    dispatch(forgotPassword(email));
  };
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-custom-green-500 space-y-10">
      {message && <p className="absolute top-0 w-screen text-center bg-yellow-500 text-custom-white-500">{`${message} Please Check your email to continue.`}</p>}
      {error && <p className="absolute top-0 w-screen text-center bg-red-500 text-custom-white-500">{error.response.data.error[0]}</p>}
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
        <div className="flex items-center justify-center">
          <button className="bg-custom-white-500 text-custom-grey-500 border border-custom-green-500 hover:bg-custom-green-500 hover:text-white font-bold py-2 px-4 rounded focus:outline-none" type="submit">
            Submit
          </button>
        </div>
        <Link to="/signin" exact="true" className="inline-block mt-10 align-baseline font-bold text-sm text-custom-grey-500 hover:text-custom-green-500">
          Sign in here
        </Link>
      </form>
    </div>
  );
}

export default ForgotPassword;
