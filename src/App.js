import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  BrowserRouter as Router,
} from 'react-router-dom';

import SplashPage from './pages/SplashPage';

import AppRoutes from './components/AppRoutes';

import { getProviders } from './redux/reducers/providers';

function App() {
  const dispatch = useDispatch();
  const localUser = localStorage.getItem('user');
  const user = JSON.parse(localUser);
  const renderSplash = (window.location.pathname === '/resetpassword') ? false : !user;
  const [splash, setSplash] = useState(renderSplash);

  const removeSplash = () => {
    setSplash(false);
  };

  useEffect(() => {
    dispatch(getProviders());
  }, []);

  return (
    <>
      {splash
        ? (
          <>
            <Router>
              <SplashPage removeSplash={removeSplash} />
            </Router>
          </>
        )
        : (
          <>
            <Router>
              <AppRoutes />
            </Router>
          </>
        )}
    </>
  );
}

export default App;
