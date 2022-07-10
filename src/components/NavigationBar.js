import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter, faFacebook, faGoogle, faYoutube, faPinterest,
} from '@fortawesome/free-brands-svg-icons';

function NavigationBar() {
  const inactiveClassName = 'flex flex-col bg-custom-white-500 text-custom-grey-500 text-xl font-extrabold h-20 justify-center p-5';
  const activeClassName = 'flex flex-col bg-custom-green-500 text-custom-white-500 text-xl font-extrabold h-20 justify-center p-5';
  return (
    <div className="flex flex-col justify-between p-5 pr-0 items-center bg-custom-white-500 h-screen w-1/5 shadow-xl">
      <div className="">Logo</div>
      <div className="w-full pl-10">
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
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-x-6">
          <FontAwesomeIcon className="text-custom-grey-500 text-xl" icon={faTwitter} />
          <FontAwesomeIcon className="text-custom-grey-500 text-xl" icon={faFacebook} />
          <FontAwesomeIcon className="text-custom-grey-500 text-xl" icon={faGoogle} />
          <FontAwesomeIcon className="text-custom-grey-500 text-xl" icon={faYoutube} />
          <FontAwesomeIcon className="text-custom-grey-500 text-xl" icon={faPinterest} />
        </div>
        <div>© Copyright 2022</div>
      </div>
    </div>
  );
}

export default NavigationBar;
