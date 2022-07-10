import React from 'react';

import {
  Routes,
  Route,
} from 'react-router-dom';

import HomePage from '../pages/HomePage';

import SignUp from './SignUp';
import SignIn from './SignIn';
import ForgotPassword from './ForgotPassword';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/signup" exact element={<SignUp />} />
      <Route path="/signin" exact element={<SignIn />} />
      <Route path="/forgot-password" exact element={<ForgotPassword />} />
    </Routes>
  );
}

export default AppRoutes;
