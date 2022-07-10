import { Link } from 'react-router-dom';

function SignIn() {
  return (
    <div className="w-screen h-screen flex items-center bg-custom-green-500">
      <form className="bg-white shadow-xl rounded px-8 pt-6 pb-8 h-fit mx-auto max-w-xs">
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
          <button className="bg-custom-white-500 text-custom-grey-500 border border-custom-green-500 hover:bg-custom-green-500 hover:text-white font-bold py-2 px-4 rounded focus:outline-none" type="button">
            Sign In
          </button>
          <Link
            className="inline-block align-baseline font-bold text-sm text-custom-grey-500
            hover:text-custom-green-500"
            to="/forgot-password"
            exact
          >
            Forgot Password?
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
