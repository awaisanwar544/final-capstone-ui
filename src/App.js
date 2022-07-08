import React, { useState, useEffect } from 'react';
import NavigationBar from './components/NavigationBar';
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
        : <NavigationBar />}
    </div>
  );
}

export default App;
