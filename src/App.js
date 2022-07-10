import React, { useState, useEffect } from 'react';

import HomePage from './pages/HomePage';
import SplashPage from './pages/SplashPage';

import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import ForgotPassword from './components/ForgotPassword';

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
        : <div>
            <HomePage />
            <SignUp />
            <SignIn />
            <ForgotPassword />
          </div>}
    </>
  );
}

export default App;
