import React, { useState, useEffect } from 'react';

import HomePage from './pages/HomePage';
import SplashPage from './pages/SplashPage';

// import SignUp from './pages/SignUp';
// import SignIn from './pages/SignIn';
// import ForgotPassword from './pages/ForgotPassword';

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
            <HomePage />
          </div>
        )}

    </>
  );
}

export default App;
