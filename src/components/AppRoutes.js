import React from 'react';

import {
  Routes,
  Route,
} from 'react-router-dom';

import HomePage from '../pages/HomePage';
import MyReservations from '../pages/MyReservations';
import AddDeveloper from '../pages/AddDeveloper';
import DeleteDeveloper from '../pages/DeleteDeveloper';

import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import ForgotPassword from '../pages/ForgotPassword';
import DeveloperDetailsPage from '../pages/DeveloperDetailsPage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<HomePage />} />
      <Route path="/" exact element={<HomePage />} />
      <Route path="/signup" exact element={<SignUp />} />
      <Route path="/signin" exact element={<SignIn />} />
      <Route path="/forgot-password" exact element={<ForgotPassword />} />
      <Route path="/reservations" exact element={<MyReservations />} />
      <Route path="/add-developer" exact element={<AddDeveloper />} />
      <Route path="/delete-developer" exact element={<DeleteDeveloper />} />
      <Route path="/developer/:id" exact element={<DeveloperDetailsPage />} />
    </Routes>
  );
}

export default AppRoutes;
