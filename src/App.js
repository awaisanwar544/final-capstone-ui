import React, { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import SplashPage from './pages/SplashPage';

function App() {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 8000);
  }, []);
  return (
    <div>
      {splash
        ? <SplashPage />
        : <HomePage />}
    </div>
  );
}

export default App;
