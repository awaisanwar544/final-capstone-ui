import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter, faFacebook, faGoogle, faYoutube, faPinterest,
} from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logo.png';

function NavigationBar() {
  const providers = useSelector((state) => state.providers);
  const links = [];
  for (let i = 0; i < 5; i += 1) {
    const provider = providers[Math.floor(Math.random() * providers.length)];
    if (provider) {
      if (Math.floor(Math.random() * 3) === 0) links.push(provider.github_profile);
      else if (Math.floor(Math.random() * 3) === 1) links.push(provider.linkedin_profile);
      else links.push(provider.twitter_profile);
    }
  }
  const user = JSON.parse(localStorage.getItem('user'));
  const admin = () => {
    if (user.admin) {
      return true;
    }

    return false;
  };
  const inactiveClassName = 'flex flex-col bg-custom-white-500 text-custom-grey-500 text-xl font-bold justify-center h-16 p-5 hover:text-custom-white-500 hover:bg-custom-green-500';
  const activeClassName = 'flex flex-col bg-custom-green-500 text-custom-white-500 text-xl font-bold h-16 justify-center p-5';

  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem('user');
    navigate('/');
    window.location.reload();
  };
  return (
    <>
      <div className="hidden lg:flex flex-col pl-5 items-center justify-between bg-custom-white-500 h-screen w-1/5 shadow-xl">
        <a href="/" className="w-24">
          <img className="object-contain" src={logo} alt="logo" />
        </a>
        <div className="w-full space-y-1">
          <NavLink
            exact="true"
            to="/"
            className={({ isActive }) => (isActive ? activeClassName : inactiveClassName)}
          >
            <p>All Developers</p>
          </NavLink>
          <NavLink
            exact="true"
            to="/reservations"
            className={({ isActive }) => (isActive ? activeClassName : inactiveClassName)}
          >
            <p>Manage Reservations</p>
          </NavLink>
          {admin()
            ? (
              <>
                <NavLink
                  exact="true"
                  to="/add-developer"
                  className={({ isActive }) => (isActive ? activeClassName : inactiveClassName)}
                >
                  <p>Add New Developer</p>
                </NavLink>
                <NavLink
                  exact="true"
                  to="/delete-developer"
                  className={({ isActive }) => (isActive ? activeClassName : inactiveClassName)}
                >
                  <p>Delete Developer</p>
                </NavLink>
              </>
            ) : ''}
        </div>
        <div className="flex flex-col items-center justify-center truncate pr-5">
          <div>
            <p className="text-custom-green-500 font-bold text-sm">{`Logged in as: ${user.name}`}</p>
          </div>
          <button onClick={handleClick} className="bg-custom-white-500 text-custom-grey-500 border border-custom-green-500 hover:bg-custom-green-500 hover:text-white font-bold py-2 px-4 rounded focus:outline-none" type="button">
            Logout
          </button>
        </div>
        <div className="flex flex-col items-center gap-4 w-full pr-5">
          <div className="flex justify-between w-full">
            <a href={links[0]} target="_blank" rel="noreferrer">
              <FontAwesomeIcon className="text-custom-grey-500 text-xl hover:text-custom-green-500" icon={faTwitter} />
            </a>
            <a href={links[1]} target="_blank" rel="noreferrer">
              <FontAwesomeIcon className="text-custom-grey-500 text-xl hover:text-custom-green-500" icon={faFacebook} />
            </a>
            <a href={links[2]} target="_blank" rel="noreferrer">
              <FontAwesomeIcon className="text-custom-grey-500 text-xl hover:text-custom-green-500" icon={faGoogle} />
            </a>
            <a href={links[3]} target="_blank" rel="noreferrer">
              <FontAwesomeIcon className="text-custom-grey-500 text-xl hover:text-custom-green-500" icon={faYoutube} />
            </a>
            <a href={links[4]} target="_blank" rel="noreferrer">
              <FontAwesomeIcon className="text-custom-grey-500 text-xl hover:text-custom-green-500" icon={faPinterest} />
            </a>
          </div>
          <div>© Copyright 2022</div>
        </div>
      </div>
    </>
  );
}

export default NavigationBar;
