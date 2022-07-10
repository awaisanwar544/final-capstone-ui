import React, { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
} from 'react-router-dom';
import AppRoutes from './components/AppRoutes';

import SplashPage from './pages/SplashPage';

function App() {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 8000);
  }, []);
  return (
    <>
      {splash
        ? <SplashPage />
        : (
          <div>
            <Router>
              <AppRoutes />
            </Router>
          </div>
        )}

    </>
  );
}

export default App;
