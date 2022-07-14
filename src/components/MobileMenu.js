import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [crossClass, setCrossClass] = useState('hidden');
  const [menuClass, setMenuClass] = useState('w-6 h-6 z-20');
  const [navClass, setNavClass] = useState('hidden');
  const [buttonClass, setButtonClass] = useState('m-5 inline-flex items-center p-2 ml-3 text-sm text-custom-green-500 rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-custom-green-500');

  const changeOpen = () => {
    setOpen(!open);
    if (open) {
      setNavClass('block h-screen w-screen bg-custom-green-500 absolute z-10 top-0');
      setButtonClass('absolute top-0 right-0 items-center m-5 p-2 ml-3 text-sm text-custom-white-500 rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-custom-white-500 z-20');
      setMenuClass('hidden w-6 h-6');
      setCrossClass('w-6 h-6');
    }

    if (!open) {
      setNavClass('hidden');
      setCrossClass('hidden');
      setButtonClass('m-5 inline-flex items-center p-2 ml-3 text-sm text-custom-green-500 rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-custom-green-500');
      setMenuClass('w-6 h-6');
    }
  };
  return (
    <div>
      <button onClick={changeOpen} type="button" className={buttonClass} aria-controls="mobile-menu" aria-expanded="false">
        <svg className={menuClass} aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
        <svg className={crossClass} aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
      </button>
      <div className={navClass}>
        <div className="w-full mt-20 space-y-1">
          <NavLink
            exact
            to="/"
            className="flex flex-col bg-custom-white-500 text-custom-grey-500 text-xl font-bold justify-center h-16 p-5 hover:text-custom-white-500 hover:bg-custom-green-500"
          >
            <p>All Developers</p>
          </NavLink>
          <NavLink
            exact
            to="/reservations"
            className="flex flex-col bg-custom-white-500 text-custom-grey-500 text-xl font-bold justify-center h-16 p-5 hover:text-custom-white-500 hover:bg-custom-green-500"
          >
            <p>Manage Reservations</p>
          </NavLink>
          <NavLink
            exact
            to="/add-developer"
            className="flex flex-col bg-custom-white-500 text-custom-grey-500 text-xl font-bold justify-center h-16 p-5 hover:text-custom-white-500 hover:bg-custom-green-500"
          >
            <p>Add New Developer</p>
          </NavLink>
          <NavLink
            exact
            to="/delete-developer"
            className="flex flex-col bg-custom-white-500 text-custom-grey-500 text-xl font-bold justify-center h-16 p-5 hover:text-custom-white-500 hover:bg-custom-green-500"
          >
            <p>Delete Developer</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
