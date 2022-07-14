import React, { useState } from 'react';

import {
  BrowserRouter as Router,
} from 'react-router-dom';

import SplashPage from './pages/SplashPage';

import AppRoutes from './components/AppRoutes';

function App() {
  const user = useState(localStorage.getItem('user') === true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setSplash(false);
  //   }, 8000);
  // }, []);
  return (
    <>
      {!user
        ? (
          <>
            <Router>
              <SplashPage />
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
