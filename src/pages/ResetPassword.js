import { useDispatch } from 'react-redux';
import logo from '../assets/logo.png';

import { passwordReset } from '../redux/reducers/user';

function ResetPassword() {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPassword = event.target[0].value;
    dispatch(passwordReset(newPassword));
  };
  return (
    <div className="w-screen h-screen flex items-center bg-custom-green-500">
      <form className="bg-white shadow-xl rounded px-8 pt-6 pb-8 h-fit mx-auto max-w-xs" onSubmit={handleSubmit}>
        <div className="flex w-full p-10 justify-center">
          <a href="/">
            <img className="w-24" src={logo} alt="logo" />
          </a>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            New password
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-custom-green-500 focus:placeholder:text-custom-green-500" id="password" type="password" placeholder="******************" />
          </label>
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-custom-white-500 text-custom-grey-500 border border-custom-green-500 hover:bg-custom-green-500 hover:text-white font-bold py-2 px-4 rounded focus:outline-none" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ResetPassword;
