import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter, faFacebook, faGoogle, faYoutube, faPinterest,
} from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logo.png';

function NavigationBar() {
  const inactiveClassName = 'flex flex-col bg-custom-white-500 text-custom-grey-500 text-xl font-bold justify-center h-16 p-5 hover:text-custom-white-500 hover:bg-custom-green-500';
  const activeClassName = 'flex flex-col bg-custom-green-500 text-custom-white-500 text-xl font-bold h-16 justify-center p-5';

  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem('user');
    navigate('/');
    window.location.reload();
  };
  return (
    <div className="hidden lg:flex flex-col p-5 pr-0 items-center bg-custom-white-500 h-screen w-1/5 shadow-xl">
      <a href="/" className="w-24">
        <img className="object-contain" src={logo} alt="logo" />
      </a>
      <div className="w-full pl-10 mt-20 space-y-1">
        <NavLink
          exact
          to="/"
          className={({ isActive }) => (isActive ? activeClassName : inactiveClassName)}
        >
          <p>All Developers</p>
        </NavLink>
        <NavLink
          exact
          to="/reservations"
          className={({ isActive }) => (isActive ? activeClassName : inactiveClassName)}
        >
          <p>Manage Reservations</p>
        </NavLink>
        <NavLink
          exact
          to="/add-developer"
          className={({ isActive }) => (isActive ? activeClassName : inactiveClassName)}
        >
          <p>Add New Developer</p>
        </NavLink>
        <NavLink
          exact
          to="/delete-developer"
          className={({ isActive }) => (isActive ? activeClassName : inactiveClassName)}
        >
          <p>Delete Developer</p>
        </NavLink>
      </div>
      <div className="flex items-center justify-center mt-20">
        <button onClick={handleClick} className="bg-custom-white-500 text-custom-grey-500 border border-custom-green-500 hover:bg-custom-green-500 hover:text-white font-bold py-2 px-4 rounded focus:outline-none" type="button">
          Logout
        </button>
      </div>
      <div className="flex flex-col items-center gap-4 mt-auto">
        <div className="flex gap-x-6">
          <a href="https://www.google.com/">
            <FontAwesomeIcon className="text-custom-grey-500 text-xl hover:text-custom-green-500" icon={faTwitter} />
          </a>
          <a href="https://www.google.com/">
            <FontAwesomeIcon className="text-custom-grey-500 text-xl hover:text-custom-green-500" icon={faFacebook} />
          </a>
          <a href="https://www.google.com/">
            <FontAwesomeIcon className="text-custom-grey-500 text-xl hover:text-custom-green-500" icon={faGoogle} />
          </a>
          <a href="https://www.google.com/">
            <FontAwesomeIcon className="text-custom-grey-500 text-xl hover:text-custom-green-500" icon={faYoutube} />
          </a>
          <a href="https://www.google.com/">
            <FontAwesomeIcon className="text-custom-grey-500 text-xl hover:text-custom-green-500" icon={faPinterest} />
          </a>
        </div>
        <div>© Copyright 2022</div>
      </div>
    </div>
  );
}

export default NavigationBar;
