import React, { useState } from 'react';

import {
  BrowserRouter as Router,
} from 'react-router-dom';

import SplashPage from './pages/SplashPage';

import AppRoutes from './components/AppRoutes';

function App() {
  const localUser = localStorage.getItem('user');
  const user = JSON.parse(localUser);
  const [splash, setSplash] = useState(!user);

  const removeSplash = () => {
    setSplash(false);
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setSplash(false);
  //   }, 8000);
  // }, []);
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
