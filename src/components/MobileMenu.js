import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function MobileMenu() {
  const user = JSON.parse(localStorage.getItem('user'));
  const admin = () => {
    if (user.admin) {
      return true;
    }

    return false;
  };
  const [open, setOpen] = useState(false);
  const [crossClass, setCrossClass] = useState('hidden');
  const [menuClass, setMenuClass] = useState('w-6 h-6 z-20');
  const [navClass, setNavClass] = useState('hidden');
  const [buttonClass, setButtonClass] = useState('m-5 inline-flex items-center p-2 ml-3 text-sm text-custom-green-500 rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-custom-green-500');

  const inactiveClassName = 'flex flex-col bg-custom-white-500 text-custom-grey-500 text-xl font-bold justify-center h-16 p-5 hover:text-custom-white-500 hover:bg-custom-grey-500';
  const activeClassName = 'flex flex-col bg-custom-grey-500 text-custom-white-500 text-xl font-bold h-16 justify-center p-5';

  const variants = {
    open: { opacity: 1 },
    closed: { opacity: 0, y: '-100%' },
  };

  const changeOpen = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem('user');
    navigate('/');
    window.location.reload();
  };

  useEffect(() => {
    if (open) {
      setNavClass('fixed block h-screen w-screen bg-custom-green-500 z-10 top-0');
      setButtonClass('absolute top-0 right-0 items-center m-5 p-2 ml-3 text-sm text-custom-white-500 rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-custom-white-500 z-20');
      setMenuClass('hidden w-6 h-6');
      setCrossClass('w-6 h-6');
    }

    if (!open) {
      setCrossClass('hidden');
      setButtonClass('m-5 inline-flex items-center p-2 ml-3 text-sm text-custom-green-500 rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-custom-green-500');
      setMenuClass('w-6 h-6');
    }
  }, [open]);
  return (
    <div className="absolute w-full z-20">
      <button onClick={changeOpen} type="button" className={buttonClass} aria-controls="mobile-menu" aria-expanded="false">
        <svg className={menuClass} aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
        <svg className={crossClass} aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
      </button>
      <motion.div
        className={navClass}
        animate={open ? 'open' : 'closed'}
        variants={variants}
      >
        <div className="w-full mt-20 space-y-1">
          <NavLink
            onClick={closeMenu}
            exact="true"
            to="/"
            className={({ isActive }) => (isActive ? activeClassName : inactiveClassName)}
          >
            <p>All Developers</p>
          </NavLink>
          <NavLink
            onClick={closeMenu}
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
                  onClick={closeMenu}
                  exact="true"
                  to="/add-developer"
                  className={({ isActive }) => (isActive ? activeClassName : inactiveClassName)}
                >
                  <p>Add New Developer</p>
                </NavLink>
                <NavLink
                  onClick={closeMenu}
                  exact="true"
                  to="/delete-developer"
                  className={({ isActive }) => (isActive ? activeClassName : inactiveClassName)}
                >
                  <p>Delete Developer</p>
                </NavLink>
              </>
            ) : ''}
          <div className="flex items-center justify-center pt-20">
            <button onClick={handleClick} className="bg-custom-white-500 text-custom-grey-500 border border-custom-green-500 hover:bg-custom-grey-500 hover:text-white font-bold py-2 px-4 rounded focus:outline-none" type="button">
              Logout
            </button>
          </div>
          {user
            ? (
              <div className="text-custom-green-500 p-2 bg-custom-grey-500 flex items-center justify-center absolute bottom-0 w-full">
                <p>{`Logged in as: ${user.name}`}</p>
              </div>
            )
            : ''}
        </div>
      </motion.div>
    </div>
  );
}

export default MobileMenu;
