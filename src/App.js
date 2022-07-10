import React, { useState } from 'react';

import {
  BrowserRouter as Router,
} from 'react-router-dom';

import AppRoutes from './components/AppRoutes';

import SplashPage from './pages/SplashPage';

function App() {
  const [splash, setSplash] = useState(true);

  const changeSplash = () => {
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
              <SplashPage changeSplash={changeSplash} />
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
